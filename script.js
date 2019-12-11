let url = 'https://api.myjson.com/bins/7muh8'

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
let randomArr = []
let englishWordCardArea = document.querySelector('.english-word-card')
let submitButton = document.querySelector('#submit-button')
let resultAreaTop = document.querySelector('#result-line-top')
let resultAreaBottom = document.querySelector('#result-line-bottom')
let inputTextBox = document.querySelector('.esperanto-word')
let startOverButton = document.querySelector('#start-over-button')
let finalScoreLine = document.querySelector('#final-score-line')
let inputText = ''
let currentWord = []

function createWordList(data){
    for (let i = data.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        randomArr.push(data[j])
    }
    for (let item = 0; item < 10; item++) {
    wordList.push(randomArr[item])
    }
    inputTextBox.focus()
    inputTextBox.select
    englishWordCardArea.innerText = wordList[currentWordIndex].English
// call esperanto function
    // createWordPair()
}
// create the english word, esperanto word pair (currently on line 51-54)
// function createWordPair() {
//     console.log(wordList)
//     //wordList[previousWordIndex] = ''
    
//     // console.log(wordList[previousWordIndex])
//     // console.log(wordList[currentWordIndex])
//     //wordList[currentWordIndex] = currentWord[previousWordIndex]
//     englishWordCardArea.innerText = wordList[currentWordIndex].English
//     esperantoWord = wordList[currentWordIndex].Esperanto
//     }
submitButton.addEventListener('click', checkForMatch)

function checkForMatch(evt){ 

    console.log('this is current word index', currentWordIndex)
        
    esperantoWord = wordList[currentWordIndex].Esperanto
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
    
    if (currentWordIndex === 10){
        if (numCorrect >= 8){
            finalScoreLine.innerText = 'Well done! You got ' + numCorrect + ' out of 10 right. Click the \'Start Over\' button to try a new word list.'
            startOverButton.addEventListener('click', createWordList())
            currentWordIndex = 0

        } else {
            finalScoreLine.innerText = "You got " + numCorrect + ' out of 10 right. You need to get at least 8 out of 10 to move on to a new word list. Click the \'Start Over\' button to try again with the same list.'
            currentWordIndex = 0
        
        startOverButton.addEventListener('click', checkForMatch())
        
        }
     } else {
        englishWordCardArea.innerText = wordList[currentWordIndex].English
    }
    } 

createWordList()

