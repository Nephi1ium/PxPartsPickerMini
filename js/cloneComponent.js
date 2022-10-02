// Get the element
var elem = document.querySelector('#elem1');

// Create a copy of it
var clone = elem.cloneNode(true);

// Update the ID and add a class
clone.id = 'elem2';
clone.classList.add('text-large');

// Inject it into the DOM
elem.after(clone);

function chooseFavorite (id){
let favorite = JSON.parse(localStorage.getItem("array")); 

if (id == )

}