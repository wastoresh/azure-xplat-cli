// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18978/providers/Microsoft.Web/serverfarms?api-version=2015-08-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18978/providers/Microsoft.Web/serverfarms/armappserviceplantests8496\",\"name\":\"armappserviceplantests8496\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests8496\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg18978-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg18978\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-065_3492\"},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}],\"nextLink\":null,\"id\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1081',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'da4a02fd-87b3-4af5-ba0e-1787a275ba9f',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e5cc92e2-07e6-4c59-aeae-5b7591ad7cac',
  'x-ms-routing-request-id': 'WESTUS2:20160921T013459Z:e5cc92e2-07e6-4c59-aeae-5b7591ad7cac',
  date: 'Wed, 21 Sep 2016 01:34:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18978/providers/Microsoft.Web/serverfarms?api-version=2015-08-01')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18978/providers/Microsoft.Web/serverfarms/armappserviceplantests8496\",\"name\":\"armappserviceplantests8496\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests8496\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg18978-WestUSwebspace\",\"subscription\":\"8d57ddbd-c779-40ea-b660-1015f4bf027d\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg18978\",\"reserved\":false,\"mdmId\":\"waws-prod-bay-065_3492\"},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}],\"nextLink\":null,\"id\":null}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1081',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'da4a02fd-87b3-4af5-ba0e-1787a275ba9f',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e5cc92e2-07e6-4c59-aeae-5b7591ad7cac',
  'x-ms-routing-request-id': 'WESTUS2:20160921T013459Z:e5cc92e2-07e6-4c59-aeae-5b7591ad7cac',
  date: 'Wed, 21 Sep 2016 01:34:59 GMT',
  connection: 'close' });
 return result; }]];