// Credit: The inspiration for this codes comes various video tutorials and content creators: Brian Design and James Quick Udemy course. Links on my Readme file //
// Basic const function //
const username = document.querySelector('#username');
const saveBtn = document.querySelector('#saveBtn');
const finalScore = document.querySelector('#final-Score');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// This section will show the top 6 high scores on the leaderboard //
const MAX_HIGH_SCORES = 6;

// Saves the scores on a local storage do be displayed on the leadeboards page //
finalScore.innerText = mostRecentScore;

// Event listener that will enable the save button to operate //

username.addEventListener('keyup', () => {
    saveBtn.disabled = !username.value
});

/**
 * Function that enables you to save your final score locally
 */
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name : username.value
    };

    highScores.push(score);

    highScores.sort( (a,b) => b.score - a.score);

    highScores.splice(6);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
    
};