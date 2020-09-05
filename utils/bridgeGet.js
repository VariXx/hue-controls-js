const fetch = require('node-fetch');

async function bridgeGet(pathString) {
    let bridgeURL = `http://${hueSettings.bridgeIP}/api/${hueSettings.username}`;    
    const result = await fetch(`${bridgeURL}/${pathString}`, {method: 'GET'});
    const data = await result.json();    
    return data;
}

module.exports.bridgeGet = bridgeGet;
