const fetch = require('node-fetch');
const hueSettings = require('./hueSettings');

async function start() { 
    // console.log(process.argv); // args start at 1    
    getLight(9);
}

// start();

/* create bridge user example

(async () => {
    if(hueSettings.username.length < 2 || hueSettings.username !== undefined) {
        const bridgeUsername = await createBridgeUser(hueSettings.bridgeIP, `varibot`);
        if(bridgeUsername.created) {
            let updatedConfig = {
                username: bridgeUsername.username,
                bridgeIP: hueSettings.bridgeIP,
            };
            let newConfig = JSON.stringify(updatedConfig);
            console.log(newConfig);
            fs.writeFileSync(`hueSettings.json`, newConfig);
            console.log(`Updated HUE settings JSON`);
        }
        else if(bridgeUsername.message.includes('link button not pressed')) {
            console.log('Press link button on bridge and try again');
        }
        else {
            console.log(`Error creating user: ${bridgeUsername.message}`);
        }
    }
})();
*/
