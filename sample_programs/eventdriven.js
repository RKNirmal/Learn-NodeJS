//load events api
var events = require('events');
var fs = require('fs');
//create event emitter object
var EventEmitter = new events.EventEmitter();
data= fs.readFileSync("new.txt");

EventEmitter.on('start', function(){
    console.log('program started');
    EventEmitter.emit('load');
});

EventEmitter.on('close', function(){
    console.log('program ended');
});

EventEmitter.on('load', function(){
    console.log('file loaded');
    console.log(data.toString());
    console.log('file printed');
    EventEmitter.emit('close');
});

EventEmitter.emit("start");