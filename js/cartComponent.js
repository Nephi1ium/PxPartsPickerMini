cartArray = [];

function cartCreate(ident, keyed){

    console.log(keyed.id, "keyed object");
    console.log(ident.id, "ident object");
    
    let getLocalStorageArray = JSON.parse(localStorage.getItem(keyed.id));
    console.log(getLocalStorageArray, "retrieved local storage array");

    cartArray.push(ident.outerHTML);
    // push the id of the 
    console.log(cartArray, "local storage array with Favorited Card");
    
    localStorage.setItem("Local Storage Array", JSON.stringify(cartArray));
    // set the array item to local storage
    console.log(getLocalStorageArray, "retrieved local storage array");
    
     
    // THE ABOVE WORKS, NEED TO FINISH
    
    localStorage.setItem("Favorites", JSON.stringify(ident.outerHTML));
    let favorite = JSON.parse(localStorage.getItem("Favorites"));
    console.log(favorite, "Favorite Item Display");
    
    document.getElementById('cartSection').innerHTML = getLocalStorageArray;
    
    }