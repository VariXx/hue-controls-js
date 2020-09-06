const hueSettings = require('./hueSettings');
const { colorLoop } = require('./utils/colorLoop');
const { getAllLights } = require('./utils/getAllLights');

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

(async () => {
    // colorLoop(hueSettings.bridgeIP, hueSettings.username, 9, true);
    const result = await getAllLights(hueSettings.bridgeIP, hueSettings.username);
    // for(key in result) {
    //     console.log(key);
    // }
    console.log(result);
})();
