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

// Saves edited content within the idea to localStorage
function saveEdit(e) {
	console.log(e)
	var element = e.target.id === 'js-idea-title' ? 'title' : 'body'
	if (e.keyCode === 13 || e.type === 'blur') {
	  var newValue = e.target.innerText;
	  var cardId = e.path[2].attributes[1].value
	  var ideaToEdit = allIdeas.find(function(idea){
	    return cardId == idea.id 
	})
	ideaToEdit[element] = newValue
	}
	ideaToEdit.updateIdea(allIdeas);
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
      return card;
    }
  })
  return findTheIndex;
};

function instantiateIdea() {
	var newIdea = new Idea(titleInput.value, bodyInput.value, Date.now());
	  clearInputs();
    allIdeas.push(newIdea);
	  newIdea.saveToStorage(allIdeas);
  	saveBtn.disabled = true;
  	createNewCard(newIdea);
};

//When save is clicked a new card appears in the bottom section
function createNewCard(idea) {
	var template = document.getElementById('new-card-template');
	var clone = template.content.cloneNode(true);
    var star = idea.star ? 'Images/star-active.svg' : 'Images/star.svg';
	clone.getElementById('article-card').setAttribute('data-id', idea.id);
    clone.getElementById('favoriteBtn').setAttribute('src', star);
	clone.getElementById('js-idea-title').innerText = idea.title;
	clone.getElementById('js-idea-title').addEventListener('keyup', saveEdit);
	clone.getElementById('js-idea-title').addEventListener('blur', saveEdit);
	clone.getElementById('js-idea-body').innerText = idea.body;
	clone.getElementById('js-idea-body').addEventListener('keyup', saveEdit);
	clone.getElementById('js-idea-body').addEventListener('blur', saveEdit);
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
	console.log(id);
	return allIdeas.find(function(idea) {	
		return idea.id === id
	})
};

// Toggles the star icon
function toggleStar(e, id) {
	// var idea = parseInt(id);
  var foundIndex = findTheIndex(id);
  console.log(foundIndex);
  allIdeas[foundIndex].updateIdea();
  allIdeas[foundIndex].saveToStorage(allIdeas);
  // changeStarImage(id);
  
  var fav = e.target;
  var star = allIdeas[foundIndex].star;
  console.log(star);
  if (star === true) {
    e.target.setAttribute('src', 'Images/star-active.svg');
  } else {
    e.target.setAttribute('src', 'Images/star.svg');
  }

};

// function changeStarImage(id) {
//   var fav = e.target;
//   var foundIndex = findTheIndex(id);
//   var star = allIdeas[foundIndex].star;
//   console.log(star);
//   if (star === true) {
//     e.target.setAttribute('src', 'Images/star-active.svg');
//   } else {
//     e.target.setAttribute('src', 'Images/star.svg');
//   }
// }

function handleCardActions(e){
  if (e.target.className === 'delete'){
	  removeCard(e);
  } else if (e.target.className === 'favorite') {
  	toggleStar(e, e.target.parentNode.parentNode.dataset.id);
     }
};

// Deletes a card from the window
function removeCard(e){
  var id = parseInt(e.target.parentElement.parentElement.dataset.id);
  e.target.parentElement.parentElement.remove();
	var idea = findIdea(id);
	idea.deleteFromStorage();
};


// - If the user reloads the page, their edits will be reflected.
//    - This update of the data model should occur in an updateIdea,
 // method that is defined in the Idea class.
//    - How the dom gets updated using javascript,
 // should happen in the main.js file (where you can still leverage your idea instance)











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
