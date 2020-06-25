const fetch = require('node-fetch');
const hueSettings = require('./hueSettings');
const colors = require('./hueColors');

const errorColor = [0.692,0.308] // red 

let bridgeURL = `http://${hueSettings.bridgeIP}/api/${hueSettings.username}`;

async function bridgePut(pathString, payload) {
    const result = await fetch(`${bridgeURL}/${pathString}`, {method: 'PUT', body: JSON.stringify(payload)});   
    return result; 
}

async function bridgeGet(pathString) {
    const result = await fetch(`${bridgeURL}/${pathString}`, {method: 'GET'});
    const data = await result.json();    
    return data;
}

async function setLightState(state, lightId) {
    let payload = {
        on: state
    };
    await bridgePut(`lights/${lightId}/state`, payload);
}

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

async function getLight(lightId) {
    let result = await bridgeGet(`lights/${lightId}`);
    // https://developers.meethue.com/develop/hue-api/lights-api/
    return result;
}

async function start() { 
    // console.log(process.argv); // args start at 1    
    getLight(9);
}

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

// start();
