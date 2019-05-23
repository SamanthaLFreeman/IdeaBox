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
  
  static listIdeas () {
    return JSON.parse(window.localStorage.getItem("ideas"));
  }
}

