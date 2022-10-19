
function favoritesSection(){

  localStoreArray = [];

  function favorites(ident, keyed){

console.log(keyed.id, "keyed object");
console.log(ident.id, "ident object");

localStoreArray.push(ident.outerHTML);
console.log(localStoreArray, "local storage array with Favorited Card");

localStorage.setItem("Local Storage Array", JSON.stringify(localStoreArray));
let getLocalStorageArray = JSON.parse(localStorage.getItem("Local Storage Array"));
console.log(getLocalStorageArray, "retrieved local storage array");

 
// THE ABOVE WORKS, NEED TO FINISH

localStorage.setItem("Favorites", JSON.stringify(ident.outerHTML));
let favorite = JSON.parse(localStorage.getItem("Favorites"));
console.log(favorite, "Favorite Item Display");










document.getElementById('itemSectionJS').innerHTML = getLocalStorageArray;

}
favorites(ident, keyed);

}

export {favoritesSection};