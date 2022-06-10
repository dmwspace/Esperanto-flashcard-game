// fetching the JSON file
let url = './wordlist.json'

fetch(url)

.then(res => res.json())

.then(langData => {
    createWordList(langData)
})

.catch(err => console.log('this is an err', err))

// instantiating the variables

let currentWordIndex = 0
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
let messageArea = document.querySelector('#message-area')
let inputText = ''
let currentWord = []

// creating the randomized word list by pushing various indexed objects to the randomArr array
function createWordList(data){
    for (let i = data.length - 1; i >= 0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        randomArr.push(data[j])
    }   
// making sure that the word that is not equal to the previous 9 words in the randomArr array, then pushing
// that word to the wordList array
    for (let item = 0; item < 30; item++) {
        if (!wordList.includes(randomArr[item])){
            wordList.push(randomArr[item])
        //    console.log('this is wordlist', wordList)
        }
    }
// putting the cursor in the input text box and putting the first word in the English word card
    inputTextBox.focus()
    inputTextBox.select
    englishWordCardArea.innerText = wordList[currentWordIndex].English

}
// adding event listeners
startOverButton.addEventListener('click', refreshPage)
submitButton.addEventListener('click', checkForMatch)
inputTextBox.addEventListener('keydown', submitKeyDownFunc)
// these are the two functions for the return key, it activates the Submit button while the game is going
// and it activates the Start Over button after 10 words have been shown   
function submitKeyDownFunc(e) {
    if (e.key === 'Enter'){
        checkForMatch()
        event.preventDefault()
    }
}
function submitKeyDownFuncToo(e) {
    if (e.key === 'Enter') {
        refreshPage()
    }
}
// this function compares the English word with the Esperanto word that has been entered
function checkForMatch(e){
    // console.log('this is word list:', wordList) 
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
        messageArea.innerText = numCorrect + '/' + numAttempted
// after the 10th word the game is over and the appropriate message is shown
    if (currentWordIndex === 10){
        englishWordCardArea.innerText = ''
        // resultAreaTop.innerText = ''
        resultAreaBottom.innerText = ''
        submitButton.removeEventListener('click', checkForMatch)
        inputTextBox.removeEventListener('keydown', submitKeyDownFunc)
        inputTextBox.addEventListener('keydown', submitKeyDownFuncToo)
        if (numCorrect >= 8){
            finalScoreLine.innerText = 'Well done! You got ' + numCorrect + ' out of 10 right. You won! Click the \'Start Over\' button or press Return to try a new word list.'   
            messageArea.innerText = numCorrect + '/' + numAttempted + ' WINNER!'
            messageArea.className = 'winner-flash'
        } else {
            finalScoreLine.innerText = "You got " + numCorrect + ' out of 10 right. You lost! You need to get at least 8 out of 10 to win. Click the \'Start Over\' button or press Return to try again.' 
            messageArea.innerText = numCorrect + '/' + numAttempted + ' Try Again'
        }
    } else {
        englishWordCardArea.innerText = wordList[currentWordIndex].English
    }
    }
// this is the function that is invoked when the Start Over button is clicked, or after 10 words have been
// entered, the return key is pressed
function refreshPage() {
    window.location.reload()
}
// the createWordList function is invoked when the game starts to create a new word list
createWordList()

