// Imports

import { wordListSpanish } from './wordLists.js'

// Variables

let keysPressed = 0
let keysFailed = 0
let wordsCorrect = 0
let maxTime = 30
let isGameActive = true

// Timers

let timerId = setInterval(() => {
  maxTime--
  document.getElementById('timer').innerHTML = maxTime

  if (maxTime <= 0) {
    isGameActive = false
    clearInterval(timerId)
    document.getElementById('timer').innerHTML = "Time's up!"
    let wpm = Math.round(wordsCorrect / 0.5)
    let accuracy = Math.round(((keysPressed - keysFailed) / keysPressed) * 100).toFixed(2) || 0
    document.getElementById('wpm').innerHTML = `WPM: ${wpm}`
    document.getElementById('accuracy').innerHTML = `Accuracy: ${accuracy}%`
  }
}, 1000)

// Listeners

document.addEventListener('DOMContentLoaded', () => {
  const wordContainer = document.getElementById('word-container')

  // Add 50 random words to the word container

  for (let i = 0; i < 50; i++) {
    const word = document.createElement('div')
    word.innerHTML = wordListSpanish[Math.floor(Math.random() * wordListSpanish.length)]
    wordContainer.appendChild(word)
  }

  let activeWord = wordContainer.children[0]
  activeWord.classList.add('active-word')
  splitWordIntoLetters(activeWord)
})

document.addEventListener('keydown', (e) => {
  if (!isGameActive) return

  const wordContainer = document.getElementById('word-container')
  let activeWord = wordContainer.querySelector('.active-word')
  let activeLetter = activeWord ? activeWord.querySelector('.active-letter') : null

  if (!activeLetter) return

  // Check if the key pressed is the same as the active letter

  if (e.key.toLowerCase() === activeLetter.innerHTML.toLowerCase()) {
    keysPressed++
    activeLetter.classList.remove('active-letter')
    activeLetter.classList.add('correct-letter')

    if (activeLetter.nextElementSibling) {
      activeLetter.nextElementSibling.classList.add('active-letter')
    } else {
      moveToNextWord(activeWord)
    }
    // Check if the key pressed is not the same as the active letter but is a letter
  } else if (e.code.includes('Key')) {
    keysPressed++
    keysFailed++
    activeLetter.classList.add('incorrect-letter')
    activeLetter.classList.remove('active-letter')
    if (activeLetter.nextElementSibling) {
      activeLetter.nextElementSibling.classList.add('active-letter')
    } else {
      moveToNextWord(activeWord)
    }
  }

  // Moving to next word with space bar

  if (e.key === ' ') {
    e.preventDefault()
    moveToNextWord(activeWord)
  }

  // Moving to previous letter with backspace if it's incorrect

  if (e.key === 'Backspace') {
    e.preventDefault()
    if (activeLetter && activeLetter.previousElementSibling && activeLetter.previousElementSibling.classList.contains('incorrect-letter')) {
      activeLetter.previousElementSibling.classList.toggle('incorrect-letter')
      activeLetter.previousElementSibling.classList.add('active-letter')
      activeLetter.classList.remove('active-letter')
    }
  }
})

// Functions

const splitWord = (word) => {
  return word.split('')
}

const splitWordIntoLetters = (wordElement) => {
  let letters = splitWord(wordElement.innerHTML)
  wordElement.innerHTML = ''

  for (let i = 0; i < letters.length; i++) {
    const letterElement = document.createElement('span')
    letterElement.innerHTML = letters[i]
    wordElement.appendChild(letterElement)
  }

  wordElement.children[0].classList.add('active-letter')
}

const moveToNextWord = (currentWord) => {
  let isCorrect = true
  let nextWord = currentWord.nextElementSibling
  let activeLetter = currentWord.querySelector('.active-letter')
  let letters = currentWord.querySelectorAll('span')

  if (activeLetter) {
    activeLetter.classList.remove('active-letter')
  }

  letters.forEach(letter => {
    if (!letter.classList.contains('correct-letter')) {
      letter.classList.add('incorrect-letter')
    }
  })

  letters.forEach(letter => {
    if (letter.classList.contains('incorrect-letter')) {
      isCorrect = false
    }
  })

  if (!nextWord) return

  currentWord.classList.remove('active-word')
  nextWord.classList.add('active-word')
  splitWordIntoLetters(nextWord)

  if (isCorrect) {
    wordsCorrect++
  }
}
