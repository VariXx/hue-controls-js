const { bridgePut } = require('./bridgePut');

async function setLightState(state, lightId) {
    let payload = {
        on: state
    };
    await bridgePut(`lights/${lightId}/state`, payload);
}

module.exports.setLightState = setLightState;
