// import functions and grab DOM elements
import { countsAsYes } from './utils.js';

const quizButton = document.getElementById('quiz-button');
const resultsBox = document.getElementById('quiz-results');

// initialize state

// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
	// console.log('Someone clicked me'); /* PASSED */
    alert('Hi!');
    confirm('Are you ready to take the quiz?');
	const userName = prompt('What should I call you?');
	countsAsYes(userName);
    resultsBox.textContent = userName;
});