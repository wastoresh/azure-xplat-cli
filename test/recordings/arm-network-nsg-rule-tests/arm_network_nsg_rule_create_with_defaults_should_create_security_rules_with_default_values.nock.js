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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '291',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fce0aa53-b1b0-4f26-9e99-2b419fb4f5e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '8d4fd8e5-5ca3-48ca-abaf-cc229f7622ea',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125837Z:8d4fd8e5-5ca3-48ca-abaf-cc229f7622ea',
  date: 'Tue, 14 Feb 2017 12:58:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '291',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fce0aa53-b1b0-4f26-9e99-2b419fb4f5e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '8d4fd8e5-5ca3-48ca-abaf-cc229f7622ea',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125837Z:8d4fd8e5-5ca3-48ca-abaf-cc229f7622ea',
  date: 'Tue, 14 Feb 2017 12:58:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"9b0d92d4-21a3-4219-b383-2704a37be594\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '91f532b1-218b-48de-a517-5125ec060867',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/91f532b1-218b-48de-a517-5125ec060867?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1a574a28-4449-43ca-8080-d3b93d18ca31',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125837Z:1a574a28-4449-43ca-8080-d3b93d18ca31',
  date: 'Tue, 14 Feb 2017 12:58:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"9b0d92d4-21a3-4219-b383-2704a37be594\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '91f532b1-218b-48de-a517-5125ec060867',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/91f532b1-218b-48de-a517-5125ec060867?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '1a574a28-4449-43ca-8080-d3b93d18ca31',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125837Z:1a574a28-4449-43ca-8080-d3b93d18ca31',
  date: 'Tue, 14 Feb 2017 12:58:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/91f532b1-218b-48de-a517-5125ec060867?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3dc20c12-3dc1-4d91-9d8f-a7cca8d605a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '78aaa7f5-1284-493a-a2bf-2a6a22486c7a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125908Z:78aaa7f5-1284-493a-a2bf-2a6a22486c7a',
  date: 'Tue, 14 Feb 2017 12:59:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/91f532b1-218b-48de-a517-5125ec060867?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3dc20c12-3dc1-4d91-9d8f-a7cca8d605a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '78aaa7f5-1284-493a-a2bf-2a6a22486c7a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125908Z:78aaa7f5-1284-493a-a2bf-2a6a22486c7a',
  date: 'Tue, 14 Feb 2017 12:59:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"dedcf765-cf82-4df0-8938-5af4fc453b23\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '591',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"dedcf765-cf82-4df0-8938-5af4fc453b23"',
  'x-ms-request-id': 'a1ce0770-a596-4883-8f55-cff6ee3b46d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7e7780a2-0ad8-40bd-b352-833e24c6258b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125909Z:7e7780a2-0ad8-40bd-b352-833e24c6258b',
  date: 'Tue, 14 Feb 2017 12:59:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"dedcf765-cf82-4df0-8938-5af4fc453b23\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '591',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"dedcf765-cf82-4df0-8938-5af4fc453b23"',
  'x-ms-request-id': 'a1ce0770-a596-4883-8f55-cff6ee3b46d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '7e7780a2-0ad8-40bd-b352-833e24c6258b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125909Z:7e7780a2-0ad8-40bd-b352-833e24c6258b',
  date: 'Tue, 14 Feb 2017 12:59:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"dedcf765-cf82-4df0-8938-5af4fc453b23\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '591',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"dedcf765-cf82-4df0-8938-5af4fc453b23"',
  'x-ms-request-id': '73b11eb9-1efe-4eb6-afdc-beee66f888c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '1245d985-6f89-4c3a-a75c-0e89296dc6c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125910Z:1245d985-6f89-4c3a-a75c-0e89296dc6c6',
  date: 'Tue, 14 Feb 2017 12:59:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"securityRulesDefaultName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName\",\r\n  \"etag\": \"W/\\\"dedcf765-cf82-4df0-8938-5af4fc453b23\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"protocol\": \"*\",\r\n    \"sourcePortRange\": \"*\",\r\n    \"destinationPortRange\": \"80\",\r\n    \"sourceAddressPrefix\": \"*\",\r\n    \"destinationAddressPrefix\": \"*\",\r\n    \"access\": \"Allow\",\r\n    \"priority\": 100,\r\n    \"direction\": \"Inbound\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '591',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"dedcf765-cf82-4df0-8938-5af4fc453b23"',
  'x-ms-request-id': '73b11eb9-1efe-4eb6-afdc-beee66f888c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '1245d985-6f89-4c3a-a75c-0e89296dc6c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125910Z:1245d985-6f89-4c3a-a75c-0e89296dc6c6',
  date: 'Tue, 14 Feb 2017 12:59:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/a6ccbf3b-fde0-435d-bcb5-4906de8885f7?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'a6ccbf3b-fde0-435d-bcb5-4906de8885f7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a6ccbf3b-fde0-435d-bcb5-4906de8885f7?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd0edaf59-82cd-489b-b220-ba5f2e1b3333',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125910Z:d0edaf59-82cd-489b-b220-ba5f2e1b3333',
  date: 'Tue, 14 Feb 2017 12:59:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nsg-rule/providers/Microsoft.Network/networkSecurityGroups/test-nsg/securityRules/securityRulesDefaultName?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/a6ccbf3b-fde0-435d-bcb5-4906de8885f7?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': 'a6ccbf3b-fde0-435d-bcb5-4906de8885f7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a6ccbf3b-fde0-435d-bcb5-4906de8885f7?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd0edaf59-82cd-489b-b220-ba5f2e1b3333',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125910Z:d0edaf59-82cd-489b-b220-ba5f2e1b3333',
  date: 'Tue, 14 Feb 2017 12:59:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a6ccbf3b-fde0-435d-bcb5-4906de8885f7?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3b061137-bd5e-47be-b083-4bb0263f9004',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '481feed0-1ec4-4847-ba35-1cff42d36fc0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125941Z:481feed0-1ec4-4847-ba35-1cff42d36fc0',
  date: 'Tue, 14 Feb 2017 12:59:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a6ccbf3b-fde0-435d-bcb5-4906de8885f7?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3b061137-bd5e-47be-b083-4bb0263f9004',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '481feed0-1ec4-4847-ba35-1cff42d36fc0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170214T125941Z:481feed0-1ec4-4847-ba35-1cff42d36fc0',
  date: 'Tue, 14 Feb 2017 12:59:41 GMT',
  connection: 'close' });
 return result; }]];