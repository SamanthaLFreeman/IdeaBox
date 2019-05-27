class Idea {
  constructor (title, body, id, star) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = this.star || false;
    this.quality = 0;
  };

  saveToStorage(allIdeas) {
    console.log(allIdeas);
    localStorage.setItem("ideas", JSON.stringify(allIdeas));
  };


  toggleStar () {
    var ideas = JSON.parse(localStorage.getItem("ideas"));
    this.star = !this.star;
  };

  deleteFromStorage (idea) {
  var indexFound = allIdeas.indexOf(this);
  delete allIdeas[indexFound];
  console.log(this);
  if (this === undefined) {
    allIdeas = [];
    localStorage.clear();
  } else {
    this.saveToStorage(allIdeas);
     }
  }
  
  updateIdea(title, body, id, star) {
    console.log(allIdeas);
    // var ideas = JSON.parse(localStorage.getItem("ideas"));
    this.star = !this.star;
    console.log(this.star);
    this.title = title;
    this.body = body;
    console.log(allIdeas);
    // localStorage.setItem("ideas", JSON.stringify(ideas));
    localStorage.setItem("ideas", JSON.stringify(allIdeas));
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