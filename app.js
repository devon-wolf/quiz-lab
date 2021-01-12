// import functions and grab DOM elements

import { administerQuiz } from './quiz.js';

const quizButton = document.getElementById('quiz-button');
const resultsBox1 = document.getElementById('quiz-results-header');
const resultsBox2 = document.getElementById('quiz-results');


// initialize state

// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    const userReady = confirm('Hi! Are you ready to take the quiz?');
    if (!userReady) {
        return;
    }
	
    const userName = prompt('What should I call you?');
    const quizResults = administerQuiz();

    const resultsString1 = `Okay, ${userName} - here's how you did:`;
    const resultsString2 = `${quizResults} out of 3`;

    resultsBox1.textContent = resultsString1;
    resultsBox2.textContent = resultsString2;
});