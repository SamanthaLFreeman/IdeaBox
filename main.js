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

// showStarredIdeasBtn.addEventListener('click', null);
// addNewQualityBtn.addEventListener('click', null);
saveBtn.addEventListener('click', saveIdea);
// searchBtn.addEventListener('click', null);

titleInput.addEventListener('keyup', function() {
	saveBtn.disabled = false;
 	titleText = titleInput.value
});

bodyInput.addEventListener('keyup', function(){
	saveBtn.disabled = false;
	bodyText = bodyInput.value;
})

function saveIdea() {
event.preventDefault();
var bodyText = bodyInput.value;
	ideaCard.insertAdjacentHTML('afterbegin', `<h3>
	  ${titleText}
	  </h3>
	  <p>
	  ${bodyText} 
	  </p>`)
};
