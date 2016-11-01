'use strict';
var express = require('express');
var image = require('image');
var app = express();
// let _ = require('lodash') ;
// {
// 	var a =[];
// 	for (var i = 10; i >= 0; i--) {
// 		a[i] = function() {
// 			console.log(i);
// 		}
// 	}
// 	a[6]();
// }
// {
// 	let c = (a)=>{
// 		console.log(a+1);
// 	};
// 	c(6);
// }
// {
// 	const a = 10;
// 	console.log(a);
// }
// {
// 	var [a,b,c,d] = [1,3,4,3];
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// 	console.log(d);
// }
// {
// 	let {x=5,y=4} = {
// 		x:undefined,
// 		y:3
// 	}
// 	console.log(x);
// 	console.log(y);
// }
{
	// console.log(_.pick({a:1,b:2,c:3}, ['a', 'b']));
	// var obj =  new Proxy({}, {
	// 	get: (target, key, receiver) =>{
	// 		console.log(`getting ${key}`);
	// 		return Reflect.get(target, key, receiver);
	// 	},
	// 	set: (target, key, receiver)=> {
	// 		console.log(`setting ${key}`);
	// 		return Reflect.set(target, key, receiver);
	// 	}
	// });

	// obj["a"] = 5;
	// obj.count = 1;
	// console.log(`
	// 	test
	// 	haha
	// 	haha
	// 	${obj.count}
	// 	`);
}
{
	app.use('/', function(req, res) {
		res.sendfile("./TestProject 1.0.ipa");
	});
	app.listen(8080, function (err) {
	  if (err) return console.log(err);
	  console.log('Listening at http://localhost:' + 8080);
	});

}