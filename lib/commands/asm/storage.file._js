//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

var azure = require('azure');
var StorageUtil = require('../../util/storage.util');
var util = require('util');
var pathUtil = require('path');
var fs = require('fs');
var utils = require('../../util/utils');
var commander = require('commander');
var url = require('url');
var performStorageOperation = StorageUtil.performStorageOperation;
var startProgress = StorageUtil.startProgress;
var endProgress = StorageUtil.endProgress;
var SpeedSummary = azure.BlobService.SpeedSummary;

var __ = require('underscore');
var $ = utils.getLocaleString;

/**
* Add storge account command line options
*/
commander.Command.prototype.addStorageAccountOption = function () {
  this.option('-a, --account-name <accountName>', $('the storage account name'));
  this.option('-k, --account-key <accountKey>', $('the storage account key'));
  this.option('-c, --connection-string <connectionString>', $('the storage connection string'));
  this.option('-vv, --debug', $('run storage command in debug mode'));
  return this;
};

/**
* Init storage file share command
*/
exports.init = function (cli) {

  //Init StorageUtil
  StorageUtil.init(cli);

  /**
  * Define storage file share command usage
  */
  var storage = cli.category('storage')
    .description($('Commands to manage your Storage objects'));

  var logger = cli.output;

  var share = storage.category('share')
    .description($('Commands to manage your Storage file shares'));

  share.command('create [share]')
    .description($('Create a storage file share'))
    .option('--share <share>', $('the storage file share name'))
    .addStorageAccountOption()
    .execute(createShare);

  share.command('show [share]')
    .description($('Show details of the storage file share'))
    .option('--share <share>', $('the storage file share name'))
    .addStorageAccountOption()
    .execute(showShare);

  share.command('delete [share]')
    .description($('Delete the specified storage file share'))
    .option('--share <share>', $('the storage file share name'))
    .option('-q, --quiet', $('remove the specified storage file share without confirmation'))
    .addStorageAccountOption()
    .execute(deleteShare);

  share.command('list [prefix]')
    .description($('List storage shares with prefix'))
    .option('-p, --prefix <prefix>', $('the storage share name prefix'))
    .addStorageAccountOption()
    .execute(listShares);

  var file = storage.category('file')
    .description($('Commands to manage your Storage files'));

  file.command('list [share] [path]')
    .usage('[options] [share] [path]')
    .description($('List storage files in the specified share under specific path'))
    .option('--share <share>', $('the storage share name'))
    .option('-p, --path <path>', $('the path to be listed'))
    .addStorageAccountOption()
    .execute(listFiles);

  file.command('delete [share] [path]')
    .usage('[options] [share] [path]')
    .description($('Delete the specified storage file'))
    .option('--share <share>', $('the storage share name'))
    .option('-p, --path <path>', $('the path to the storage file'))
    .option('-q, --quiet', $('remove the specified storage file without confirmation'))
    .addStorageAccountOption()
    .execute(deleteFile);

  file.command('upload [source] [share] [path]')
    .usage('[options] [source] [share] [path]')
    .description($('Upload the specified local file to storage'))
    .option('-s, --source <source>', $('the local file path'))
    .option('--share <share>', $('the storage share name'))
    .option('-p, --path <path>', $('the path to the storage file'))
    .option('--concurrenttaskcount <concurrenttaskcount>', $('the maximum number of concurrent upload requests'))
    .option('-q, --quiet', $('overwrite the specified storage file without confirmation'))
    .addStorageAccountOption()
    .execute(uploadFile);

  file.command('download [share] [path] [destination]')
    .usage('[options] [share] [path] [destination]')
    .description($('Download the specified storage file'))
    .option('--share <share>', $('the storage share name'))
    .option('-p, --path <path>', $('the path to the storage file'))
    .option('-d, --destination <destination>', $('path to the destination file or directory'))
    .option('-m, --checkmd5', $('check md5sum for the downloaded file'))
    .option('-q, --quiet', $('overwrite the destination file without confirmation'))
    .addStorageAccountOption()
    .execute(downloadFile);

  var directory = storage.category('directory')
    .description($('Commands to manage your Storage file directory'));

  directory.command('create [share] [path]')
    .description($('Create a storage file directory'))
    .option('--share <share>', $('the storage file share name'))
    .option('-p, --path <path>', $('the path to the storage file directory to be created'))
    .addStorageAccountOption()
    .execute(createDirectory);

  directory.command('delete [share] [path]')
    .description($('Delete the specified storage file directory'))
    .option('--share <share>', $('the storage share name'))
    .option('-p, --path <path>', $('the path to the storage file directory to be deleted'))
    .option('-q, --quiet', $('remove the specified storage file directory without confirmation'))
    .addStorageAccountOption()
    .execute(deleteDirectory);

  /**
  * Implement storage file share cli
  */

  /**
  * Get file service account from user specified credential or env variables
  */
  function getFileServiceClient(options) {
    var serviceClient = StorageUtil.getServiceClient(StorageUtil.getFileService, options);
    applyFileServicePatch(serviceClient);
    return serviceClient;
  }

  /**
  * Get Storage file operation object
  * @param {string} [operationName] operation name
  * @return {StorageOperation} storage file operation
  */
  function getStorageFileOperation(serviceClient, operationName) {
    var operation = new StorageUtil.StorageOperation();
    operation.type = StorageUtil.OperationType.File;
    operation.operation = operationName;
    operation.service = serviceClient;
    return operation;
  }

  /**
  * Get Storage file operation options
  */
  function getStorageFileOperationDefaultOption() {
    var option = StorageUtil.getStorageOperationDefaultOption();

    // Add file specific options here

    return option;
  }

  /**
  * Create a storage file share
  */
  function createShare(share, options, _) {
    var fileService = getFileServiceClient(options);
    share = StorageUtil.promptIfNotGiven($('Share name: '),share,_);
    var operation = getStorageFileOperation(fileService, 'createShare');
    var tips = util.format($('Creating storage file share %s'), share);
    var storageOptions = getStorageFileOperationDefaultOption();
    startProgress(tips);
    try {
      var created = performStorageOperation(operation, _, share, storageOptions);
      if (created === false) {
        throw new Error(util.format($('Share \'%s\' already exists'), share));
      }
    }
    finally {
      endProgress();
    }

    logger.verbose(util.format($('Share %s has been created successfully'), share));
    showShare(share,StorageUtil.getStorageAccountOptions(options),_);
  }

  /**
  * Delete the specified storage file share
  */
  function deleteShare(share, options, _) {
    var fileService = getFileServiceClient(options);
    share = StorageUtil.promptIfNotGiven($('Share name: '),share,_);
    var operation = getStorageFileOperation(fileService, 'deleteShare');
    var tips = util.format($('Deleting storage file share %s'), share);
    var storageOptions = getStorageFileOperationDefaultOption();
    var force = !!options.quiet;

    if (force !== true) {
      force = StorageUtil.confirm(util.format($('Do you want to delete share %s?'),share),_);
      if (force !== true) {
        return;
      }
    }

    startProgress(tips);

    try {
      performStorageOperation(operation, _, share, storageOptions);
    }
    catch (e) {
      if (StorageUtil.isNotFoundException(e)) {
        throw new Error(util.format($('Can not find share \'%s\''), share));
      } else {
        throw e;
      }
    }
    finally {
      endProgress();
    }

    logger.info(util.format($('Share %s has been deleted successfully'), share));
  }

  /**
  * Show the details of the specified Storage file share
  */
  function showShare(share, options, _) {
    var fileService = getFileServiceClient(options);
    share = StorageUtil.promptIfNotGiven($('Share name: '),share,_);
    var operation = getStorageFileOperation(fileService, 'getShareProperties');
    var tips = $('Getting Storage share information');
    var storageOptions = getStorageFileOperationDefaultOption();
    var properties = [];

    startProgress(tips);
    try {
      properties = performStorageOperation(operation, _, share, storageOptions);
    }
    catch (e) {
      if (StorageUtil.isNotFoundException(e)) {
        throw new Error(util.format($('Share %s doesn\'t exist'), share));
      } else {
        throw e;
      }
    } finally {
      endProgress();
    }

    logger.json(properties);
  }

  /**
  * List storage shares
  * @param {string} prefix share prefix
  * @param {object} options commadline options
  * @param {callback} _ callback function
  */
  function listShares(prefix, options, _) {
    var fileService = getFileServiceClient(options);
    var listOperation = getStorageFileOperation(fileService, 'listAllShares');
    var tips = $('Getting storage shares');
    var storageOptions = getStorageFileOperationDefaultOption();

    var shares;
    storageOptions.prefix = prefix;
    startProgress(tips);

    try {
      shares = performStorageOperation(listOperation, _, storageOptions);
    } finally {
      endProgress();
    }

    cli.interaction.formatOutput(shares, function (outputData) {
      if (outputData.length === 0) {
        logger.info($('No share found'));
      } else {
        logger.table(outputData, function (row, item) {
          row.cell($('Name'), item.name);
          row.cell($('Last-Modified'), item.properties['last-modified']);
        });
      }
    });
  }

  /**
  * List storage files
  * @param {string} share share name
  * @param {string} path path to be listed
  * @param {object} options commadline options
  * @param {callback} _ callback function
  */
  function listFiles(share, path, options, _) {
    var fileService = getFileServiceClient(options);
    var listOperation = getStorageFileOperation(fileService, 'listFilesAndDirectories');
    share = promptIfNotGiven($('Share name: '), share, _);
    if (__.isUndefined(path)) {
      path = '';
    }

    path = normalizePath(path);
    var tips = $('Getting storage files');
    var storageOptions = getStorageFileOperationDefaultOption();

    var listResults;
    startProgress(tips);

    try {
      listResults = performStorageOperation(listOperation, _, share, path, storageOptions);
    } finally {
      endProgress();
    }

    cli.interaction.formatOutput(listResults, function (outputData) {
      if (outputData.directories.length + outputData.files.length > 0) {
        logger.table(outputData.directories.concat(outputData.files), function (row, item) {
          row.cell($('Name'), item.name);
          if (item.properties) {
            row.cell($('Length'), item.properties['content-length']);
            row.cell($('Type'), '');
          }
          else {
            row.cell($('Length'), '');
            row.cell($('Type'), '<DIR>');
          }
        });
      }
    });
  }

  /**
  * Delete the specified storage file
  */
  function deleteFile(share, path, options, _) {
    var fileService = getFileServiceClient(options);
    share = promptIfNotGiven($('Share name: '), share, _);
    path = promptIfNotGiven($('Path to the file: '), path, _);
    var operation = getStorageFileOperation(fileService, 'deleteFile');
    var tips = util.format($('Deleting storage file \'%s\' in share %s'), path, share);
    var storageOptions = getStorageFileOperationDefaultOption();
    var force = !!options.quiet;

    if (force !== true) {
      force = confirm(util.format($('Do you want to delete file %s?'), path), _);
      if (force !== true) {
        return;
      }
    }

    startProgress(tips);

    path = normalizePath(path);
    var result = fetchBasenameAndDirname(path);
    var directory = result.dirname;
    var file = result.basename;

    try {
      performStorageOperation(operation, _, share, directory, file, storageOptions);
    }
    catch (e) {
      if (StorageUtil.isNotFoundException(e)) {
        throw new Error(util.format($('Can not find file \'%s\' in share %s'), path, share));
      } else {
        throw e;
      }
    }
    finally {
      endProgress();
    }

    logger.info(util.format($('File \'%s\' in share %s has been deleted successfully'), path, share));
  }

  /**
  * upload local file to xSMB
  */
  function uploadFile(source, share, path, options, _) {
    var fileService = getFileServiceClient(options);
    source = promptIfNotGiven($('File to be uploaded: '), source, _);
    share = promptIfNotGiven($('Share name: '), share, _);
    var storageOptions = getStorageFileOperationDefaultOption();
    storageOptions.storeFileContentMD5 = true;
    var force = !!options.quiet;

    if (!utils.fileExists(source, _)) {
      throw new Error(util.format($('Local file %s doesn\'t exist'), source));
    }

    path = normalizePath(path);
    var result = fetchBasenameAndDirname(path);
    var directory = result.dirname;
    var file = result.basename;

    var remoteFileExists = false;

    startProgress(util.format($('Checking file or directory \'%s\' in share %s'), path, share));
    try {
      if (path) {

        // When provided a path, we need to verify if the path is to a directory
        // or an existing file. In first case, we will upload the file onto the
        // directory using its original basename. In second case, we will
        // overwrite the file after prompted.

        /* jshint -W035 */
        // 1. Check if the file exists
        if (file !== '' && performStorageOperation(
          getStorageFileOperation(fileService, 'doesFileExist'),
          _,
          share,
          directory,
          file,
          storageOptions)) {

          remoteFileExists = true;
        }

          // 2. Check if directory exists
        else if (performStorageOperation(
            getStorageFileOperation(fileService, 'doesDirectoryExist'),
            _,
            share,
            path)) {

          directory = path;
          file = pathUtil.basename(source);
        }

          // 3. Check if the path is under an existing directory
        else if (performStorageOperation(
            getStorageFileOperation(fileService, 'doesDirectoryExist'),
            _,
            share,
            directory)) {
          // If the directory exists, we will be able to upload a file into it.
        }
        else {
          throw new Error(util.format($('Path \'%s\' is neither an existing file nor under an existing directory.'), path));
        }
      }
      else {

        // If use didn't specify the path, we assume he wanted the file to be
        // uploaded to root directory and using the source's basename.

        directory = '';
        file = pathUtil.basename(source);
      }

      /* jshint +W035 */

      if (remoteFileExists || performStorageOperation(
          getStorageFileOperation(fileService, 'doesFileExist'),
          _,
          share,
          directory,
          file,
          storageOptions)) {
        remoteFileExists = true;
      }
    }
    finally {
      endProgress();
    }

    if (remoteFileExists === true) {
      if (force !== true) {
        force = confirm(util.format($('Do you want to overwrite remote file %s?'), pathUtil.join(directory, file)), _);
        if (force !== true) {
          return;
        }
      }
    }

    startProgress(util.format($('Uploading file \'%s\' to \'%s\' under share %s'), source, directory, share));
    endProgress();

    var summary = new SpeedSummary(file);
    storageOptions.speedSummary = summary;
    storageOptions.parallelOperationThreadCount = options.concurrenttaskcount;
    var printer = StorageUtil.getSpeedPrinter(summary);
    var intervalId = -1;
    if (!logger.format().json) {
      intervalId = setInterval(printer, 1000);
    }

    var succeeded = false;
    try {
      performStorageOperation(
        getStorageFileOperation(fileService, 'createFileFromLocalFile'),
        _,
        share,
        directory,
        file,
        source,
        storageOptions);

      succeeded = true;
    }
    finally {
      printer(true);
      clearInterval(intervalId);
    }

    if (succeeded === true) {
      logger.info(util.format($('Successfully uploaded file \'%s\' to share %s'), source, share));
    }
  }

  function downloadFile(share, path, destination, options, _) {
    var fileService = getFileServiceClient(options);
    share = promptIfNotGiven($('Share name: '), share, _);
    path = promptIfNotGiven($('Path of the file to be downloaded: '), path, _);
    var storageOptions = getStorageFileOperationDefaultOption();
    var force = !!options.quiet;

    path = normalizePath(path);
    var result = fetchBasenameAndDirname(path);
    var directory = result.dirname;
    var file = result.basename;

    if (destination) {
      var stat;
      try {
        stat = fs.stat(destination, _);
        if (stat.isDirectory()) {

          // If destination is an existing directory, join the remote file
          // name to build up the destination file.
          destination = pathUtil.join(destination, file);
        }
      }
      catch (err) {
        if (!StorageUtil.isFileNotFoundException(err)) {
          throw err;
        }
      }
    }
    else {
      destination = pathUtil.join('.', file);
    }

    // If destination exists as a file, prompt for overwrite if not in
    // quite mode.

    if (utils.fileExists(destination, _)) {
      if (force !== true) {
        force = confirm(util.format($('Do you want to overwrite file %s?'), destination), _);
        if (force !== true) {
          return;
        }
      }
    }

    var operation = getStorageFileOperation(fileService, 'getFileToLocalFile');
    var summary = new SpeedSummary(file);
    storageOptions.speedSummary = summary;
    storageOptions.disableContentMD5Validation = !options.checkmd5;

    startProgress(util.format($('Download remote file \'%s\' from share %s to local path \'%s\''), path, share, destination));
    endProgress();

    var printer = StorageUtil.getSpeedPrinter(summary);
    var intervalId = -1;
    if (!logger.format().json) {
      intervalId = setInterval(printer, 1000);
    }

    var downloadedFile;
    try {
      downloadedFile = performStorageOperation(operation, _, share, directory, file, destination, storageOptions);
    }
    finally {
      printer(true);
      clearInterval(printer);
    }

    /* jshint unused:false */
    cli.interaction.formatOutput(downloadedFile, function (unused) {
      logger.info(util.format($('File saved as %s'), destination));
    });
  }

  function createDirectory(share, path, options, _) {
    var fileService = getFileServiceClient(options);
    share = promptIfNotGiven($('Share name: '), share, _);
    path = promptIfNotGiven($('Path to the directory to be created: '), path, _);
    var operation = getStorageFileOperation(fileService, 'createDirectory');
    var tips = util.format($('Creating storage file directory %s'), share);
    var storageOptions = getStorageFileOperationDefaultOption();
    startProgress(tips);

    path = normalizePath(path);
    try {
      var created = performStorageOperation(operation, _, share, path, storageOptions);
      if (created === false) {
        throw new Error(util.format($('Directory \'%s\' already exists'), path));
      }
    }
    finally {
      endProgress();
    }

    logger.info(util.format($('Directory %s has been created successfully'), path));
  }

  function deleteDirectory(share, path, options, _) {
    var fileService = getFileServiceClient(options);
    share = promptIfNotGiven($('Share name: '), share, _);
    path = promptIfNotGiven($('Path to the directory to be created: '), path, _);
    var operation = getStorageFileOperation(fileService, 'deleteDirectory');
    var tips = util.format($('Deleting storage file directory %s'), share);
    var storageOptions = getStorageFileOperationDefaultOption();
    path = normalizePath(path);
    var force = !!options.quiet;

    if (force !== true) {
      force = confirm(util.format($('Do you want to delete directory %s in share %s?'), path, share), _);
      if (force !== true) {
        return;
      }
    }

    startProgress(tips);

    try {
      performStorageOperation(operation, _, share, path, storageOptions);
    }
    catch (e) {
      if (StorageUtil.isNotFoundException(e)) {
        throw new Error(util.format($('Can not find directory \'%s\' in share %s'), path, share));
      } else {
        throw e;
      }
    }
    finally {
      endProgress();
    }

    logger.info(util.format($('Directory %s has been deleted successfully'), path));
  }

  function fetchBasenameAndDirname(path) {
    var result = {};
    result.basename = pathUtil.basename(path);
    result.dirname = pathUtil.dirname(path);
    if (!result.dirname || result.dirname === '.' || result.dirname.match('/+')) {
      result.dirname = '';
    }

    if (!result.basename) {
      result.basename = '';
    }

    return result;
  }

  function normalizePath(path) {
    return url.resolve('', __.without(path.replace('\\', '/').split('/'), '').join('/'));
  }

  /**
  * Patch for azure node sdk
  */
  function applyFileServicePatch(fileService) {

    /*
    * List all shares
    * NOTICE: All the caller should use the options parameter since it's just a internal implementation
    */
    fileService.listAllShares = function (options, callback) {
      StorageUtil.listWithContinuation(fileService.listSharesSegmentedWithPrefix, fileService, options.prefix, null, options, callback);
    };

    /*
    * List files and directories in the given folder
    * NOTICE: All the caller should use the options parameter since it's just a internal implementation
    */
    fileService.listFilesAndDirectories = function (share, directory, options, callback) {
      StorageUtil.listWithContinuation(fileService.listFilesAndDirectoriesSegmented, fileService, share, directory, null, options, callback);
    };
  }
};