// Global Variables
var allIdeas = JSON.parse(localStorage.getItem("ideas")) || [];
var starredIdeasBtn = document.querySelector('#js-show-starred-ideas-btn');
var swillQuality = document.querySelector('#js-swill');
var plausibleQuality = document.querySelector('#js-plausible');
var geniusQuality = document.querySelector('#js-genius');
var newQualityInput = document.querySelector('#js-new-quality-input');
var newQualityBtn = document.querySelector('#js-new-quality-btn');
var titleInput = document.querySelector('#js-title-input');
var bodyInput = document.querySelector('#js-body-input');
var saveBtn = document.querySelector('#js-save-btn');
var searchBtn = document.querySelector('#js-search-btn');
var searchInput = document.querySelector('#js-search-input');
var ideaCard = document.querySelector('#js-idea-card');
var bottomSection = document.querySelector('#js-bottom-section');
var ideaTitle = document.querySelector('#js-idea-title');
var ideaBody = document.querySelector('#js-idea-body');
var bottomSection = document.querySelector('#js-bottom-section');
var starBtn = document.querySelector('#favoriteBtn');
var ideaText = document.querySelector('.idea-text');
var titleText = '';
var bodyText = '';
saveBtn.disabled = true;

//Event Listeners
bottomSection.addEventListener('click', handleCardActions);
saveBtn.addEventListener('click', instantiateIdea);
titleInput.addEventListener('keyup', disableBtns);
bodyInput.addEventListener('keyup', disableBtns);

// access cards in local storage and take value from 
// when the user clicks out of or hits the enter button whilst in the idea card text area,
// grab the text changes from both inputs
// grab the 
// the two values will be saved to local storage
function saveEditTitle(e) {
	console.log(e)
	if (e.keyCode === 13){
	var newValue = e.target.innerText;
	var cardId = e.path[2].attributes[1].value
	var ideaToEdit = allIdeas.find(function(idea){
		return cardId == idea.id 
	})
	ideaToEdit.title = newValue
	}
	ideaToEdit.saveToStorage(allIdeas);
};

function saveEditBody(e) {
	console.log(e)
	if (e.keyCode === 13){
	var newValue = e.target.innerText;
	var cardId = e.path[2].attributes[1].value
	var ideaToEdit = allIdeas.find(function(idea){
		return cardId == idea.id 
	})
	ideaToEdit.body = newValue;
	}
	ideaToEdit.saveToStorage(allIdeas);
};

function createCardsOnLoad() {
	var newArray = [];
  allIdeas.forEach(function(idea){
		var newIdea = new Idea(idea.title, idea.body, idea.id, idea.star);
    newArray.push(newIdea);
    createNewCard(newIdea);

	})
  allIdeas = newArray;
};
createCardsOnLoad();

//Pass in the array of objects
//Find the object I want by the id - find the index in the array
//Pass the array and the index to the method (idea.js)
//In the method - access the object by its id in the array

function findTheIndex(id) {
  var findTheIndex = allIdeas.findIndex(function(card) {
    if (card.id === parseInt(id)) {
    }
  })
};

function instantiateIdea() {
	var newIdea = new Idea(titleInput.value, bodyInput.value, Date.now());
	clearInputs();
    allIdeas.push(newIdea);
	newIdea.saveToStorage(allIdeas);
  	saveBtn.disabled = true;
  	createNewCard(newIdea)
};

//When save is clicked a new card appears in the bottom section
function createNewCard(idea) {
	var template = document.getElementById('new-card-template');
	var clone = template.content.cloneNode(true);
	clone.getElementById('article-card').setAttribute('data-id', idea.id);
	clone.getElementById('js-idea-title').innerText = idea.title;
	clone.getElementById('js-idea-title').addEventListener('keyup', saveEditTitle);
	// clone.getElementById('js-idea-title').addEventListener('click', saveEdits);
	clone.getElementById('js-idea-body').innerText = idea.body;
	clone.getElementById('js-idea-body').addEventListener('keyup', saveEditBody);
	// clone.getElementById('js-idea-body').addEventListener('click', saveEdits);
	clone.getElementById('js-quality-value').innerText = 'Swill';
	bottomSection.insertBefore(clone, bottomSection.firstChild);
};

//Clears the two input fields (add to new card function, so it clears after a card is created)
function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
};

//Lists for a key up in the title and body inputs, then enables the save button 
function disableBtns() {
  var disabledBtn = titleInput.value === '' || bodyInput.value === '';
  saveBtn.disabled = disabledBtn;
};

function toggleFavorite() {
  var starButton = document.getElementById('favoriteBtn');
  starButton.classList.add('orangeStar');
};

function editIdeaCard() {
	var editText = document.querySelectorAll('#js-idea-text');
	for (var i = 0; i < editText.length; i++) {
	editText.createElement('textarea')
	}
};

function findIdea(id) {
	return allIdeas.find(function(idea) {	
		return idea.id === id
	})
};

// Toggles the star icon
function toggleStar(id) {
	var idea = findIdea(id)
  findTheIndex(id)
  // var newIdea = new Idea(titleInput.value, bodyInput.value, Date.now());
  // newIdea.updateIdea();
  //change the boolean of the star
  //save changed value to local storage
  //when the card value changes, so does the image
	// idea.updateIdea()
  // var starButton = document.getElementById('favoriteBtn');
  // starButton.classList.toggle('orangeStar');

};

function handleCardActions(e){
  if (e.target.className === 'delete'){
	  removeCard(e);
  } else if (e.target.className === 'favorite') {
  	toggleStar(e.target.parentNode.parentNode.dataset.id);
  }
};

// Deletes a card from the window
function removeCard(e){
  e.target.parentElement.parentElement.remove();
	var idea = findIdea(e);
	idea.deleteFromStorage();
};

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
