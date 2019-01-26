var liveServer = require("live-server");

var params = {
    root: "./src", // Set root directory that's being served. Defaults to cwd.
    mount: [['/node_modules', './node_modules']], // Mount a directory to a route.
    port: "3000"
};
liveServer.start(params);