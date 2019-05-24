class Idea {
  constructor (title, body, id) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = 0;
  };

  saveToStorage () {
    localStorage.setItem("ideas", JSON.stringify(allIdeas));
  };

  deleteFromStorage (idea) {
  var indexFound = ideas.findIndex(function(){return idea.id === idea});
  delete ideas[indexFound];
  window.localStorage.setItem("ideas", JSON.stringify(ideas));
  }
  
  //main js set an event listener to delete the card,
  // in the fn deleteFromStorage (e.target.dataset.id)
  updateIdea(title, body) {
    var ideas = JSON.parse(localStorage.getItem("ideas"));
    this.title = title;
    this.body = body; 
    localStorage.setItem("ideas", JSON.stringify(ideas));
  };

  toggleStar () {
    var ideas = JSON.parse(localStorage.getItem("ideas"));
    this.star = !this.star;
    localStorage.setItem("ideas", JSON.stringify(ideas));
  };
  
  // no window.localStorage
  updateQuality (vote) {
    if (vote > 0) {
      //Up vote
      if (this.quality < 2) {
        this.quality++;
      }
    } else {
      // down vote
      if (this.quality > 0) {
        this.quality--;
      }
    }
    var ideas = JSON.parse(localStorage.getItem("ideas"));
    ideas[this.id].quality = this.quality;
    localStorage.setItem("ideas", JSON.stringify(ideas));
    
  };
};