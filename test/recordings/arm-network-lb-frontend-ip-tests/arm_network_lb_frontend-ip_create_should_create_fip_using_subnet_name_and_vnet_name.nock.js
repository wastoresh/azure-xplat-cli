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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb-fip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f2e58e9d-3643-42bf-9c36-8eddbde003ac',
  'x-ms-correlation-request-id': 'f2e58e9d-3643-42bf-9c36-8eddbde003ac',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121427Z:f2e58e9d-3643-42bf-9c36-8eddbde003ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:14:27 GMT',
  connection: 'close',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/loadBalancers/test-lb' under resource group 'xplat-test-lb-fip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f2e58e9d-3643-42bf-9c36-8eddbde003ac',
  'x-ms-correlation-request-id': 'f2e58e9d-3643-42bf-9c36-8eddbde003ac',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121427Z:f2e58e9d-3643-42bf-9c36-8eddbde003ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 25 Mar 2016 12:14:27 GMT',
  connection: 'close',
  'content-length': '160' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"f381976c-e9db-4cc2-b03b-2782b4956be4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f82a19a-8903-436e-8b7f-a22299330c99\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65669060-dac6-481f-8292-65579f220267',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/65669060-dac6-481f-8292-65579f220267?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'b73be834-12b9-43b2-b234-e31643fed5bc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121432Z:b73be834-12b9-43b2-b234-e31643fed5bc',
  date: 'Fri, 25 Mar 2016 12:14:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(201, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"f381976c-e9db-4cc2-b03b-2782b4956be4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f82a19a-8903-436e-8b7f-a22299330c99\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65669060-dac6-481f-8292-65579f220267',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/65669060-dac6-481f-8292-65579f220267?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'b73be834-12b9-43b2-b234-e31643fed5bc',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121432Z:b73be834-12b9-43b2-b234-e31643fed5bc',
  date: 'Fri, 25 Mar 2016 12:14:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"f381976c-e9db-4cc2-b03b-2782b4956be4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f82a19a-8903-436e-8b7f-a22299330c99\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f381976c-e9db-4cc2-b03b-2782b4956be4"',
  'x-ms-request-id': '97e86be2-e6ad-44e8-8c49-883708e2ea74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c3fdf5a6-4a9c-4dc5-9029-7254b8363136',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121433Z:c3fdf5a6-4a9c-4dc5-9029-7254b8363136',
  date: 'Fri, 25 Mar 2016 12:14:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"f381976c-e9db-4cc2-b03b-2782b4956be4\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f82a19a-8903-436e-8b7f-a22299330c99\",\r\n    \"frontendIPConfigurations\": [],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"f381976c-e9db-4cc2-b03b-2782b4956be4"',
  'x-ms-request-id': '97e86be2-e6ad-44e8-8c49-883708e2ea74',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c3fdf5a6-4a9c-4dc5-9029-7254b8363136',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121433Z:c3fdf5a6-4a9c-4dc5-9029-7254b8363136',
  date: 'Fri, 25 Mar 2016 12:14:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"7c679cc9-ae97-4ff7-bec8-d5ea28a64537\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '357',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7c679cc9-ae97-4ff7-bec8-d5ea28a64537"',
  'x-ms-request-id': 'bb1e61fe-ca4f-4852-b780-ed5a3b49ccc8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'ca68fb4e-ed7b-45e9-8861-51101660d078',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121434Z:ca68fb4e-ed7b-45e9-8861-51101660d078',
  date: 'Fri, 25 Mar 2016 12:14:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/virtualnetworks/test-vnet/subnets/test-subnet?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-subnet\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\",\r\n  \"etag\": \"W/\\\"7c679cc9-ae97-4ff7-bec8-d5ea28a64537\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '357',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7c679cc9-ae97-4ff7-bec8-d5ea28a64537"',
  'x-ms-request-id': 'bb1e61fe-ca4f-4852-b780-ed5a3b49ccc8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'ca68fb4e-ed7b-45e9-8861-51101660d078',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121434Z:ca68fb4e-ed7b-45e9-8861-51101660d078',
  date: 'Fri, 25 Mar 2016 12:14:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"a465d7d1-aa94-4246-9012-b949686b7e9f\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f82a19a-8903-436e-8b7f-a22299330c99\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"a465d7d1-aa94-4246-9012-b949686b7e9f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1321',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4984adaa-aa78-4949-bf29-63bf2f0fbffa',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/4984adaa-aa78-4949-bf29-63bf2f0fbffa?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd53eeb9e-9489-4306-b358-27e419d30a6f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121435Z:d53eeb9e-9489-4306-b358-27e419d30a6f',
  date: 'Fri, 25 Mar 2016 12:14:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-lb\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb\",\r\n  \"etag\": \"W/\\\"a465d7d1-aa94-4246-9012-b949686b7e9f\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7f82a19a-8903-436e-8b7f-a22299330c99\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"test-fip\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/loadBalancers/test-lb/frontendIPConfigurations/test-fip\",\r\n        \"etag\": \"W/\\\"a465d7d1-aa94-4246-9012-b949686b7e9f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb-fip/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1321',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4984adaa-aa78-4949-bf29-63bf2f0fbffa',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/operations/4984adaa-aa78-4949-bf29-63bf2f0fbffa?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'd53eeb9e-9489-4306-b358-27e419d30a6f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T121435Z:d53eeb9e-9489-4306-b358-27e419d30a6f',
  date: 'Fri, 25 Mar 2016 12:14:35 GMT',
  connection: 'close' });
 return result; }]];