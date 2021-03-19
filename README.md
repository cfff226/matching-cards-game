[Original wireframe screen shots] (https://drive.google.com/file/d/1L0BHI0Y5l6bcYGGmBXgy3ZkSS8RE7MiW/view?usp=sharing)


## Animal Match 

### The cartoon matching pairs game

### User Experience (UX)

## Project Goal

### The goal of the game is for the User to enjoy a relaxing, simple but challenging game. Animal Match is aimed towards all ages and offers three levels of difficulty for more variation. Animal Match requires minimal IT skills to navigate and there are clear instructions which are listed in the Modal.
 [Link to deployed game](https://cfff226.github.io/matching-cards-game/)

### User Goal:

* To enjoy the colourful, consistent aesthetic of the matching pairs game.
* To be able to navigate easily and freely throughout the website.
* To have the option of how challenging the game will be.
* To be able to play the game across different devices with varying screen sizes.
* To be able to keep track of current score for each game whilst playing.

### My goals as a Developer:

* To build a fully functioning matching card game with the use of Html, Css, Vanilla Javascript and JQuery. 
* To learn and familiarise myself with all languages which were used, in order to improve my skills and understand the languages can work simultaneously for specific purposes.

### Addressed Goals:

Animal Match has a vibrant colour scheme, which is consistent throughout the landing page and the modal. 
The website offers minimal options for navigation, as when the modal appears, there are three buttons for choosing a level. As soon as one of these are clicked, the modal is then hidden. After the game has finished, the user has the option to click `Start Again` for the modal to then re appear.
There is quite a differentiation between levels of difficulty, which creates more elements and variation to the game.
The game is responsive across all screen sizes.
The images are colourful and consistent, to match the general aesthetic.
The background colour and border are to stand out, as the game itself is minimalistic and simple, so the colours are chosen to balance that out.

### User Stories:

As someone with a minimal level of IT skills, I would like to see the following:

* To understand what the game is and how to play, in a short amount of time of visiting the website.

* To have a minimal design and navigation, so that I am able to make choices clearly based on what I how much of a challenge I want the game to be.

* To be able to keep track of my score and essentially beat my previous personal best score. 

* To see colourful, neat, images which are consistent and clear to look at.

* The time being between choosing the level and starting the game is minimal.

* When I click on the card, the card is flipped instantly.

* When I click `Start Game`, the modal appears to start a new game instantly.


### Design:

The colour scheme was originally a combination of three softer, more pastel tones. However I decided to seek out colours which are brighter and bold. I visited [Link to color palette generator] (https://coolors.co/) to browse through a number of colour schemes before I picked three from the same palette.
These are as follows:

* #B084CC;
* #5DD9C1;
* #FFFF17

 The design is consistent throughout the website. The bright colours are balanced out with minimal content, to prevent visual overload and to keep the design simple. The main focus is the game and ultimately, the cards, so the design supports this. 


### Fonts Used:

* 'Press Start 2P', cursive


### Languages Used:

* HTML5
* CSS3
* Javascript
* Jquery

### Frameworks, Libraries & Programs Used:

* Bootstrap 4.5 

* Hover.css:

* Google Fonts:

* Font Awesome:

* Gitpod

* JQuery

* GitHub:

* Balsamiq:

* JSHint

## Testing:

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
* W3C Markup Validator
* W3C CSS Validator 
* JShint 

### Testing User Stories from User Experience (UX) Section

* User Story 1 test - The website modal appears with immediate affect, this is where the instructions are listed and the user has the choice of what level to click. Upon choosing, the relevant cards will display and the modal will hide until ‘Start Again’  is clicked.

* User Story 2 test - The design is kept very minimal and simple, with the aim to not overload the content, as the main focus is the pictures on the cards.

* User Story 3 test - There is a score counter which keeps track of every attempt at a match, this is available for all levels.

* User Story 4 test - All images are clear with no distortion from size changing. The images were taken one two separate sources so they’re all a relatively similar design to fit the theme.

* User Story 5 test - There's no delay during this time.

* User Story 6 test - Cards flip with no delay or added delay.

* User Story 7 test - The modal appears instantly, with no added delay.


## Further Testing

* Despite being scrollable on devices for both vertical and horizontal view, the scroll does not work when `Hard mode` is loaded. 

### Known Bugs

* The border was breaking on smaller devices when playing the levels, where more cards are shown so it has been removed when viewed on smaller screens.

* When matching cards I have noticed the score decrease before increasing again, this is only a very rare glitch and nothing is shown in the console when this happens.

* Uncaught type error when using Easy mode due to not all cards being pushed to function, because they're not needed for that level.


## Further Information

* I had originally designed a game which used html to display the cards, as opposed to looping through an array and displaying these predominately in Javascript. 
I aimed to understand the way of generating cards with a loop, so I decided to change the method to this one. I have tested the position of the grid on all screen sizes and found that
in order position them in the way I wanted, for all levels, the html method would have worked well. 

With regards to the display on my final project, there are signifcant improvements I would like to make:

* Make the boarder visible on all screen sizes and fully responsive.

* For all content to be centered on all screen sizes.

* For the modal to include a fade in and fade out transition.

* To include a timer for each level, as well as a `Score`

* Make the cards evenly positioned in each row.

* Make a transition for flipping the cards.


## Deployment of project:

### Github was used to deploy this project, the steps are as follows:

Log into Github and find the Github Repository.
Locate the ‘Settings’ button, at the top of the Repository.
Locate the ‘Github Pages’ section which is at the bottom of the ‘Settings’ page.
Click the ‘None’ dropdown, which is located underneath ‘Source’ and select ‘Master Branch’. The page will refresh.
Scroll back down the page to find the newly published site link in the ‘GitHub Pages’ section.	The link to view on Github Pages INSERT LINK

### Forking the GitHub Repository

This method will make a copy of the original repository to the Github account. This will be used in the event of the User wanting to make changes to the repository, without affecting the original. Instructions for this are as follows:
Log on to Github and locate the GitHub Repository
Find the ‘Settings’ button on the menu and locate the ‘Fork’ button.
This will create a copy of the original repository that you should now see in your GitHub account.

### Making a Local Clone

Log in to Github and locate the GitHub Repository
Click ‘Clone or download’.
If you’re using HTTPS, locate ‘Clone with HTTPS’, then copy the link provided.
Open Git Bash.
Change the location of the current directory to your location of choice.
Type git clone and then paste the URL which you copied in Step 3.

### Credits

* Code

* Bootstrap 4.5 was used for the grid in the html, the buttons and the modal. Bootstrap enables a smooth, responsive design when using these. However these are tweaked and code is applied to them in ways relevant to the Animal Match design.

### Content

Some project functions were written with reference to [Link to youtube tutorial] (https://www.youtube.com/watch?v=tjyDOHzKN0w)
I found this tutorial very useful and simple, this tutorial was followed to create the main functionality of Animal Match. Aside from this, all code is written by myself, with reference to forums such as Stack Overflow for assistance on methods and correcting syntax.


### Images used

* Image sources for the front of the cards:

[Link to set of cartoon images used] (https://www.vectorstock.com/royalty-free-vector/set-cute-cartoon-animals-vector-22781044)
[Link to set of cartoon images used] (https://creativemarket.com/Unicornspedia/2616748-Cute-cartoon-animals.-Vector-heads)


### Acknowledgements

* My Mentor for insightful feedback.

* Tutor support at Code Institute for their continuous support.
