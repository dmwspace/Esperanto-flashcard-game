let url = 'https://api.myjson.com/bins/tt5lk'

fetch(url)

.then(res => res.json())

.then(langData => {
    createWordList(langData)
})

.catch(err => console.log('this is an err', err))

let currentWordIndex = 0
//let previousWordIndex = 0
let wordList = []
let englishWord = ''
let esperantoWord = ''
let numCorrect = 0
let numAttempted = 0
const englishWordCardArea = document.querySelector('.english-word-card')
let submitButton = document.querySelector('#submit-button')
let resultAreaTop = document.querySelector('#result-line-top')
let resultAreaBottom = document.querySelector('#result-line-bottom')
let inputTextBox = document.querySelector('.esperanto-word')
let startOverButton = document.querySelector('#start-over-button')
let inputText = ''
let currentWord = []

function createWordList(data){
    for (let item = 0; item < 10; item++) {
    wordList.push(data[item])
    }
    inputTextBox.focus()
    inputTextBox.select
// call esperanto function
    createWordPair()
}
// create the english word, esperanto word pair (currently on line 51-54)
function createWordPair() {
    console.log(wordList)
    //wordList[previousWordIndex] = ''
    console.log('this is current word index', currentWordIndex)
    // console.log(wordList[previousWordIndex])
    // console.log(wordList[currentWordIndex])
    //wordList[currentWordIndex] = currentWord[previousWordIndex]
    englishWordCardArea.innerText = wordList[currentWordIndex].English 
    esperantoWord = wordList[currentWordIndex].Esperanto
}
submitButton.addEventListener('click', checkForMatch)

function checkForMatch(evt){  

    inputText = inputTextBox.innerText
  
    if (inputText === esperantoWord) {
        numCorrect += 1
        numAttempted += 1
        resultAreaTop.innerText = 'Correct' 
        resultAreaBottom.innerText = 'You now have ' + numCorrect + 
        ' out of ' + numAttempted + ' correct.'
    } else {
        numAttempted += 1
        resultAreaTop.innerText = 'Incorrect, the correct word is ' + esperantoWord 
        resultAreaBottom.innerText = 'You now have ' + numCorrect + 
        ' out of ' + numAttempted + ' correct.'
    }
    
    inputTextBox.focus()
    inputTextBox.select
    inputTextBox.innerText = ''
   // previousWordIndex = currentWordIndex
    currentWordIndex += 1
    // if (currentWordIndex === 10){

    // } else {
    createWordPair()
    // }    
    //checkForMatch()
}

      
        //console.log(englishWord, item)
        
        
       // console.log(esperantoWord, item)
        
//function checkForMatch(inputText, esperantoWord) {
    
 

createWordList()

