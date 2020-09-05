const { bridgePut } = require('./bridgePut');

async function setLightColor(color, lightId) {
    let newColor = errorColor;
    for(let key in colors) { 
        if(key.toLowerCase() == color) {
            newColor = colors[key];
            break;
        }
    }
    let payload = {
        xy: newColor
    };
    await bridgePut(`lights/${lightId}/state`, payload);
}

module.exports.setLightColor = setLightColor;
