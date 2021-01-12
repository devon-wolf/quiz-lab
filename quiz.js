import { countsAsYes } from './utils.js';

export function administerQuiz() {
	let score = 0;
	const answer1 = prompt('the answer is yes');
	const answer2 = prompt('the answer is yes');
	const answer3 = prompt('the answer is no');

	if (countsAsYes(answer1)) {
		score++;
	}

	if (countsAsYes(answer2)) {
		score++;
	}

	if (!countsAsYes(answer3)) {
		score++;
	}

	return score;
}