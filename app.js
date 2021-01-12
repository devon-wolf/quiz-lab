// import functions and grab DOM elements

import { administerQuiz } from './quiz.js';

const quizButton = document.getElementById('quiz-button');
const resultsBox = document.getElementById('quiz-results');

// initialize state

// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    const userReady = confirm('Hi! Are you ready to take the quiz?');
    if (!userReady) {
        return;
    }
	
	const userName = prompt('What should I call you?');
	const quizResults = administerQuiz();

    resultsBox.textContent = `Okay, ${userName} - here's how you did: ${quizResults} out of 3.`;
});