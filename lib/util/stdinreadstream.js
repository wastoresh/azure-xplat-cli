var stream = require('stream');
var crypto = require('crypto');
var util = require('util');
var fs = require('fs');
var EventEmitter = require('events').EventEmitter;

var bufferSize = 4 * 1024 * 1024; // 4MB

function StdInReadStream(options) {
  stream.Stream.call(this);
  this.readable = true;

  if(!options) {
    options = {};
  }

  this._destroyed = false;
  this._streamEnded = false;
  this._offset = 0;
  this._paused = undefined;
  this._allocator = options.allocator;

  this._md5hash = null;
  this._md5sum = undefined;

  if (options.calcContentMd5) {
    this._md5hash = crypto.createHash('md5');
  }
}

util.inherits(StdInReadStream, stream.Stream);

/**
* Add event listener
*/
StdInReadStream.prototype.on = function(event, listener) {
  if (event === 'data' && this._paused === undefined) {
    this._paused = false;
    this._emitData();
  }

  return EventEmitter.prototype.on.call(this, event, listener);
};

/**
* Get buffer
*/
StdInReadStream.prototype._getBuffer = function(size) {
  if(this._allocator && this._allocator.getBuffer) {
    return this._allocator.getBuffer(size);
  } else {
    var buffer = new Buffer(size);
    return buffer;
  }
};

/**
* Release buffer
*/
StdInReadStream.prototype._releaseBuffer = function(buffer) {
  if(this._allocator && this._allocator.releaseBuffer) {
    this._allocator.releaseBuffer(buffer);
  }
};

/**
* Emit the data from file
*/
StdInReadStream.prototype._emitData = function() {
  var self = this;

  if (this._paused || this._streamEnded) {
    return;
  }
  
  var buffer = this._getBuffer(bufferSize);
  try {
    var bytesRead = fs.readSync(0 /* fd */, buffer, 0, bufferSize);

    if(bytesRead === 0) {
      if(!self._streamEnded) {
        self._streamEnded = true;
        self.emit('end');
      }
      return;
    }

    var range = {
      start : self._offset,
      end : self._offset + bytesRead - 1,
      size : bytesRead
    };

    var data;
    if(bytesRead == bufferSize) {
      data = buffer;
    } else {
      data = buffer.slice(0, bytesRead);
      //Release the current buffer since we created a new one
      self._releaseBuffer(buffer);
    }

    if(self._md5hash) {
      self._md5hash.update(data);
    }

    self.emit('data', data, range);

    // cleanup
    self._offset += bytesRead;
    buffer = data = null;
    self._emitData();
  } catch(err) {
    if (e.code === 'EOF') {
      if(!self._streamEnded) {
        self._streamEnded = true;
        self.emit('end');
      }
      return;
    }
    
    self.emit('error', error);
  }
};

/**
* Get file content md5 when read completely.
*/
StdInReadStream.prototype.getContentMd5 = function(encoding) {
  if (!encoding) encoding = 'base64';
  if(!this._md5hash) {
    throw new Error('Can\'t get content md5, please set the calcContentMd5 option for FileReadStream.');
  } else {
    if (this._streamEnded) {
      if (!this._md5sum) {
        this._md5sum = this._md5hash.digest(encoding);
      }
      return this._md5sum;
    } else {
      throw new Error('StdInReadStream has not ended.');
    }
  }
};

/**
* Pause chunk stream
*/
StdInReadStream.prototype.pause = function() {
  this._paused = true;
};

/**
* Resume read stream
*/
StdInReadStream.prototype.resume = function() {
  var previousState = this._paused;
  if (this._paused) {
    this._paused = false;

    if(previousState === true) {
      //Only start to emit data when it's in pause state
      this._emitData();
    }
  }
};

StdInReadStream.prototype.finish = function () {
  this.destroy();
};

StdInReadStream.prototype.destroy = function () {
  if (this._destroyed) {
    return;
  }

  this.readable = false;
  this._destroyed = true;
};

module.exports = StdInReadStream;
