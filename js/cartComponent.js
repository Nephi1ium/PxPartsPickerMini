kneeArray = [];
footArray = [];
cartArray = [];
linerArray = [];
compArray = [];
// cartDisplayArray = [];

function cart(item){

  console.log(item, "cart item id")

let idtochange = item.id;
//let changedid = idtochange.id.replace("favorite", "");
//console.log(changedid, "changed id");
//idtochange = changedid;
//console.log(idtochange, "idtochange");

var newId = idtochange.substring(0, idtochange.indexOf("favorite")) + idtochange.substring(idtochange.indexOf("favorite")+17);
console.log(newId, "new id");

    let getStoredFavorite = JSON.parse(localStorage.getItem(newId));
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

        const noDupes = [...new Map(getCart.map((m) => [m.valAssign, m])).values()];
        console.log(noDupes, "eureka!");
      // now here turn the items into a set without duplicates

      localStorage.setItem("cart", JSON.stringify(noDupes))
      // push the cartArray to local storage

    let showCart = JSON.parse(localStorage.getItem("cart"));
      console.log(showCart, "local storage cart array");
    // retrieve the item from local storage

    let cartLocation = document.querySelector('#cartSection');
    // display the cart in the cart section section 
    document.getElementById('cartSection').innerHTML = "";
    // clear the cart window on addition of a new item

    showCart.forEach(component => {    
      cartLocation.innerHTML = cartLocation.innerHTML +
         `<div id="${component.valAssign}cart">
         <a class="kneeClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign})"> Delete </a>
         <img class="cart-image" src="${component.image}"></img>
          <h4 > ${component.name} </h4>

        </div>`;
        console.log("Created", component.value, "Cards");
        
        });
    // display the retrieved array items in the "cart" 

    // allow deletion of cart items, remove item from array and then push the modified array back to local storage
   
  }

  function tempcart(item){

    let cartItem = item;
    // set a default cart item
  
      console.log(item.id, "item object");
      console.log(cartItem, "cartItem");
  // test the values
  let idtochange = item.id;
//let changedid = idtochange.id.replace("favorite", "");
//console.log(changedid, "changed id");
//idtochange = changedid;
//console.log(idtochange, "idtochange");

var newId = idtochange.substring(0, idtochange.indexOf("favorite")) + idtochange.substring(idtochange.indexOf("favorite")+17);
console.log(newId, "new id");

      let getStoredFavorite = JSON.parse(localStorage.getItem(newId));
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
  
          const noDupes = [...new Map(getCart.map((m) => [m.valAssign, m])).values()];
          console.log(noDupes, "eureka!");
        // now here turn the items into a set without duplicates
  
        localStorage.setItem("cart", JSON.stringify(noDupes))
        // push the cartArray to local storage
  
      let showCart = JSON.parse(localStorage.getItem("cart"));
        console.log(showCart, "local storage cart array");
      // retrieve the item from local storage
  
      let cartLocation = document.querySelector('#cartSection');
      // display the cart in the cart section section 
      document.getElementById('cartSection').innerHTML = "";
      // clear the cart window on addition of a new item
  
      showCart.forEach(component => {    
        cartLocation.innerHTML = cartLocation.innerHTML +
           `<div id="${component.valAssign}cart">
           <a class="kneeClick btn-small btn btn-primary" onclick="tempremoveCart(${component.valAssign})"> Delete </a>
           <img class="cart-image" src="${component.image}"></img>
            <h4 > ${component.name} </h4>
  
          </div>`;
          console.log("Created", component.value, "Cards");
          
          });
      // display the retrieved array items in the "cart" 
  
      // allow deletion of cart items, remove item from array and then push the modified array back to local storage
     
    }
    
    function kneeCartItem(item){

  // set a default cart item
  console.log(item, "knee cart item id")

    console.log(item.id, "item object");
    console.log(kneeCartItem, "cartItem");
// test the values

let idtochange = item.id;
//let changedid = idtochange.id.replace("favorite", "");
//console.log(changedid, "changed id");
//idtochange = changedid;
//console.log(idtochange, "idtochange");

var newId = idtochange.substring(0, idtochange.indexOf("favorite")) + idtochange.substring(idtochange.indexOf("favorite")+17);
console.log(newId, "new id");


    let getStoredKnee = JSON.parse(localStorage.getItem(newId));
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

        cart(item);
    };
    // kneeCartItem(item);
    
    

    function footCartItem(item){

      let footCartItem = item.id;
  // set a default cart item

    console.log(item.id, "item object");
    console.log(footCartItem, "cartItem");
// test the values
let idtochange = item.id;
//let changedid = idtochange.id.replace("favorite", "");
//console.log(changedid, "changed id");
//idtochange = changedid;
//console.log(idtochange, "idtochange");

var newId = idtochange.substring(0, idtochange.indexOf("favorite")) + idtochange.substring(idtochange.indexOf("favorite")+17);
console.log(newId, "new id");

    let getStoredFoot = JSON.parse(localStorage.getItem(newId));
    console.log(getStoredFoot, "retrieved cart item from local storage");
    // retrieve the item

     footArray.push(getStoredFoot);
     console.log(footArray, "local storage array with cart item");
        // add the item to the cart array
      
      localStorage.setItem("Foot cart item", JSON.stringify(footArray))
        // push the cartArray to local storage

      let getFootCartItem = JSON.parse(localStorage.getItem("Foot cart item"));
      console.log(getFootCartItem, "local storage Foot cart item array");
        // retrieve the stored array to check the values
        cart(item);
    };
    // footCartItem(item);

    function linerCartItem(item){

      // linerArray = [];

      console.log(linerArray, "this should be empty");
      console.log(item, "liner object")

      let linerCartItem = item.id;
  // set a default cart item

    console.log(item.id, "item object");
    console.log(linerCartItem, "cartItem");
// test the values

let idtochange = item.id;
//let changedid = idtochange.id.replace("favorite", "");
//console.log(changedid, "changed id");
//idtochange = changedid;
//console.log(idtochange, "idtochange");

var newId = idtochange.substring(0, idtochange.indexOf("favorite")) + idtochange.substring(idtochange.indexOf("favorite")+17);
console.log(newId, "new id");

    let getStoredLiner = JSON.parse(localStorage.getItem(newId));
    console.log(getStoredLiner, "retrieved cart item from local storage");
    // retrieve the item

     linerArray.push(getStoredLiner);
     console.log(getStoredLiner, "local storage liner item");
        // add the item to the cart array
      
      localStorage.setItem("Liner cart item", JSON.stringify(linerArray))
        // push the cartArray to local storage

      let getFootCartItem = JSON.parse(localStorage.getItem("Liner cart item"));
      console.log(getFootCartItem, "local storage Foot cart item array");
        // retrieve the stored array to check the values
        tempcart(item);
    };


    function compCartItem(item){

      let compCartItem = item[0].id;
  // set a default cart item

    console.log(item[0].id, "item object");
    console.log(compCartItem, "cartItem");
// test the values

    let getStoredComp = JSON.parse(localStorage.getItem(compCartItem));
    console.log(getStoredComp, "retrieved cart item from local storage");
    // retrieve the item

     compArray.push(getStoredComp);
     console.log(compArray, "local storage array with cart item");
        // add the item to the cart array
      
      localStorage.setItem("Comp cart item", JSON.stringify(compArray))
        // push the cartArray to local storage

      let getCompCartItem = JSON.parse(localStorage.getItem("Comp cart item"));
      console.log(getCompCartItem, "local storage Comp cart item array");
        // retrieve the stored array to check the values

        cart(item);
    };

    function compCartItemKS(item){

      let compCartItem = item[0].id;
  // set a default cart item

    console.log(item[0].id, "item object");
    console.log(compCartItem, "cartItem");
// test the values

    let getStoredComp = JSON.parse(localStorage.getItem(compCartItem));
    console.log(getStoredComp, "retrieved cart item from local storage");
    // retrieve the item

     compArray.push(getStoredComp);
     console.log(compArray, "local storage array with cart item");
        // add the item to the cart array
      
      localStorage.setItem("CompKS cart item", JSON.stringify(compArray))
        // push the cartArray to local storage

      let getCompCartItem = JSON.parse(localStorage.getItem("CompKS cart item"));
      console.log(getCompCartItem, "local storage Comp cart item array");
        // retrieve the stored array to check the values

        cart(item);
    };

    function compCartItempxComp(item){

      let compCartItem = item[0].id;
  // set a default cart item

    console.log(item[0].id, "item object");
    console.log(compCartItem, "cartItem");
// test the values

    let getStoredComp = JSON.parse(localStorage.getItem(compCartItem));
    console.log(getStoredComp, "retrieved cart item from local storage");
    // retrieve the item

     compArray.push(getStoredComp);
     console.log(compArray, "local storage array with cart item");
        // add the item to the cart array
      
      localStorage.setItem("ComppxComp cart item", JSON.stringify(compArray))
        // push the cartArray to local storage

      let getCompCartItem = JSON.parse(localStorage.getItem("ComppxComp cart item"));
      console.log(getCompCartItem, "local storage Comp cart item array");
        // retrieve the stored array to check the values

        cart(item);
    };

function removeCart(value){

// console.log(value[0], "value object");
// console.log(value.id, "sameValue object");
console.log(value.id, "value.id object");
// console.log(sameValue.id, "sameValue id object no array");
// console.log(ident.valAssign, "value assigned to object");

let getCart = JSON.parse(localStorage.getItem("cart"));
console.log(getCart, "local storage cart array");
  // retrieve the stored array and check the values
let getKneeCart = JSON.parse(localStorage.getItem("Knee cart item"));
console.log(getCart, "local storage Knee cart array");
  // retrieve the stored array and check the values
  let getFootCart = JSON.parse(localStorage.getItem("Foot cart item"));
console.log(getCart, "local storage Foot cart array");
  // retrieve the stored array and check the values
  let getCompCart = JSON.parse(localStorage.getItem("Comp cart item"));
console.log(getCompCart, "local storage Component cart array");
  // retrieve the stored array and check the values

let getCartArray = JSON.parse(localStorage.getItem(value.id));
console.log(getCartArray, "retrieved cart item from local storage");
// retrieve the item


let cartIndexItem = getCart.map(object => object.valAssign).indexOf(value.id);
console.log(cartIndexItem, "cartIndexItem")
// map over the array and find the index of the array item

getCart.splice(cartIndexItem, 1);
console.log(getCart, "getCart Array spliced")
// splice out the item from the cart array. 
getKneeCart.splice(cartIndexItem, 1);
console.log(getKneeCart, "getDisplayCart Array spliced")
// splice out the item from the cart array. 
getFootCart.splice(cartIndexItem, 1);
console.log(getFootCart, "getDisplayCart Array spliced")
// splice out the item from the cart array. 
getCompCart.splice(cartIndexItem, 1);
console.log(getCompCart, "getCompCart Array spliced")
// splice out the item from the cart array. 

localStorage.setItem("cart", JSON.stringify(getCart));
// push the modified cartArray back to local storage
localStorage.setItem("Knee cart item", JSON.stringify(getCart));
// push the modified cartArray back to local storage
localStorage.setItem("Foot cart item", JSON.stringify(getCart));
// push the modified cartArray back to local storage
localStorage.setItem("Comp cart item", JSON.stringify(getCart));
// push the modified cartArray back to local storage

let showCart = JSON.parse(localStorage.getItem("cart"));
console.log(showCart, "local storage cart array");
// retrieve the cart array back from local storage
let showKneeCart = JSON.parse(localStorage.getItem("Knee cart item"));
console.log(showKneeCart, "local storage cart display array");
// retrieve the cart array back from local storage
let showFootCart = JSON.parse(localStorage.getItem("Foot cart item"));
console.log(showFootCart, "local storage cart display array");
// retrieve the cart array back from local storage
let showCompCart = JSON.parse(localStorage.getItem("Comp cart item"));
console.log(showCompCart, "local storage cart display array");
// retrieve the cart array back from local storage


document.getElementById('cartSection').innerHTML = "";

let cartLocation = document.querySelector('#cartSection');
// link to a display section of the viewport
// clear the cart window on addition of a new item

// display the cart in the cart section section 
showCart.forEach(component => {    
cartLocation.innerHTML = cartLocation.innerHTML +
   `<div id="${component.valAssign}cart">
   <a class="footClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign})"> Delete </a>
   <img class="cart-image" src="${component.image}"></img>
          <h4 > ${component.name} </h4>
  </div>`;
  console.log("Created", component.valAssign, "Cards");
  
  });
// display the retrieved array items in the "cart" 
// reload the cart and display it anew


}

function tempremoveCart(value){

  // console.log(value[0], "value object");
  // console.log(value.id, "sameValue object");
  console.log(value, "value object");

  console.log(value.id, "value.id object");
  // console.log(sameValue.id, "sameValue id object no array");
  // console.log(ident.valAssign, "value assigned to object");
  
  let getCart = JSON.parse(localStorage.getItem("cart"));
  console.log(getCart, "local storage cart array");
    // retrieve the stored array and check the values

  
  let getCartArray = JSON.parse(localStorage.getItem(value.id));
  console.log(getCartArray, "retrieved cart item from local storage");
  // retrieve the item
  
  
  let cartIndexItem = getCart.map(object => object.valAssign).indexOf(value.id);
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
     `<div id="${component.valAssign}cart">
     <a class="footClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign})"> Delete </a>
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


