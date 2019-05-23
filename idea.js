class Idea {
  constructor (title, body) {
    this.setId();
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = 0;
    this.saveToStorage();
  }

  setId () {
    var myId = window.localStorage.getItem("ideasId") || 0;
    myId++;
    this.id = myId;
    window.localStorage.setItem("ideasId", myId);
  }
  
  saveToStorage () {
    var ideas = JSON.parse(window.localStorage.getItem("ideas")) || {};
    ideas[this.id] = this;
    window.localStorage.setItem("ideas", JSON.stringify(ideas));
  }

  deleteFromStorage () {
    var ideas = JSON.parse(window.localStorage.getItem("ideas"));
    delete ideas[this.id];
    window.localStorage.setItem("ideas", JSON.stringify(ideas));
  }

  updateIdea(title, body) {
    var ideas = JSON.parse(window.localStorage.getItem("ideas"));
    ideas[this.id].title = title;
    ideas[this.id].body = body;
    this.title =  title;
    this.body = body; 
    window.localStorage.setItem("ideas", JSON.stringify(ideas));
  }

  toggleStar () {
    var ideas = JSON.parse(window.localStorage.getItem("ideas"));
    this.star = !this.star;
    ideas[this.id].star = this.star;
    window.localStorage.setItem("ideas", JSON.stringify(ideas));
  }
  
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
    var ideas = JSON.parse(window.localStorage.getItem("ideas"));
    ideas[this.id].quality = this.quality;
    window.localStorage.setItem("ideas", JSON.stringify(ideas));
    
  }
  
  static listIdeas () {
    return JSON.parse(window.localStorage.getItem("ideas"));
  }
}










