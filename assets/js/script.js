const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz () {}
// variable to store the HTML output
const output = [];

// for each question
myQuestions.forEach(
    (currentQuestion, questionNumber) => {
        // variable that will store the list of possible answers
        const answers = [];
        // and for each available answer
        for(letter in currentQuestion.answers){
            // to add HTML radio button
            answers.push(
                <label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>
            );
        }
        // this will add the question and its answer to the outcome
        output.push(
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
        );
    } 
);

// this will combine our output list into one string of html 
quizContainer.innerHTML = output.join('');
}

function showResults () {}

//quiz questions
const myQuestions = [
    {
        question: "You can use Emmet by typing______on Visual Studio:",
        answers: {
            a: "HTML:5",
            b: "HTML;5",
            c: "<HTML/5>",
            d: "!HTML:5"
        },
        correctAnswer: "a"
    },
    {
        question: "The document object allows us to access: ",
        answers: {
            a: "elements",
            b: "text-content",
            c: "metadata",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "The observation of the event is called the event listener. The response to the event is known as the _________.",
        answers: {
            a: "event manager",
            b: "call-back",
            c: "event handler",
            d: "responder"
        },
        correctAnswer: "c"
    }    
];

// display quiz section
buildQuiz();

// When answeres are submitted, show the results
submitButton.addEventListener('click', showResults);