/*
let address, // Local ip address that we're trying to calculate
  os = require("os"), // Provides a few basic operating-system related utility functions (built-in)
  ifaces = os.networkInterfaces(); // Network interfaces

// Iterate over interfaces ...
for (let dev in ifaces) {
    // ... and find the one that matches the criteria
    let iface= ifaces[dev].filter(function(details) {
        return details.family === 'IPv4' && details.internal === false;
    });

    if (iface.length > 0) address = iface[0].address;
}

// Print the result
console.log(address);
*/

const publicIp= require("public-ip");

(async () => {
  console.log(await publicIp.v4());
  console.log(await publicIp.v6());
})();