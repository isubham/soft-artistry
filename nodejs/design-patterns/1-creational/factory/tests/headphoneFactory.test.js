var headphoneFactory = require('../src/headphoneFactory');

var wiredHeadphone = new headphoneFactory('wiredHeadphone');
console.log(wiredHeadphone._type == 'wiredHeadphone')

var wirelessHeadphone = new headphoneFactory('wirelessHeadphone');
console.log(wirelessHeadphone._type == 'wirelessHeadphone')
