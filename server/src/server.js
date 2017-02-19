const socket = require('./socket');
const Path = require('path');



require('./db')((models) => {
    const {session, start, Router,} = socket;
    start({
        port: 80,
        router: require('./router')(Object.assign({session, Router,}, models)),
        publicPath: Path.resolve(__dirname, '../../client/dist'),
    });
});
