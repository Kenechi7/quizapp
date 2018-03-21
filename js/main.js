// var qanda is the variable where I am storing
// all my questions and answers to my quiz
var qanda = [
  {
  	question: 'In what year did the New York Giants move to San Francisco and become the San Francisco Giants?',
  	answer: '1958'
  },
  {
  	question: 'In what year were the San Francisco 49ers formed?',
  	answer: '1946'
  },
  {
  	question: 'Stephen Curry of the Golden State Warriors, wears what number?',
  	answer: '30'
  },
  {
  	question: 'Where did the San Jose Sharks play their home games before residing in San Jose?',
  	// I had to lower all the proper nouns in my quiz
    // to make it case sensitive which is easier for 
    // the quiz taker.
    answer: 'cow palace'
  },
  {
  	question: 'What is the name of the San Francisco 49ers mascot?',
  	answer: 'sourdough sam'
  },
  {
  	question: 'When did the Oakland A\'s win their last World Series?',
  	answer: '1989'
  },
  {
  	question: 'Which former coach of the Oakland Raiders has a football game named after him?',
  	answer: 'john madden'
  },
  {
  	question: 'Who wore number 24 for the San Francisco Giants?',
  	answer: 'willie mays'
  },
  {
  	question: 'Starting in 2020, which city will be the new home of the Oakland Raiders?',
  	answer: 'las vegas'
  },
  {
  	question: 'Who did the San Francisco Giants beat in 2010 to win their first World Series?',
  	answer: 'texas rangers'
  }
];

// The for loops that will run my questions and answers
for(var i = 0; i < qanda.length; i++) {

	// Instead of coding in HTML, these variables
  // in my JavaScript run as if it was in my HTML.
  var newDiv = document.createElement("div");
  var newDiv2 = document.createElement("div");
	var newLabel = document.createElement("label");
	var newInput = document.createElement("input");

  newDiv.appendChild(newLabel);
  newDiv.appendChild(newDiv2);
  newDiv.appendChild(newInput);

	newLabel.innerText = qanda[i].question;

  // This allows my quiz to show up on my webpage.
  document.body.appendChild(newDiv);

}

// This variable creates my button
var btn = document.createElement("button");
// This allows my button to have the onclick attribute
// which will check the quiz takers answers
btn.setAttribute("onclick", "checkAnswers()");
// My text of my button will say "Check Answers"
btn.innerText = "Check Answers";

// This allows my Check Answers to show up on my webpage.
document.body.appendChild(btn);

// This function will run all the answers the user enters.
function checkAnswers() {

	var inputs = document.querySelectorAll("input");

	for(var i = 0; i < inputs.length; i++) {
    // If the answer is right, the border of the box around that
    // answer will be green.
		if(inputs[i].value.toLowerCase() == qanda[i].answer) {
			inputs[i].setAttribute("style", "border: 3px solid green;")
		// If the answer is wrong, the border of the box around that
    // answer will be red.
    } else {
			inputs[i].setAttribute("style", "border: 3px solid red;")
		}
	}
}