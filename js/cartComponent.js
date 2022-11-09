kneeArray = []
cartArray = [];
cartDisplayArray = [];

function kneeCart(item){

  let cartItem = item[0].id;
  // set a default cart item

    console.log(item[0].id, "item object");
    console.log(cartItem, "cartItem");
// test the values

    let getStoredFavorite = JSON.parse(localStorage.getItem(cartItem));
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


        cartDisplayArray.push(getCart);
        console.log(cartDisplayArray, "local storage array with displayed cart items");
        //  push the pulled cart items into the cart array

        localStorage.setItem("display cart", JSON.stringify(cartDisplayArray));
    // push the cart display array to local storage

    let showCart = JSON.parse(localStorage.getItem("cart"));
      console.log(showCart, "local storage cart array");
    // retrieve the item from local storage

    let cartLocation = document.querySelector('#cartSection');
    // display the cart in the cart section section 
    document.getElementById('cartSection').innerHTML = "";
    // clear the cart window on addition of a new item

    showCart.forEach(component => {    
      cartLocation.innerHTML = cartLocation.innerHTML +
         `<div id="${component.valAssign}">
         <a class="kneeClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign})"> Delete </a>
         <img class="cart-image" src="${component.image}"></img>
          <h4 > ${component.name} </h4>

        </div>`;
        console.log("Created", component.value, "Cards");
        
        });
    // display the retrieved array items in the "cart" 

    // allow deletion of cart items, remove item from array and then push the modified array back to local storage
   

    function kneeCartItem(item){

      let kneeCartItem = item[0].id;
  // set a default cart item

    console.log(item[0].id, "item object");
    console.log(kneeCartItem, "cartItem");
// test the values

    let getStoredKnee = JSON.parse(localStorage.getItem(kneeCartItem));
    console.log(getStoredKnee, "retrieved cart item from local storage");
    // retrieve the item

     kneeArray.push(getStoredKnee);
     console.log(kneeArray, "local storage array with cart item");
        // add the item to the cart array
      
      localStorage.setItem("Knee cart item", JSON.stringify(kneeArray))
        // push the cartArray to local storage

      let getKneeCartItem = JSON.parse(localStorage.getItem("Knee cart item"));
      console.log(getKneeCartItem, "local storage Knee cart item array");
        // retrieve the stored array to check the values
    };
    kneeCartItem(item);
    
    }

    
function removeCart(value){

// console.log(value[0], "value object");
// console.log(value.id, "sameValue object");
console.log((value)[0].id, "value[0].id object");
// console.log(sameValue.id, "sameValue id object no array");
// console.log(ident.valAssign, "value assigned to object");

let getCart = JSON.parse(localStorage.getItem("cart"));
console.log(getCart, "local storage cart array");
  // retrieve the stored array and check the values

let getCartArray = JSON.parse(localStorage.getItem(value[0].id));
console.log(getCartArray, "retrieved cart item from local storage");
// retrieve the item


let cartIndexItem = getCart.map(object => object.valAssign).indexOf(value[0].id);
console.log(cartIndexItem, "cartIndexItem")
// map over the array and find the index of the array item

getCart.splice(cartIndexItem, 1);
console.log(getCart, "getCart Array spliced")
// splice out the item from the cart array. 

localStorage.setItem("cart", JSON.stringify(getCart));
// push the modified cartArray back to local storage

let showCart = JSON.parse(localStorage.getItem("cart"));
console.log(showCart, "local storage cart array");
// retrieve the cart array back from local storage
document.getElementById('cartSection').innerHTML = "";

let cartLocation = document.querySelector('#cartSection');
// link to a display section of the viewport
// clear the cart window on addition of a new item

// display the cart in the cart section section 
showCart.forEach(component => {    
cartLocation.innerHTML = cartLocation.innerHTML +
   `<div id="${component.valAssign}">
   <a class="kneeClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign})"> Delete </a>
   <img class="cart-image" src="${component.image}"></img>
          <h4 > ${component.name} </h4>
  </div>`;
  console.log("Created", component.valAssign, "Cards");
  
  });
// display the retrieved array items in the "cart" 
// reload the cart and display it anew


}

  //     function showCart(){
  //       let showCartOne = JSON.parse(localStorage.getItem("cart"));
  //       console.log(showCartOne, "deleted an item and showing local storage new cart array");
  //     // retrieve the cart array back from local storage
  //     let cartLocation = document.querySelector('#cartSection');
  //     // link to a display section of the viewport
  //     document.getElementById('cartSection').innerHTML = "";
  //     // clear the cart window on addition of a new item

  //     // display the cart in the cart section section 
  //     showCartOne.forEach(component => {    
  //     cartLocation.innerHTML = cartLocation.innerHTML +
  //       `<div id="${component.valAssign}">
  //       <a class="kneeClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign}, ${component.valAssign})"> Delete </a>
  //       <img class="cart-image" src="${component.image}"></img>
  //               <h4 > ${component.name} </h4>
  //       </div>`;
  //       console.log("Created", component.valAssign, "Cards");
  
  // });
  //     }
  //     window.addEventListener('load', showCart());


