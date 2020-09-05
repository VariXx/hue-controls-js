const { bridgePut } = require('./bridgePut');

async function colorLoop(lightId, toggle) {
    let payload; 
    if(toggle) {
        payload = {
            effect: "colorloop"
        }
    }
    else {
        payload = {
            effect: "none"
        }
    }
    await bridgePut(`lights/${lightId}/state`, payload);
}

module.exports.colorLoop = colorLoop;
