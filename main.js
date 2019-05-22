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
var titleText = '';
var bodyText = '';
saveBtn.disabled = true;

//added variables
var ideaTitle = document.querySelector('#js-idea-title');
var ideaBody = document.querySelector('#js-idea-body');
var bottomSection = document.querySelector('#js-bottom-section')

// starredIdeasBtn.addEventListener('click', function());
// newQualityBtn.addEventListener('click', function());
saveBtn.addEventListener('click', updateIdeaText);
// searchBtn.addEventListener('click', function());

//When the user clicks save button, the text in the ideas are updated
//the function listens for a click and revises content
function updateIdeaText() {
  createNewCard();
  ideaTitle.innerText = titleInput.value;
  ideaBody.innerText = bodyInput.value;
}

//When save is clicked a new card appears in the bottom section
function createNewCard() {
  bottomSection.insertAdjacentHTML('afterbegin',
    `<article>
      <div class='top-card'> 
        <img src='Images/star.svg' alt='star-icon' class='star' id='js-star' />
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
};

//Clears the two input fields (add to new card function, so it clears after a card is created)
function clearInputs() {
  titleInput.value = "";
  bodyInput.value = "";
}

// showStarredIdeasBtn.addEventListener('click', null);
// addNewQualityBtn.addEventListener('click', null);
// saveBtn.addEventListener('click', saveIdea);
// searchBtn.addEventListener('click', null);

titleInput.addEventListener('keyup', function() {
	saveBtn.disabled = false;
 	titleText = titleInput.value
});

bodyInput.addEventListener('keyup', function(){
	saveBtn.disabled = false;
	bodyText = bodyInput.value;
})

// function saveIdea() {
// event.preventDefault();
// var bodyText = bodyInput.value;
// 	ideaCard.insertAdjacentHTML('afterbegin', `<h3>
// 	  ${titleText}
// 	  </h3>
// 	  <p>
// 	  ${bodyText} 
// 	  </p>`)
// };

