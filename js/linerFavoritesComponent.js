
  linerFavoritesArray = [];

function linerFavorites(liner){
  console.log(liner, "liner object");

  console.log(liner.id, "liner id object");
      
      let getStoredFavorite = JSON.parse(localStorage.getItem(liner.id));
      console.log(getStoredFavorite, "retrieved cart item from local storage");
      // retrieve the stored favorite item
  
      linerFavoritesArray.push(getStoredFavorite);
       console.log(linerFavoritesArray, "local storage array with favorite item");
          // add the item to the cart array
        
        localStorage.setItem("Liner Favorites", JSON.stringify(linerFavoritesArray))
          // push the cartArray to local storage
  
        let getFavorites = JSON.parse(localStorage.getItem("Liner Favorites"));
        console.log(getFavorites, "local storage favorite array");
          // retrieve the stored array to check the values
          document.getElementById('linerItemSectionJS').innerHTML = "";
          // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
          let favoritesLocation = document.querySelector('#linerItemSectionJS');
          // document.getElementById('linerItemSectionJS').innerHTML = getFavorites;
  
          // set the location where the favorite should show in the new configuration
  
          getFavorites.forEach(component => {    
            favoritesLocation.innerHTML = favoritesLocation.innerHTML +
           `<div class="card card-margin" id="${component.valAssign}">
           <a class="linerClick btn-small btn btn-primary" onclick="cart(${component.valAssign})" > + Cart </a>
           <img class="card-image" src="${component.image}"></img>
  
              <div class="card-header">
                  <h4 id=""> ${component.name} </h4>
                  <a class="linerClick btn btn-primary" onclick="removeFavorites(${component.valAssign})" > Remove Favorite </a>
                  <div id="">HD Code: ${component.hdcode}</div>
                  <h5><u> L-Codes </u></h5>
                  <div class="lcodes">
                  <div id="${component.lcode1}">${component.lcode1}</div>
                  <div id="${component.lcode2}">${component.lcode2}</div>
                  <div id="${component.lcode3}">${component.lcode3}</div>
                  <div id="${component.lcode4}">${component.lcode4}</div>
                  <div id="${component.lcode5}">${component.lcode5}</div>
                  <div id="${component.lcode6}">${component.lcode6}</div>
                  </div>
                  </div>
              </div>
          </div>`;
          console.log("Created", component.card, "Cards");
          
          });
}

function showFavorites(){

      // let getFavorites = JSON.parse(localStorage.getItem("Favorites"));
      // console.log(getFavorites, "local storage favorite array");
      //   // retrieve the stored array to check the values
      //   let favoritesLocation = document.querySelector('#linerItemSectionJS');
      //   // document.getElementById('linerItemSectionJS').innerHTML = getFavorites;

      //   // set the location where the favorite should show in the new configuration

      //   getFavorites.forEach(component => {    
      //     favoritesLocation.innerHTML = favoritesLocation.innerHTML +
      //    `<div class="card card-margin" id="${component.valAssign}">
      //    <a class="linerClick btn-small btn btn-primary" onclick="cart(${component.valAssign}, ${component.valAssign})" > + Cart </a>
      //    <img class="card-image" src="${component.image}"></img>

      //       <div class="card-header">
      //           <h4 id=""> ${component.name} </h4>
      //           <a class="linerClick btn btn-primary" onclick="removeFavorites(${component.valAssign}, ${component.valAssign})" > Remove Favorite (not working) </a>
      //           <div id="">HD Code: ${component.hdcode}</div>
      //           </div>
      //       </div>
      //   </div>`;
      //   console.log("Created", component.card, "Cards");
        
      //   });



      

 }

// window.addEventListener('load', showFavorites());



function removeFavorites(item){

// console.log(item, "item");
console.log(item[0].id, "item [0].id");

// console.log(item.id, "item.id");
// console.log(item.valAssign, "item.valAssign");

    
let getfavorite = JSON.parse(localStorage.getItem("Favorites"));
console.log(getfavorite, "local storage favorite array");
// the favorites array to be modified
let favoriteSpread = {...getfavorite};
console.log(favoriteSpread, "favoriteSpread");


let parts = JSON.parse(localStorage.getItem(item[0].id));
console.log(parts, "parts, the item created from the array item in local storage ");

const lyrics = {...parts};
console.log(lyrics, "lyrics, the array with parts spliced in");
// Above was practice and spread operator understanding

//  ["head", "shoulders", "knees", "and", "toes"]

// const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

// const index = arr.map(object => object.id).indexOf('c');

// console.log(index); // 👉️ 2

let indexItem = getfavorite.map(object => object.valAssign).indexOf(item[0].id);
console.log(indexItem, "Index Item")
// console.log(value[0], "value object");
// console.log(value.id, "sameValue object");
// console.log((index)[0].id, "Samevalue id object");
// console.log(sameValue.id, "sameValue id object no array");
// console.log(ident.valAssign, "value assigned to object");

// let getfavoriteArray = JSON.parse(localStorage.getItem("Favorites"));
// console.log(getfavoriteArray, "retrieved favorite item from local storage");
// retrieve the item

  // retrieve the stored array and check the values

getfavorite.splice(indexItem, 1);
console.log(getfavorite, "getfavorite Array spliced")

// splice out the item from the favorite array. 

localStorage.setItem("Favorites", JSON.stringify(getfavorite));

// push the modified favoriteArray back to local storage


let showfavorite = JSON.parse(localStorage.getItem("Favorites"));
console.log(showfavorite, "local storage favorite array");
// retrieve the favorite array back from local storage

        document.getElementById('linerItemSectionJS').innerHTML = "";
        // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
        let favoritesLocation = document.querySelector('#linerItemSectionJS');
        // document.getElementById('linerItemSectionJS').innerHTML = getFavorites;

        // set the location where the favorite should show in the new configuration

        showfavorite.forEach(component => {    
          favoritesLocation.innerHTML = favoritesLocation.innerHTML +
         `<div class="card card-margin" id="${component.valAssign}">
         <a class="kneeClick btn-small btn btn-primary" onclick="cart(${component.valAssign})" > + Cart </a>
         <img class="card-image" src="${component.image}"></img>

            <div class="card-header">
                <h4 id=""> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="removeFavorites(${component.valAssign})" > Remove Favorite </a>
                <div id="">HD Code: ${component.hdcode}</div>
                </div>
            </div>
        </div>`;
        console.log("Created", component.card, "Cards");
        
        });
// display the retrieved array items in the "favorite" 
// reload the favorite and display it anew
}






















// <script>

// favoritesArray = [];


// function favorites(keyed){

// console.log(keyed.id, "keyed object");
  
//   let getStoredFavorite = JSON.parse(localStorage.getItem(keyed.id));
//   console.log(getStoredFavorite, "retrieved cart item from local storage");
//   // retrieve the stored favorite item

//   favoritesArray.push(getStoredFavorite);
//    console.log(favoritesArray, "local storage array with favorite item");
//       // add the item to the cart array
    
//     localStorage.setItem("Favorites", JSON.stringify(favoritesArray))
//       // push the cartArray to local storage

//     let getFavorites = JSON.parse(localStorage.getItem("Favorites"));
//     console.log(getFavorites, "local storage favorite array");
//       // retrieve the stored array to check the values
//       document.getElementById('linerItemSectionJS').innerHTML = "";
//       // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
//       let favoritesLocation = document.querySelector('#linerItemSectionJS');
//       // document.getElementById('linerItemSectionJS').innerHTML = getFavorites;

//       // set the location where the favorite should show in the new configuration

//       getFavorites.forEach(component => {    
//         favoritesLocation.innerHTML = favoritesLocation.innerHTML +
//        `<div class="card card-margin" id="${component.valAssign}">
//        <a class="kneeClick btn-small btn btn-primary" onclick="cart(${component.valAssign})" > + Cart </a>
//        <img class="card-image" src="${component.image}"></img>

//           <div class="card-header">
//               <h4 id=""> ${component.name} </h4>
//               <a class="kneeClick btn btn-primary" onclick="removeFavorites(${component.valAssign})" > Remove Favorite </a>
//               <div id="">HD Code: ${component.hdcode}</div>
//               </div>
//           </div>
//       </div>`;
//       console.log("Created", component.card, "Cards");
      
//       });





//       // display the card item and only the chosen items


//       // favoritesArray.push(ident.outerHTML);
// // console.log(favoritesArray, "local storage array with Favorited Card");
  
// // localStorage.setItem("Local Storage Array", JSON.stringify(favoritesArray));
//   // set the array item to local storage
// // console.log(getLocalStorageArray, "retrieved local storage array");
// // localStorage.setItem("Local Storage Array", JSON.stringify(localStoreArray));
// // let getLocalStorageArray = JSON.parse(localStorage.getItem("Local Storage Array"));
// // console.log(getLocalStorageArray, "retrieved local storage array");


// // THE ABOVE WORKS, NEED TO FINISH

// // localStorage.setItem("Favorites", JSON.stringify(ident.outerHTML));
// // let favorite = JSON.parse(localStorage.getItem("Favorites"));
// // console.log(favorite, "Favorite Item Display");


// }

// function showFavorites(){

//     // let getFavorites = JSON.parse(localStorage.getItem("Favorites"));
//     // console.log(getFavorites, "local storage favorite array");
//     //   // retrieve the stored array to check the values
//     //   let favoritesLocation = document.querySelector('#linerItemSectionJS');
//     //   // document.getElementById('linerItemSectionJS').innerHTML = getFavorites;

//     //   // set the location where the favorite should show in the new configuration

//     //   getFavorites.forEach(component => {    
//     //     favoritesLocation.innerHTML = favoritesLocation.innerHTML +
//     //    `<div class="card card-margin" id="${component.valAssign}">
//     //    <a class="kneeClick btn-small btn btn-primary" onclick="cart(${component.valAssign}, ${component.valAssign})" > + Cart </a>
//     //    <img class="card-image" src="${component.image}"></img>

//     //       <div class="card-header">
//     //           <h4 id=""> ${component.name} </h4>
//     //           <a class="kneeClick btn btn-primary" onclick="removeFavorites(${component.valAssign}, ${component.valAssign})" > Remove Favorite (not working) </a>
//     //           <div id="">HD Code: ${component.hdcode}</div>
//     //           </div>
//     //       </div>
//     //   </div>`;
//     //   console.log("Created", component.card, "Cards");
      
//     //   });



    

// }

// // window.addEventListener('load', showFavorites());

// </script>
// <script>

// function removeFavorites(item){

//   // console.log(item, "item");
//   console.log(item[0].id, "item [0].id");

//   // console.log(item.id, "item.id");
//   // console.log(item.valAssign, "item.valAssign");

  
// let getfavorite = JSON.parse(localStorage.getItem("Favorites"));
// console.log(getfavorite, "local storage favorite array");
// // the favorites array to be modified
// let favoriteSpread = {...getfavorite};
// console.log(favoriteSpread, "favoriteSpread");


// let parts = JSON.parse(localStorage.getItem(item[0].id));
// console.log(parts, "parts, the item created from the array item in local storage ");

// const lyrics = {...parts};
// console.log(lyrics, "lyrics, the array with parts spliced in");
// // Above was practice and spread operator understanding

// //  ["head", "shoulders", "knees", "and", "toes"]

// // const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

// // const index = arr.map(object => object.id).indexOf('c');

// // console.log(index); // 👉️ 2

// let indexItem = getfavorite.map(object => object.valAssign).indexOf(item[0].id);
// console.log(indexItem, "Index Item")
// // console.log(value[0], "value object");
// // console.log(value.id, "sameValue object");
// // console.log((index)[0].id, "Samevalue id object");
// // console.log(sameValue.id, "sameValue id object no array");
// // console.log(ident.valAssign, "value assigned to object");

// // let getfavoriteArray = JSON.parse(localStorage.getItem("Favorites"));
// // console.log(getfavoriteArray, "retrieved favorite item from local storage");
// // retrieve the item

// // retrieve the stored array and check the values

// getfavorite.splice(indexItem, 1);
// console.log(getfavorite, "getfavorite Array spliced")

// // splice out the item from the favorite array. 

// localStorage.setItem("Favorites", JSON.stringify(getfavorite));

// // push the modified favoriteArray back to local storage


// let showfavorite = JSON.parse(localStorage.getItem("Favorites"));
// console.log(showfavorite, "local storage favorite array");
// // retrieve the favorite array back from local storage

//       document.getElementById('linerItemSectionJS').innerHTML = "";
//       // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
//       let favoritesLocation = document.querySelector('#linerItemSectionJS');
//       // document.getElementById('linerItemSectionJS').innerHTML = getFavorites;

//       // set the location where the favorite should show in the new configuration

//       showfavorite.forEach(component => {    
//         favoritesLocation.innerHTML = favoritesLocation.innerHTML +
//        `<div class="card card-margin" id="${component.valAssign}">
//        <a class="kneeClick btn-small btn btn-primary" onclick="cart(${component.valAssign})" > + Cart </a>
//        <img class="card-image" src="${component.image}"></img>

//           <div class="card-header">
//               <h4 id=""> ${component.name} </h4>
//               <a class="kneeClick btn btn-primary" onclick="removeFavorites(${component.valAssign})" > Remove Favorite </a>
//               <div id="">HD Code: ${component.hdcode}</div>
//               </div>
//           </div>
//       </div>`;
//       console.log("Created", component.card, "Cards");
      
//       });
// // display the retrieved array items in the "favorite" 
// // reload the favorite and display it anew
// }


// </script>
// <script>
// kneeArray = []
// cartArray = [];
// cartDisplayArray = [];

// function cart(item){

// let cartItem = item[0].id;
// // set a default cart item

//   console.log(item[0].id, "item object");
//   console.log(cartItem, "cartItem");
// // test the values

//   let getStoredFavorite = JSON.parse(localStorage.getItem(cartItem));
//   console.log(getStoredFavorite, "retrieved cart item from local storage");
//   // retrieve the item

//    cartArray.push(getStoredFavorite);
//    console.log(cartArray, "local storage array with cart item");
//       // add the item to the cart array
    
//     localStorage.setItem("cart", JSON.stringify(cartArray))
//       // push the cartArray to local storage

//     let getCart = JSON.parse(localStorage.getItem("cart"));
//     console.log(getCart, "local storage cart array");
//       // retrieve the stored array to check the values


//       cartDisplayArray.push(getCart);
//       console.log(cartDisplayArray, "local storage array with displayed cart items");
//       //  push the pulled cart items into the cart array

//       localStorage.setItem("display cart", JSON.stringify(cartDisplayArray));
//   // push the cart display array to local storage

//   let showCart = JSON.parse(localStorage.getItem("cart"));
//     console.log(showCart, "local storage cart array");
//   // retrieve the item from local storage

//   let cartLocation = document.querySelector('#cartSection');
//   // display the cart in the cart section section 
//   document.getElementById('cartSection').innerHTML = "";
//   // clear the cart window on addition of a new item

//   showCart.forEach(component => {    
//     cartLocation.innerHTML = cartLocation.innerHTML +
//        `<div id="${component.valAssign}">
//        <a class="kneeClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign})"> Delete </a>
//        <img class="cart-image" src="${component.image}"></img>
//         <h4 > ${component.name} </h4>
//       </div>`;
//       console.log("Created", component.value, "Cards");
      
//       });
//   // display the retrieved array items in the "cart" 

//   // allow deletion of cart items, remove item from array and then push the modified array back to local storage
 

//   function kneeCartItem(item){

//     let kneeCartItem = item[0].id;
// // set a default cart item

//   console.log(item[0].id, "item object");
//   console.log(kneeCartItem, "cartItem");
// // test the values

//   let getStoredKnee = JSON.parse(localStorage.getItem(kneeCartItem));
//   console.log(getStoredKnee, "retrieved cart item from local storage");
//   // retrieve the item

//    kneeArray.push(getStoredKnee);
//    console.log(kneeArray, "local storage array with cart item");
//       // add the item to the cart array
    
//     localStorage.setItem("Knee cart item", JSON.stringify(kneeArray))
//       // push the cartArray to local storage

//     let getKneeCartItem = JSON.parse(localStorage.getItem("Knee cart item"));
//     console.log(getKneeCartItem, "local storage Knee cart item array");
//       // retrieve the stored array to check the values
//   };
//   kneeCartItem(item);
  
//   }

  


//   </script>

//   <script>
// function removeCart(value, sameValue){

// // console.log(value[0], "value object");
// // console.log(value.id, "sameValue object");
// console.log((value)[0].id, "value[0].id object");
// // console.log(sameValue.id, "sameValue id object no array");
// // console.log(ident.valAssign, "value assigned to object");

// let getCart = JSON.parse(localStorage.getItem("cart"));
// console.log(getCart, "local storage cart array");
// // retrieve the stored array and check the values

// let getCartArray = JSON.parse(localStorage.getItem(value[0].id));
// console.log(getCartArray, "retrieved cart item from local storage");
// // retrieve the item


// let cartIndexItem = getCart.map(object => object.valAssign).indexOf(value[0].id);
// console.log(cartIndexItem, "cartIndexItem")
// // map over the array and find the index of the array item

// getCart.splice(cartIndexItem, 1);
// console.log(getCart, "getCart Array spliced")
// // splice out the item from the cart array. 

// localStorage.setItem("cart", JSON.stringify(getCart));
// // push the modified cartArray back to local storage

// let showCart = JSON.parse(localStorage.getItem("cart"));
// console.log(showCart, "local storage cart array");
// // retrieve the cart array back from local storage
// document.getElementById('cartSection').innerHTML = "";

// let cartLocation = document.querySelector('#cartSection');
// // link to a display section of the viewport
// // clear the cart window on addition of a new item

// // display the cart in the cart section section 
// showCart.forEach(component => {    
// cartLocation.innerHTML = cartLocation.innerHTML +
//  `<div id="${component.valAssign}">
//  <a class="kneeClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign})"> Delete </a>
//  <img class="cart-image" src="${component.image}"></img>
//         <h4 > ${component.name} </h4>
// </div>`;
// console.log("Created", component.valAssign, "Cards");

// });
// // display the retrieved array items in the "cart" 
// // reload the cart and display it anew


// }

//   </script>

//   <script>
// //     function showCart(){
// //       let showCartOne = JSON.parse(localStorage.getItem("cart"));
// //       console.log(showCartOne, "deleted an item and showing local storage new cart array");
// //     // retrieve the cart array back from local storage
// //     let cartLocation = document.querySelector('#cartSection');
// //     // link to a display section of the viewport
// //     document.getElementById('cartSection').innerHTML = "";
// //     // clear the cart window on addition of a new item

// //     // display the cart in the cart section section 
// //     showCartOne.forEach(component => {    
// //     cartLocation.innerHTML = cartLocation.innerHTML +
// //       `<div id="${component.valAssign}">
// //       <a class="kneeClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign}, ${component.valAssign})"> Delete </a>
// //       <img class="cart-image" src="${component.image}"></img>
// //               <h4 > ${component.name} </h4>
// //       </div>`;
// //       console.log("Created", component.valAssign, "Cards");

// // });
// //     }
// //     window.addEventListener('load', showCart());

//   </script>