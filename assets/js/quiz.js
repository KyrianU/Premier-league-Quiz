// Basic const functions.// 

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// Call for the various functions created //
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];
let availableCounter = 0;

/**
 * List of questions and answers data stored in this array object
 */

let questions = [
    {
        question: "in the 2013/2014 season, Steven Gerrards famous slip occurred against which team?",
        choice1: 'Chelsea',
        choice2: 'Manchester United',
        choice3: 'Manchester City',
        choice4: 'Arsenal',
        answer: 1,
    },
    {
        question: "Manchester United signed Eric Cantona in 1992 from which team?",
        choice1: 'Blackburn Rovers',
        choice2: 'Newcastle',
        choice3: 'Tottenham',
        choice4: 'Leeds',
        answer: 4,
    },
    {
        question: "Who scored the fastest in hattrick in Premier League History?",
        choice1: 'Thierry Henry',
        choice2: 'Sadio Mane',
        choice3: 'Luis Suarez',
        choice4: 'Robbie Fowler',
        answer: 2,
    },
    {
        question: "What did Jose Mourinho refer himself as in his first ever press conference for Chelsea?",
        choice1: 'The happy one',
        choice2: 'The special one',
        choice3: 'The legendary one',
        choice4: 'The chosen one',
        answer: 2,
    },
    {
        question: "How many goals did Manchester city score on their way to winning the premier league title in the 2017/2018 season?",
        choice1: '102',
        choice2: '100',
        choice3: '106',
        choice4: '103',
        answer: 3,
    },
    {
        question: "I have played for Man City, Chelsea, Liverpool, Arsenal, West Brom and Bolton Wanderers - Who am I?",
        choice1: 'James Beattie',
        choice2: 'Peter Crouch',
        choice3: 'Nicolas Anelka',
        choice4: 'Jermaine Defoe',
        answer: 3,
    },
    {
        question: "Which former dutch player was famously nicknamed 'the non-flying Dutchman'?",
        choice1: 'Wesley Sneijder',
        choice2: 'Robin Van Persie',
        choice3: 'Rafael Van Der Vaart',
        choice4: 'Dennis Bergkamp',
        answer: 4,
    },
    {
        question: "Which team defeated Arsenal to end their 49 games unbeaten run?",
        choice1: 'Manchester United',
        choice2: 'Liverpool',
        choice3: 'Chelsea',
        choice4: 'Everton',
        answer: 1,
    },
    {
        question: "Alan Sugar was once the chairman and part owner of which team?",
        choice1: 'West Ham',
        choice2: 'Tottenham',
        choice3: 'Crystal Palace',
        choice4: 'Southampton',
        answer: 2,
    },
    {
        question: "Which club is nicknamed 'The Toffees'?",
        choice1: 'Fulham',
        choice2: 'Crystal Palace',
        choice3: 'Newcastle',
        choice4: 'Everton',
        answer: 4,
    },
   
   
];

// Points for maximum score and maximum questions count //
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 10;

/**
 * Start the game function. 
 */

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

/**
 * Calls the new question once previous question is complete
 */
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question ;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}
/**
 * Function that determines whether result is correct or incorrect.
 */
    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if(acceptingAnswers === false ) return;

            acceptingAnswers = false;
            const selectedChoice = e.target
            const selectedAnswer = selectedChoice.dataset['number'];

            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if(classToApply === 'correct') {
                incrementScore(SCORE_POINTS);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout (() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 700);
        });
    });
/**
 * increments the score to the live tracker.
 */
    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    };

    startGame();



