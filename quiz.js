import { countsAsYes } from './utils.js';

export function administerQuiz() {
    let score = 0;
    const answer1 = prompt('Is chess considered a game of displacement?');
    const answer2 = prompt('Do all board games use elements of skill?');
    const answer3 = prompt('Does board game popularity appear to be declining?');

    if (countsAsYes(answer1)) {
        score++;
    }

    if (!countsAsYes(answer2)) {
        score++;
    }

    if (!countsAsYes(answer3)) {
        score++;
    }

    return score;
}