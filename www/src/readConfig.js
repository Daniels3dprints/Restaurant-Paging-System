//TODO
//Read config.json
const fs = require('fs');


global.readConfig = function() {
    fs.readFile("../config.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("Error reading config.json:", err);
          alert("Couldn't read config.json! Operation cancelled.");
          return;
        }
        try {
          const config = JSON.parse(jsonString);
          return config;
        } catch (err) {
          console.log("Error parsing JSON string:", err);
        }
      });
}