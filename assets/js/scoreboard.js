// Credit: The inspiration for this codes comes various video tutorials and content creators: Brian Design and James Quick Udemy course. Links on my Readme file //
// Create basic const function //
const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// scoretable of high scores and name of the user //
highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join ("");