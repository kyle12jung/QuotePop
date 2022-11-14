// conversations for each person
var person1 = []
var person2 = []

const result = document.querySelector('.result');
const submitButton = document.querySelector('.submit')
    // sample quote
var quote = 'hello';

// when button clicked, return quote
submitButton.addEventListener('click', () => {
    result.children[0].innerHTML += quote;
})

const person1SubmitButton = document.querySelector('.person-1-submit');
const finalConversation = document.querySelector('.final-conversation');
person1SubmitButton.addEventListener('click', () => {
    const text = document.querySelector('#person-1').value
    if (text !== '') {
        finalConversation.innerHTML += `<p>Person 1: ${text}</p>`
        person1.push(text)
        document.querySelector('#person-1').value = ''
    }
})


const person2SubmitButton = document.querySelector('.person-2-submit');
person2SubmitButton.addEventListener('click', () => {
    const text = document.querySelector('#person-2').value
    if (text !== '') {
        finalConversation.innerHTML += `<p>Person 2: ${text}</p>`
        person2.push(text)
        document.querySelector('#person-2').value = ''
    }
})