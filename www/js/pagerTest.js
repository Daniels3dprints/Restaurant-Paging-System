//TODO
//Script to communicate with all pagers and test lights and sounds.
const fs = require("fs");
const pagerAmount = 4;

fs.readFile("../config.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading config.json:", err);
      alert("Couldn't read config.json! Operation cancelled.");
      return;
    }
    try {
      const config = JSON.parse(jsonString);
      devModeEnabled = config.devMode;
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });

function testPagers() {
    if (devModeEnabled) {
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

