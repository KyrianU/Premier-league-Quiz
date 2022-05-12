# Premier League Quiz

## Introduction

<img width="912" alt="Landing page responsive" src="https://user-images.githubusercontent.com/98747053/167832607-5245482d-a76f-4c4d-904c-f4db55db11df.png">

This is website based quiz game built with CSS3, HTML5 and JavaScript. It enables the user to answer a set of 10 questions and obtain their score at the end of the quiz. The user will then have the chance to enter their username and save their score locally. The score will be uploaded to a local leaderboard, where top 3 scores will show.

Premier League Football quiz is designed to test the knowledge of Premier league football fans.

# UX (User Experience)

## Color Reference


| RGB              | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| rgb(4,245,255) | ![#04f5ff](https://via.placeholder.com/10/04f5ff?text=+) #04f5ff |
| rgb(233,0,82) | ![#e90052](https://via.placeholder.com/10/e90052?text=+) #e90052 |
| rgb(255,255,255) | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| rgb(0,255,133) | ![#00ff85](https://via.placeholder.com/10/00ff85?text=+) #00ff85 |
| rgb(56,0,60)     | ![#38003c](https://via.placeholder.com/10/38003c?text=+) #38003c |

* For this project, I really wanted to embody the spirit of the Premier league by incorporating the color theme of the premier league. I used the light blue color for the body, the white for the box container, the light red and green colors for the buttons and the purple for the writing.

### Font used 


* The font family I used for this project is ["Montserrat", sans-serif;](https://fonts.google.com/specimen/Montserrat?query=Montserrat)

# Wireframes

* Wireframes were with the help of https://balsamiq.com/wireframes/

## Home/Landing Page

* Intended design for the home/landing page 

<img width="457" alt="Landing Page" src="https://user-images.githubusercontent.com/98747053/167989351-fba78137-676b-4a9a-b4fd-df6a16a023f3.png">

## Quiz Page

* Intended design for the layout of the Quiz Page

<img width="549" alt="Quiz Page" src="https://user-images.githubusercontent.com/98747053/167990288-d4ebb960-7a68-4c03-b0a1-83c4fafb257c.png">

## End Of Quiz Page 

* Intended design for the layout of the end of the quiz Page 

<img width="524" alt="End Of Quiz 2" src="https://user-images.githubusercontent.com/98747053/167990966-2967fbc6-acd7-42a5-bd0b-58b6f5bb10d4.png">

## Scoreboard 

* Intended design for the layout of the scoreboard. 

<img width="456" alt="Scoreboard page" src="https://user-images.githubusercontent.com/98747053/167990543-3093078b-ff74-4fa0-bc34-63b345afd5a6.png">

# Features 

## Premier league football quiz consist of 4 HTML Pages (Scoreboard page, Landing Page, Quiz page & End of Quiz Page)

## Landing Page 
 
 <img width="1151" alt="Home Page" src="https://user-images.githubusercontent.com/98747053/167952008-4642d87b-0140-4417-a0c9-2fb5c52f2a53.png">

 * Landing Page which consists of a welcoming message, with a start button that will take you to the main quiz page and scoreboard button which will take you to the rankings for the best scores.

 ## Main Quiz Page 

 * The Page below contains a header display with a question counter and progress bar on the top left hand side followed by Score tracker on the top right hand side of the page. Hover effet added to the answer boxes any time cursor hovers over them.
 
<img width="1151" alt="Quiz Page" src="https://user-images.githubusercontent.com/98747053/167951843-ddc4504f-dfc8-4ebd-ad9e-f5c51f45a5ab.png">

## End Of Quiz Page 

* Final score is displayed at the top of the page folowed by a congratulation message. User will have the opportunity to enter their username and save it. The save button has been disabled untill the user has entered a username.

<img width="1231" alt="Final Quiz message" src="https://user-images.githubusercontent.com/98747053/167960761-545d9e21-cb8a-4a43-8a0f-8e5ba873f25b.png">

## Scoreboard Page 

* This page displays the ranking for the 6 best scores. The ranking is stored locally.
* User then has the option to go back to the home page by pressing the Home button, where the will have the chance to take the quiz again.

<img width="1231" alt="scoreboard screenshot" src="https://user-images.githubusercontent.com/98747053/167969645-b3948dd6-f3c4-48e9-a657-955233979ccc.png">

## Correct Answer 

* The answer box will only highlight in green once the right answer has been chosen

<img width="864" alt="Correct Answer" src="https://user-images.githubusercontent.com/98747053/167972445-024be375-2997-46aa-86d1-ad593969441f.png">

# Incorrect Answer

* Similar to to the correct answer, the answer box will only highlight in red once the incorrect answer has been selected 

<img width="909" alt="incorrect answer" src="https://user-images.githubusercontent.com/98747053/167974015-e34c501b-3e12-4659-b9e3-b16ba0c10491.png">

# Features to implement in the future

* I would like to implement a feature where the scores can be saved centrally using an API
* Implement a series of different difficulty level to give returning and regular users a chance to challenge themselves.
* to display the correct answer if/when the user selects the incorrect answer.

# Technologies Used 

* HTML5
* CSS3
* Google Fonts
* Local Storage
* Git, Github, Gitpod
* Balsamiq Wireframes 

# Testing 

* I tested the site on several web browers, Google Chrome, Mozilla Firefox and Safari. The site loaded consistenly across all the mentioned with no issues detected 

* I have performed a considerable amount of testing to ensure the site is fully responsive on all screen sizes.

## Lighthouse report 

* I conducted the quiz's web performance using Lighthouse in Google chrome, I was very pleased that I scored highly. Results can be seen below.

<img width="609" alt="Lighthouse report" src="https://user-images.githubusercontent.com/98747053/167978155-363cbc63-f465-432f-917b-4e05372e2c95.png">

## Validator testing 

All of my HTML files for my website was tested using the https://validator.w3.org/. All HTML files passed with flying colors 

All of my CSS files was tested using the https://jigsaw.w3.org/css-validator/. No errors reported

Javascript files were teste using the https://jshint.com/ . No errors were reported

# Bugs 

Progress bar's background-color was not incrementing by 10% every time a question was being answered as it supposed to be. The solution for it was to take out the Padding styling within the Progress bar Id. 


# Deployment 

 * The website was deployed on Github Pages
 * On the Project repository, go to settings
 * Scroll down untill the Page link appears - click it
 * Under Source, click on the drop down button "None" then click main
 * Click save, the following message will appear: Your site is ready to be published
 * After a few minutes, the site will be published with a new message saying - Your site is published.

 * Access to the live link here [PremierLeagueQuiz]

 # Credit 

 * [James Quick Udemy course](https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/learn/lecture/13685348#overview)
 * [Brian Designs](https://www.youtube.com/results?search_query=brian+design)
 * [Am I responsive](https://ui.dev/amiresponsive)
 * [W3C validator](https://validator.w3.org/)
 * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
 * [Readme.so](https://readme.so/editor) Where the Color reference table was creaded from


