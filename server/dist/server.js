'use strict';var socket = require('./socket');
var Path = require('path');


require('./db')(function (models) {var
    session = socket.session,start = socket.start,Router = socket.Router;
    start({
        port: 80,
        router: require('./router')(Object.assign({ session: session, Router: Router }, models)),
        publicPath: Path.resolve(__dirname, '../../client/dist') });

});