// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eff39dcb-9036-45da-94ff-39f170c87a08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '32effaf2-50a0-460a-abe8-1cac1d08ea76',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T130000Z:32effaf2-50a0-460a-abe8-1cac1d08ea76',
  date: 'Tue, 14 Feb 2017 12:59:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '276',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eff39dcb-9036-45da-94ff-39f170c87a08',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '32effaf2-50a0-460a-abe8-1cac1d08ea76',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T130000Z:32effaf2-50a0-460a-abe8-1cac1d08ea76',
  date: 'Tue, 14 Feb 2017 12:59:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidPriority\",\r\n    \"message\": \"Security rule has invalid Priority. Value provided: 4097 Allowed range 100-4096.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '186',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91f92fdb-8e90-437e-9e13-fa44e8d007bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e7974b8e-1ba1-4f38-967a-cac03caf764f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T130000Z:e7974b8e-1ba1-4f38-967a-cac03caf764f',
  date: 'Tue, 14 Feb 2017 13:00:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidPriority\",\r\n    \"message\": \"Security rule has invalid Priority. Value provided: 4097 Allowed range 100-4096.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '186',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '91f92fdb-8e90-437e-9e13-fa44e8d007bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'e7974b8e-1ba1-4f38-967a-cac03caf764f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T130000Z:e7974b8e-1ba1-4f38-967a-cac03caf764f',
  date: 'Tue, 14 Feb 2017 13:00:00 GMT',
  connection: 'close' });
 return result; }]];