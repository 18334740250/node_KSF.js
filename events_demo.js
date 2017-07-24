var EventEmitter=require('events').EventEmitter;
var life=new EventEmitter();
//设置最大的监听事件个数
life.setMaxListeners(15);

function first(name){
	console.log(name+'  1请求帮助！');
	
};
//on()与addListener()相同
//回调函数外置，这样方便以后取消相同监听事件下的不同回掉函数
life.on('help',first);

life.on('help',function (name){
	console.log(name+'  2请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  3请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  4请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  5请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  6请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  7请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  8请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  9请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  10请求帮助！');
});

life.on('help',function (name){
	console.log(name+'  11请求帮助！');
});

life.on('Silfan',function (name){
	console.log(name+'  是一个好人！');
});
//取消监听事件
life.removeListener('help',first);
//拿掉所有的监听事件(不加参数就是拿掉所有life的监听事件)
//life.removeAllListeners();
life.removeAllListeners('help');
//事件的监听触发默认本身返回的是一个时间有没有被触发的布尔量
var help=life.emit('help','Silfan');
var Silfan=life.emit('Silfan','Silfan');
//var lele=life.emit('lele','lele');
//console.log(help);
//console.log(Silfan);
//console.log(lele);
//查看某一个监听事件被监听的次数
console.log(life.listeners('Silfan').length);
console.log(life.listeners('help').length);
//另一种查看某一个监听事件被监听的次数的方法
//console.log(EventEmitter.listenerCount(life,'help'));
