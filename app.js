const EventEmitter = require('events');

const customEmitter = new EventEmitter()
//on - listen to an event
//emit - emit an event

customEmitter.on('response', ()=> {
    console.log(`data recieved`);
})

customEmitter.emit('response')