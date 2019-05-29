class Idea {
  constructor(title, body, id, star) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.star = star || false;
    this.quality = 0;
  };

  saveToStorage(allIdeas) {
    localStorage.setItem("ideas", JSON.stringify(allIdeas));
  };

  deleteFromStorage(idea) {
    var indexFound = allIdeas.indexOf(this);
    allIdeas.splice(indexFound, 1);
    this.saveToStorage(allIdeas);
  };

  updateIdea(allIdeas, element, newValue) {
    this.star = !this.star;
    if (element === 'title') {
      this.title = newValue
    } else if (element === 'body') {
      this.body = newValue
    }

    this.saveToStorage(allIdeas)
  };
  
  updateQuality(vote) {
      if (this.quality < 2) {
        this.quality++;
       } else {
      if (this.quality > 0) {
        this.quality--;
      }
    }
    
    var ideas = JSON.parse(localStorage.getItem("ideas"));
    ideas[this.id].quality = this.quality;
    localStorage.setItem("ideas", JSON.stringify(ideas));
  };
};