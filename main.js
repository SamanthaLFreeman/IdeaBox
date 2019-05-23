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
var ideaTitle = document.querySelector('#js-idea-title');
var ideaBody = document.querySelector('#js-idea-body');
var bottomSection = document.querySelector('#js-bottom-section');
var titleText = '';
var bodyText = '';
saveBtn.disabled = true;

//Event Listeners
saveBtn.addEventListener('click', createNewCard);
// starredIdeasBtn.addEventListener('click', null);
// newQualityBtn.addEventListener('click', null);
// searchBtn.addEventListener('click', null);
// saveBtn.addEventListener('click', saveIdea);
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
        <h3 id='js-idea-title'>
          ${titleInput.value}
        </h3>
        <p id='js-idea-body'>
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
    clearInputs();
    saveBtn.disabled = true;
};


function toggleFavorite() {
	console.log('favoriting')
	var starButton = document.getElementById('favoriteBtn');
	starButton.classList.toggle('orangeFavorite')
}

//Clears the two input fields (add to new card function, so it clears after a card is created)
function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
}

//Listens for a key up in the title and body inputs, then enables the save button 
function disableBtns() {
  var disabledBtn = titleInput.value === '' || bodyInput.value === ''
  saveBtn.disabled = disabledBtn;
  console.log(disabledBtn)};

//When a user clicks the title or body of an idea in the list, that text should become an editable text field, pre-populated with the existing idea title or body.
//The user should be able to 'commit' their changes by pressing 'enter/return' and by clicking outside the text field

