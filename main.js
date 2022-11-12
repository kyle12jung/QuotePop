const result = document.querySelector('.result');
const submitButton = document.querySelector('.submit')
var quote = 'hello';

// when button clicked, return quote
submitButton.addEventListener('click', () => {
    result.children[0].innerHTML += quote;
})