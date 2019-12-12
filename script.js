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
    for (let i = data.length - 1; i >= 0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        //console.log('this is i', i ,'this is j', j)
            randomArr.push(data[j])
            
    //console.log('this is randomArr', randomArr)
    }   
    for (let item = 0; item < 20; item++) {
        if ((randomArr[item] !== randomArr[item - 1]) && (randomArr[item] !== randomArr[item - 2]) && 
        (randomArr[item] !== randomArr[item - 3]) && (randomArr[item] !== randomArr[item - 4]) &&
        (randomArr[item] !== randomArr[item - 5])){
            wordList.push(randomArr[item])
            console.log('this is wordlist', wordList)
        }
    }
    inputTextBox.focus()
    inputTextBox.select
    englishWordCardArea.innerText = wordList[currentWordIndex].English
    finalScoreLine.innerText = ''
    currentWordIndex = 0
    numCorrect = 0
    numAttempted = 0
}
startOverButton.addEventListener('click', refreshPage)
submitButton.addEventListener('click', checkForMatch)

function checkForMatch(evt){
    console.log('this is word list:', wordList) 
    finalScoreLine.innerText = ''
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
        currentWordIndex += 1

    if (currentWordIndex === 10){
        englishWordCardArea.innerText = ''
        // resultAreaTop.innerText = ''
        resultAreaBottom.innerText = ''

        if (numCorrect >= 8){
            finalScoreLine.innerText = 'Well done! You got ' + numCorrect + ' out of 10 right. You won! Click the \'Start Over\' button to try a new word list.'   
        } else {
            finalScoreLine.innerText = "You got " + numCorrect + ' out of 10 right. You lost! You need to get at least 8 out of 10 to win. Click the \'Start Over\' button to try again.' 
        }
    } else {
        englishWordCardArea.innerText = wordList[currentWordIndex].English
    }
    }

function refreshPage() {
    window.location.reload()
}
createWordList()

