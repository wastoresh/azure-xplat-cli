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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrgr01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrgr02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-1-406f580d-a634-4077-9b11-216a70c5998d.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/start?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"cliTestOrigin01\",\"properties\":{\r\n        \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/c6eb00f8-7ed8-4828-88d8-e3ab77c37492/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint01?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '3679ff8c-6edd-4463-a1e3-c7e27c755086',
  'x-ms-client-request-id': '8ba13452-eeee-4e22-8307-89c686cdc763',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/c6eb00f8-7ed8-4828-88d8-e3ab77c37492?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': 'ceb8b457-c104-4978-bd1f-831e2adac75a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121844Z:ceb8b457-c104-4978-bd1f-831e2adac75a',
  date: 'Wed, 18 May 2016 12:18:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplattestadlsrgr01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/start?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"cliTestOrigin01\",\"properties\":{\r\n        \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/c6eb00f8-7ed8-4828-88d8-e3ab77c37492/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint01?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '3679ff8c-6edd-4463-a1e3-c7e27c755086',
  'x-ms-client-request-id': '8ba13452-eeee-4e22-8307-89c686cdc763',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/c6eb00f8-7ed8-4828-88d8-e3ab77c37492?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': 'ceb8b457-c104-4978-bd1f-831e2adac75a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121844Z:ceb8b457-c104-4978-bd1f-831e2adac75a',
  date: 'Wed, 18 May 2016 12:18:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/c6eb00f8-7ed8-4828-88d8-e3ab77c37492?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '02934a07-b766-4caf-a104-872a1d554080',
  'x-ms-client-request-id': 'fa29e638-efe9-4c59-9589-4c75b8f0d0c3',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'c8ab8c3c-8824-480c-9959-fcf85e792fdf',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121915Z:c8ab8c3c-8824-480c-9959-fcf85e792fdf',
  date: 'Wed, 18 May 2016 12:19:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplattestadlsrgr01/providers/Microsoft.Cdn/operationresults/c6eb00f8-7ed8-4828-88d8-e3ab77c37492?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '02934a07-b766-4caf-a104-872a1d554080',
  'x-ms-client-request-id': 'fa29e638-efe9-4c59-9589-4c75b8f0d0c3',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'c8ab8c3c-8824-480c-9959-fcf85e792fdf',
  'x-ms-routing-request-id': 'WESTEUROPE:20160518T121915Z:c8ab8c3c-8824-480c-9959-fcf85e792fdf',
  date: 'Wed, 18 May 2016 12:19:15 GMT',
  connection: 'close' });
 return result; }]];