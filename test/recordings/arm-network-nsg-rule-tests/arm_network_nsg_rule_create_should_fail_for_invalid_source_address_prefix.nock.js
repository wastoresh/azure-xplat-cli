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
  'x-ms-request-id': '878bc032-bd81-44b8-a1d4-a41262c14120',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3c5922b1-71a0-4c7e-8b5b-b111a45c0357',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125950Z:3c5922b1-71a0-4c7e-8b5b-b111a45c0357',
  date: 'Tue, 14 Feb 2017 12:59:50 GMT',
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
  'x-ms-request-id': '878bc032-bd81-44b8-a1d4-a41262c14120',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3c5922b1-71a0-4c7e-8b5b-b111a45c0357',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125950Z:3c5922b1-71a0-4c7e-8b5b-b111a45c0357',
  date: 'Tue, 14 Feb 2017 12:59:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidAddressPrefix\",\r\n    \"message\": \"Security rule /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule has invalid Address prefix. Value provided: 10.0.0.0/42\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '350',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f077ecc-ccce-42e3-aaee-14d7e11389f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6a9a9a13-16b4-4b2a-8643-bee50eb128de',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125951Z:6a9a9a13-16b4-4b2a-8643-bee50eb128de',
  date: 'Tue, 14 Feb 2017 12:59:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule?api-version=2016-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"SecurityRuleInvalidAddressPrefix\",\r\n    \"message\": \"Security rule /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/test-rule has invalid Address prefix. Value provided: 10.0.0.0/42\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '350',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2f077ecc-ccce-42e3-aaee-14d7e11389f6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6a9a9a13-16b4-4b2a-8643-bee50eb128de',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125951Z:6a9a9a13-16b4-4b2a-8643-bee50eb128de',
  date: 'Tue, 14 Feb 2017 12:59:50 GMT',
  connection: 'close' });
 return result; }]];