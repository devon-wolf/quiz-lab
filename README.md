# quiz-lab

## Goals:
There should be:
- an alert *(quiz takes place in the alerts)*
- a confirmation (so the user can opt out)
- name prompts (first and last)
- three question prompts
- a way for the user to see their results after taking the quiz

### Relevant JS things:
`alert()`  
`confirm()`  
`prompt()`  


### HTML Setup:
- Some information, presented nicely with an image and some list items
	- *so the user knows what to do*
- Elements that will need IDs for JS:
	- Button
		- *to launch quiz*
	- Results area (hidden until results are available/quiz is complete)
		- *to display the results to the user*

1. Get DOM elements
	- button
	- results area
2. Add event listeners
	- button
3. Respond to user input
	- launch alert
	- launch confirmation
		- if user says **no**:
			- exit/nothing else happens/`return` nothing, break out of function
		- if user says **yes**:
			- launch series of prompts
	- for each prompt:
		- launch the prompt
		- store the user input
		- evaluate the input (yes/no questions):
			- need to determine how to decide something is a 'yes' - set criteria, write a function to run on the user input (anything NOT 'yes' will count as 'NO')
	- first name
	- last name
	- question 1
	- question 2
	- question 3
	- Make results string
	- Display results string
