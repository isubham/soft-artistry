var wirelessHeadphone = require('./wirelessHeadphone');
var wiredHeadphone = require('./wiredHeadphone');

module.exports = function headphoneFactory (type) {
    if (type == 'wiredHeadphone')
    {
        return new wiredHeadphone();
    }
    if (type == 'wirelessHeadphone')
    {
        return new wirelessHeadphone();
    }
    else {
        return new Error('no object of this type')
    }
}