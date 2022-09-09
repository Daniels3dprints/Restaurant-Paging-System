//TODO
//Script to communicate with all pagers and test lights and sounds.\
const pagerAmount = 4;

var config = readConfig();
var devModeEnabled = config.devMode;

function testPagers() {
    if (devModeEnabled) {
        console.log('Dev mode enabled');
        for (let i = 0; i < pagerAmount + 1; i++) {
            deviceTrigger();
        }
    }
    if (devModeEnabled == false) {
        alert('Sorry! This feature hasn\'t been implemented yet!');
    }
    else {
        console.log('Unknown server mode found in config.json: ' + devModeEnabled);
    }
}

