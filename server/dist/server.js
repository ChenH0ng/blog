"use strict";

var _configs = require("./configs");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var socket = require("./socket");
var Path = require("path");


require("./db")(function (models) {
  var session = socket.session,
      start = socket.start,
      Router = socket.Router,
      rest = _objectWithoutProperties(socket, ["session", "start", "Router"]);

  start({
    port: 80,
    router: require("./router")(Object.assign({ session: session, Router: Router }, models)),
    publicPath: Path.resolve(__dirname, "../../client/" + (_configs.debug ? "dev" : "dist"))
  });
});