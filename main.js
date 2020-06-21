const fetch = require('node-fetch');
const hueSettings = require('./hueSettings');

colors = {
    'Alice Blue': [0.3088,0.3212],
    'Antique White': [0.3548,0.3489],
    'Aqua': [0.1607,0.3423],
    'Aquamarine': [0.2138,0.4051],
    'Azure': [0.3059,0.3303],
    'Beige': [0.3402,0.356],
    'Bisque': [0.3806,0.3576],
    'Black': [0.153,0.048],
    'Blanched Almond': [0.3695,0.3584],
    'Blue': [0.153,0.048],
    'Blue Violet': [0.251,0.1056],
    'Brown': [0.6399,0.3041],
    'Burlywood': [0.4236,0.3811],
    'Cadet Blue': [0.2211,0.3328],
    'Chartreuse': [0.2505,0.6395],
    'Chocolate': [0.6009,0.3684],
    'Coral': [0.5763,0.3486],
    'Cornflower': [0.1905,0.1945],
    'Cornsilk': [0.3511,0.3574],
    'Crimson': [0.6508,0.2881],
    'Cyan': [0.1607,0.3423],
    'Dark Blue': [0.153,0.048],
    'Dark Cyan': [0.1607,0.3423],
    'Dark Goldenrod': [0.5214,0.4361],
    'Dark Gray': [0.3227,0.329],
    'Dark Green': [0.17,0.7],
    'Dark Khaki': [0.4004,0.4331],
    'Dark Magenta': [0.3833,0.1591],
    'Dark Olive Green': [0.3475,0.5047],
    'Dark Orange': [0.5921,0.3831],
    'Dark Orchid': [0.2986,0.1341],
    'Dark Red': [0.692,0.308],
    'Dark Salmon': [0.4837,0.3479],
    'Dark Sea Green': [0.2924,0.4134],
    'Dark Slate Blue': [0.2206,0.1484],
    'Dark Slate Gray': [0.2239,0.3368],
    'Dark Turquoise': [0.1605,0.3366],
    'Dark Violet': [0.2824,0.1104],
    'Deep Pink': [0.5445,0.2369],
    'Deep Sky Blue': [0.158,0.2379],
    'Dim Gray': [0.3227,0.329],
    'Dodger Blue': [0.1559,0.1599],
    'Firebrick': [0.6621,0.3023],
    'Floral White': [0.3361,0.3388],
    'Forest Green': [0.1984,0.6746],
    'Fuchsia': [0.3833,0.1591],
    'Gainsboro': [0.3227,0.329],
    'Ghost White': [0.3174,0.3207],
    'Gold': [0.4871,0.4618],
    'Goldenrod': [0.5125,0.4428],
    'Gray': [0.3227,0.329],
    'Web Gray': [0.3227,0.329],
    'Green': [0.17,0.7],
    'Web Green': [0.17,0.7],
    'Green Yellow': [0.3221,0.5857],
    'Honeydew': [0.316,0.3477],
    'Hot Pink': [0.4682,0.2452],
    'Indian Red': [0.5488,0.3112],
    'Indigo': [0.2428,0.0913],
    'Ivory': [0.3334,0.3455],
    'Khaki': [0.4019,0.4261],
    'Lavender': [0.3085,0.3071],
    'Lavender Blush': [0.3369,0.3225],
    'Lawn Green': [0.2485,0.641],
    'Lemon Chiffon': [0.3608,0.3756],
    'Light Blue': [0.2621,0.3157],
    'Light Coral': [0.5075,0.3145],
    'Light Cyan': [0.2901,0.3316],
    'Light Goldenrod': [0.3504,0.3717],
    'Light Gray': [0.3227,0.329],
    'Light Green': [0.2648,0.4901],
    'Light Pink': [0.4112,0.3091],
    'Light Salmon': [0.5016,0.3531],
    'Light Sea Green': [0.1611,0.3593],
    'Light Sky Blue': [0.214,0.2749],
    'Light Slate Gray': [0.2738,0.297],
    'Light Steel Blue': [0.276,0.2975],
    'Light Yellow': [0.3436,0.3612],
    'Lime': [0.17,0.7],
    'Lime Green': [0.1972,0.6781],
    'Linen': [0.3411,0.3387],
    'Magenta': [0.3833,0.1591],
    'Maroon': [0.5383,0.2566],
    'Web Maroon': [0.692,0.308],
    'Medium Aquamarine': [0.215,0.4014],
    'Medium Blue': [0.153,0.048],
    'Medium Orchid': [0.3365,0.1735],
    'Medium Purple': [0.263,0.1773],
    'Medium Sea Green': [0.1979,0.5005],
    'Medium Slate Blue': [0.2179,0.1424],
    'Medium Spring Green': [0.1655,0.5275],
    'Medium Turquoise': [0.176,0.3496],
    'Medium Violet Red': [0.5047,0.2177],
    'Midnight Blue': [0.1616,0.0802],
    'Mint Cream': [0.315,0.3363],
    'Misty Rose': [0.3581,0.3284],
    'Moccasin': [0.3927,0.3732],
    'Navajo White': [0.4027,0.3757],
    'Navy Blue': [0.153,0.048],
    'Old Lace': [0.3421,0.344],
    'Olive': [0.4334,0.5022],
    'Olive Drab': [0.354,0.5561],
    'Orange': [0.5569,0.4095],
    'Orange Red': [0.6731,0.3222],
    'Orchid': [0.3688,0.2095],
    'Pale Goldenrod': [0.3751,0.3983],
    'Pale Green': [0.2675,0.4826],
    'Pale Turquoise': [0.2539,0.3344],
    'Pale Violet Red': [0.4658,0.2773],
    'Papaya Whip': [0.3591,0.3536],
    'Peach Puff': [0.3953,0.3564],
    'Peru': [0.5305,0.3911],
    'Pink': [0.3944,0.3093],
    'Plum': [0.3495,0.2545],
    'Powder Blue': [0.262,0.3269],
    'Purple': [0.2725,0.1096],
    'Web Purple': [0.3833,0.1591],
    'Rebecca Purple': [0.2703,0.1398],
    'Red': [0.692,0.308],
    'Rosy Brown': [0.4026,0.3227],
    'Royal Blue': [0.1649,0.1338],
    'Saddle Brown': [0.5993,0.369],
    'Salmon': [0.5346,0.3247],
    'Sandy Brown': [0.5104,0.3826],
    'Sea Green': [0.1968,0.5047],
    'Seashell': [0.3397,0.3353],
    'Sienna': [0.5714,0.3559],
    'Silver': [0.3227,0.329],
    'Sky Blue': [0.2206,0.2948],
    'Slate Blue': [0.2218,0.1444],
    'Slate Gray': [0.2762,0.3009],
    'Snow': [0.3292,0.3285],
    'Spring Green': [0.1671,0.5906],
    'Steel Blue': [0.183,0.2325],
    'Tan': [0.4035,0.3772],
    'Teal': [0.1607,0.3423],
    'Thistle': [0.3342,0.2971],
    'Tomato': [0.6112,0.3261],
    'Turquoise': [0.1702,0.3675],
    'Violet': [0.3644,0.2133],
    'Wheat': [0.3852,0.3737],
    'White': [0.3227,0.329],
    'White Smoke': [0.3227,0.329],
    'Yellow': [0.4334,0.5022],
    'Yellow Green': [0.3517,0.5618]
};

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

async function getLight(lightId) {
    let result = await bridgeGet(`lights/${lightId}`);
    console.log(result);
}

async function start() { 
    console.log(process.argv); // args start at 1    
    getLight(9);
}

start();
