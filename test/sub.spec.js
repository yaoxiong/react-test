var  generateText = require('../app/sub');

describe('test sub', function() {
	it('<h2>you are not only one</h2>', function() {
		var element = generateText.default();
		expect(element.tagName.toUpperCase()).toBe('H2');
	});
});