// Global Variables
var starredIdeasBtn = document.querySelector('#js-show-starred-ideas-btn');
var swillQuality = document.querySelector('#js-swill');
var plausibleQuality = document.querySelector('#js-plausible');
var geniusQuality = document.querySelector('#js-genius');
var newQualityInput = document.querySelector('#js-new-quality-input');
var newQualityBtn = document.querySelector('#js-new-quality-btn');
var titleInput = document.querySelector('#js-title-input');
var bodyInput = document.querySelector('#js-body-input');
var saveBtn = document.querySelector('#js-save-btn');
var searchBtn = document.querySelector('#js-search-btn')
var searchInput = document.querySelector('#js-search-input');
var ideaCard = document.querySelector('#js-idea-card');
var bottomSection = document.querySelector('#js-bottom-section');
var titleText = '';
var bodyText = '';
saveBtn.disabled = true;
var ideaTitle = document.querySelector('#js-idea-title');
var ideaBody = document.querySelector('#js-idea-body');
var bottomSection = document.querySelector('#js-bottom-section');
var deleteBtn = document.getElementById('js-delete');

//Event Listeners
bottomSection.addEventListener('click', removeCard);
saveBtn.addEventListener('click', createNewCard);
// starredIdeasBtn.addEventListener('click', null);
// newQualityBtn.addEventListener('click', null);
// searchBtn.addEventListener('click', null);
saveBtn.addEventListener('click', createNewCard);
titleInput.addEventListener('keyup', disableBtns);
bodyInput.addEventListener('keyup', disableBtns);

//When save is clicked a new card appears in the bottom section
function createNewCard() {
	var idea = new Idea (titleInput.value, bodyInput.value, Date.now());
	console.log(idea)
	var template = document.getElementById('new-card-template');
	var clone = template.content.cloneNode(true);
	clone.getElementById('article-card').setAttribute('data-id', idea.id)
	clone.getElementById('js-idea-title').innerText = idea.title;
	clone.getElementById('js-idea-body').innerText = idea.body;
	clone.getElementById('js-quality-value').innerText = 'Swill';
	bottomSection.insertBefore(clone, bottomSection.firstChild);
	clearInputs();
    saveBtn.disabled = true;
};

//Clears the two input fields (add to new card function, so it clears after a card is created)
function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
};

//Lists for a key up in the title and body inputs, then enables the save button 
function disableBtns() {
  console.log(disabledBtn);
  var disabledBtn = titleInput.value === '' || bodyInput.value === ''
  saveBtn.disabled = disabledBtn;
};

// Toggles the star icon
function toggleFavorite() {
  var starButton = document.getElementById('favoriteBtn');
  starButton.classList.toggle('orangeStar');
};

// Deletes a card from the window
function removeCard(e){
  if (e.target.className === 'delete'){
    e.target.parentElement.parentElement.remove();
    }
};

// function returnText() {
// 	event.keyCode === 13 
// 		console.log('13')
// };
// ideaBody.addEventListener('blur', );
// event.keyCode === 13

// attempts to connect idea.js and main.js
// Idea.listIdeas();
// ['idea_id'].saveToStorage
// on page load - how do we have these functions fire 

// *In Progress
//function to remove the card from the screen
//It listens for a click on the delete button and then clears the card from the page
// event target MIGHT be the best way to select the correct card- button click should delete the card from localStorage and MAYBE refresh the page w/ current info.
//when there are no idea cards created, there should be a placeholder text that disappears upon clicking into the text field creating an empty text field

//hover change delete image to active

//The user should be able to 'commit' their changes by pressing 'enter/return' and by clicking outside the text field

// Tell the DOM that when the page loads retrieve the saved stringified object
