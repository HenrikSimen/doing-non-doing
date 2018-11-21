//Color variables
const primaryColor = '#3A2E62';
const secondaryColor = '#EE7F2F';

//Body BG Color
document.querySelector('body').style.backgroundColor = primaryColor;

//The Rest
const theDOM = document.querySelectorAll('article h2, article p, article a, footer p, footer ul, footer a, hr, .attribution'); // returns array of all elements in the DOM
//Loop through all elements
Array.from(theDOM).forEach(function(element){
  if(element.tagName === 'HR'){ // check if element being looped through is HR (caps are important) element
    element.style.backgroundColor = secondaryColor;
  } else if (element.className === 'attribution') {
    element.style.borderColor = secondaryColor;
  } else if (element.tagName === 'A'){
    element.style.borderColor = secondaryColor;
  }
  element.style.color = secondaryColor;
})


