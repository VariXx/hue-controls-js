const fetch = require('node-fetch');

async function bridgePut(pathString, payload) {
    let bridgeURL = `http://${hueSettings.bridgeIP}/api/${hueSettings.username}`;    
    const result = await fetch(`${bridgeURL}/${pathString}`, {method: 'PUT', body: JSON.stringify(payload)});   
    return result; 
}

module.exports.bridgePut = bridgePut;
