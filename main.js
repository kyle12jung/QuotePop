// conversations for each person
var person1 = []
var person2 = []

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const submitButton1 = document.querySelector('.submit1')
const submitButton2 = document.querySelector('.submit2')
    // sample quote
var quote = 'hello';

// when button clicked, return quote

//https://stackoverflow.com/questions/13175510/call-python-function-from-javascript-code
//https://stackoverflow.com/questions/32288722/call-python-function-from-js

//For submit button ONE
submitButton1.addEventListener('click', () => {
    result1.children[0].innerHTML = "Your Quote: "
    result1.children[0].innerHTML += "\""
    result1.children[0].innerHTML += "Pain is necessary for growth."
    result1.children[0].innerHTML += "\""
    document.querySelector('#person-1').value = "Pain is necessary for growth."
})


//For submit button TWO
//For submit button ONE
submitButton2.addEventListener('click', () => {
    result2.children[0].innerHTML = "Your Quote: "
    result2.children[0].innerHTML += "\""
    result2.children[0].innerHTML += "I think therefore I am."
    result2.children[0].innerHTML += "\""
    document.querySelector('#person-2').value = "I think therefore I am."
})


const person1SubmitButton = document.querySelector('.person-1-submit');
const finalConversation = document.querySelector('.final-conversation');
person1SubmitButton.addEventListener('click', () => {
    const text = document.querySelector('#person-1').value
    if (text !== '') {
        finalConversation.innerHTML += `<p><b>Person 1:</b> ${text}</p>`
        person1.push(text)
        document.querySelector('#person-1').value = ''
        document.querySelector('#p1-quote').innerHTML = 'Your Quote: '
    }
})


const person2SubmitButton = document.querySelector('.person-2-submit');
person2SubmitButton.addEventListener('click', () => {
    const text = document.querySelector('#person-2').value
    if (text !== '') {
        finalConversation.innerHTML += `<p><b>Person 2:</b> ${text}</p>`
        person2.push(text)
        document.querySelector('#person-2').value = ''
        document.querySelector('#p2-quote').innerHTML = 'Your Quote: '
    }
})