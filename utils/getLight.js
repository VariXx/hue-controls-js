const { bridgeGet } = require('./bridgeGet');

async function getLight(lightId) {
    let result = await bridgeGet(`lights/${lightId}`);
    // https://developers.meethue.com/develop/hue-api/lights-api/
    return result;
}

module.exports.getLight = getLight;
