//我们这里使用CommonJS的风格
function generateText() {
  var element = document.createElement('h2');
  element.innerHTML = "you are not only one";
  return element;
}

module.exports = generateText;