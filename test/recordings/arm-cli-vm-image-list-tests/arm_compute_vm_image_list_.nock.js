// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['mobileservice'],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/alertlogic/artifacttypes/vmimage/offers/alert-logic-tm/skus/20215000100-tmpbyol/versions?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1.0.0\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/alertlogic/Publishers/alert-logic-tm/ArtifactTypes/VMImage/Offers/20215000100-tmpbyol/Skus/1.0.0/Versions/eastus\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '279',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '64542adf-c8fb-4e29-85b7-882129a08a2a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': 'e1d621f9-99cf-4fc7-b2cf-0dccd40b7d9c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173325Z:e1d621f9-99cf-4fc7-b2cf-0dccd40b7d9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 17:33:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/alertlogic/artifacttypes/vmimage/offers/alert-logic-tm/skus/20215000100-tmpbyol/versions?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"1.0.0\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/alertlogic/Publishers/alert-logic-tm/ArtifactTypes/VMImage/Offers/20215000100-tmpbyol/Skus/1.0.0/Versions/eastus\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '279',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '64542adf-c8fb-4e29-85b7-882129a08a2a',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31992',
  'x-ms-correlation-request-id': 'e1d621f9-99cf-4fc7-b2cf-0dccd40b7d9c',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150422T173325Z:e1d621f9-99cf-4fc7-b2cf-0dccd40b7d9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 17:33:24 GMT',
  connection: 'close' });
 return result; }]];