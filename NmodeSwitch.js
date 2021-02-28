function nightOn() {
    var element = document.body;
    element.classList.toggle("darkmode");
  if(element.classList.contains("darkmode")){
    element.classList.add('darkmode')
    element.classList.remove('daymode')
    }
else {
    element.classList.add('daymode')
    element.classList.remove('darkmode')
    }
    ;
  
  
  }