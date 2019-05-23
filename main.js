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

//Event Listeners
// starredIdeasBtn.addEventListener('click', null);
// newQualityBtn.addEventListener('click', null);
// searchBtn.addEventListener('click', null);

saveBtn.addEventListener('click', createNewCard);
titleInput.addEventListener('keyup', disableBtns);
bodyInput.addEventListener('keyup', disableBtns);

//When save is clicked a new card appears in the bottom section
function createNewCard() {
  bottomSection.insertAdjacentHTML('afterbegin',
    `<article>
      <div class='top-card'> 
        <button class='favorite' id='favoriteBtn' onclick='toggleFavorite()'>
        </button>
        <img src='Images/delete.svg' alt='delete-icon' class='delete' id='js-delete' />
      </div>
      <div class='body-card'> 
        <h3 id='js-idea-title' contenteditable='true'>
          ${titleInput.value}
        </h3>
        <p id='js-idea-body' contenteditable='true'>
          ${bodyInput.value}
        </p>
      </div>
      <div class='bottom-card'> 
        <img src='Images/upvote.svg' alt='up-arrow-icon' id='js-up-arrow-svg' />
        <p class='quality-text'> Quality: <span class='quality-value' id='js-quality-value'>Swill</span></p>
        <img src='Images/downvote.svg' alt='down-arrow-icon' id='js-down-arrow-svg' />
      </div>
    </article>`
)
  	idea.listIdeas();
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

//function to remove the card from the screen
//It listens for a click on the delete button and then clears the card from the page



//The user should be able to 'commit' their changes by pressing 'enter/return' and by clicking outside the text field
