// currently the cart item cannot be modified here, but must be added individually in each HTML page. 


function cartDisplay(favorite){

    console.log(favorite.id,  "cart object");
    
    let getStoredFavorite = JSON.parse(localStorage.getItem(favorite.id));
    console.log(getStoredFavorite, "retrieved cart item from local storage");
    // retrieve the item

     cartArray.push(getStoredFavorite);
     console.log(cartArray, "local storage array with cart item");
        // add the item to the cart array
      
      localStorage.setItem("cart", JSON.stringify(cartArray))
        // push the cartArray to local storage

      let getCart = JSON.parse(localStorage.getItem("cart"));
      console.log(getCart, "local storage cart array");
        // retrieve the stored array to check the values

    //  display the retreived array items in the "cart" 

    // allow deletion of cart items, remove item from array and then push the modified array back to local storage
}