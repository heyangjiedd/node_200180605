var events = require('events');
// 创建对象
var event = new events.EventEmitter();

event.on('some_event',function () {
   console.log('some_event')
});
event.emit('some_event')
console.log(event.listenerCount('some_event'))
