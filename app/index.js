
import './main.scss';
import generateText from './sub';
let app  = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
	app.innerHTML = '<h1>Hello World ' + number + '</h1>';
	app.appendChild(generateText());
	document.body.appendChild(app);
});