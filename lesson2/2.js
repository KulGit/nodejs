const EventEmitter = require ("events");

const eventEmitter = new EventEmitter();

const handler = (payload) => {
    console.log(payload)
}

eventEmitter.on('start', handler );

eventEmitter.emit('start', 'App started1');

eventEmitter.removeListener('start', handler);

eventEmitter.emit('start', 'App started2');


