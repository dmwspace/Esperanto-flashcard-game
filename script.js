let url = 'https://api.myjson.com/bins/tt5lk'

fetch(url)

.then(res => res.json())

.then(langData => {
    createWordList(langData)
})

.catch(err => console.log('this is an err', err))

let count = 0
let wordList = []
let englishWord = ''
let esperantoWord = ''
const englishWordCardArea = document.querySelector('.english-word-card')
let submitButton = document.querySelector('#submit-button')


function createWordList(data){
    for (let item = 0; item < 10; item++) {
    wordList.push(data[item])
    }
    let englishWord = wordList[0].English
    let esperantoWord = wordList[0].Esperanto 
    englishWordCardArea.innerText = englishWord
    checkForMatch()

function checkForMatch(){
    submitButton.addEventListener('click', checkForMatch)
    let inputTextBox = document.querySelector('.esperanto-word')
    let inputText = inputTextBox.value
    console.log('input text', inputText)
    console.log('esperanto word', esperantoWord)
    if (inputText === esperantoWord) {
        console.log('You got that right')
    } else {
        console.log('You got that wrong')
    }
        
        //checkForMatch()
}
    } 
      
        //console.log(englishWord, item)
        
        
       // console.log(esperantoWord, item)
        
//function checkForMatch(inputText, esperantoWord) {
    
 

createWordList()

