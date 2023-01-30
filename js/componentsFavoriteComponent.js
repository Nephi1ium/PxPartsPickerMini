//   pxCompFavoritesArray = []; 
//   pxCompFavoritesKSArray = [];
//   pxCompFavoritespxCompArray = [];
// function pxCompFavorites(comp){


//   console.log(comp, "pxComp object");

//   console.log(comp.id, "pxComp id object");
      
//       let getStoredFavorite = JSON.parse(localStorage.getItem(comp.id));
//       console.log(getStoredFavorite, "retrieved cart item from local storage");
//       // retrieve the stored favorite item
  
//       pxCompFavoritesArray.push(getStoredFavorite);
//        console.log(pxCompFavoritesArray, "local storage array with favorite item");
//           // add the item to the cart array
        
//         localStorage.setItem("Comp Favorites", JSON.stringify(pxCompFavoritesArray))
//           // push the cartArray to local storage
  
//         let getFavorites = JSON.parse(localStorage.getItem("Comp Favorites"));
//         console.log(getFavorites, "local storage favorite array");
//           // retrieve the stored array to check the values
//           document.getElementById('pxCompItemSectionJS').innerHTML = "";
//           // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
//           let favoritesLocation = document.querySelector('#pxCompItemSectionJS');
//           // document.getElementById('pxCompItemSectionJS').innerHTML = getFavorites;
  
//           // set the location where the favorite should show in the new configuration
  
//           getFavorites.forEach(component => {    
//             favoritesLocation.innerHTML = favoritesLocation.innerHTML +
//            `<div class="card favorites card-margin" id="${component.valAssign}favorite">
//            <a class="pxCompClick btn-small btn btn-primary" onclick="compCartItem(${component.valAssign});" > + Cart </a>
//            <img class="card-image" src="${component.image}"></img>
  
//               <div class="card-header">
//                   <h4 id=""> ${component.name} </h4>
//                   <a class="pxCompClick btn btn-primary" onclick="removeFavorites(${component.valAssign})" > Remove Favorite </a>
//                   ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
//                   <h5><u> L-Codes </u></h5>
//                   <div class="lcodes">

//                   </div>
//                   </div>
//               </div>
//           </div>`;
//           console.log("Created", component.card, "Cards");
          
//           });

//           pxCompFavorites = getFavorites;

// console.log(pxCompFavorites, "This is the modified global comp favorite array")
// // change the global value of the array above
// }

// function pxCompFavoritesKS(comp){



//   console.log(comp, "pxComp object");

//   console.log(comp.id, "pxComp id object");
      
//       let getStoredFavorite = JSON.parse(localStorage.getItem(comp.id));
//       console.log(getStoredFavorite, "retrieved cart item from local storage");
//       // retrieve the stored favorite item
  
//       pxCompFavoritesKSArray.push(getStoredFavorite);
//        console.log(pxCompFavoritesKSArray, "local storage array with favorite item");
//           // add the item to the cart array
        
//         localStorage.setItem("CompKS Favorites", JSON.stringify(pxCompFavoritesKSArray))
//           // push the cartArray to local storage
  
//         let getFavorites = JSON.parse(localStorage.getItem("CompKS Favorites"));
//         console.log(getFavorites, "local storage favorite array");
//           // retrieve the stored array to check the values
//           document.getElementById('pxCompItemSectionJSKS').innerHTML = "";
//           // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
//           let favoritesLocation = document.querySelector('#pxCompItemSectionJSKS');
//           // document.getElementById('pxCompItemSectionJS').innerHTML = getFavorites;
  
//           // set the location where the favorite should show in the new configuration
  
//           getFavorites.forEach(component => {    
//             favoritesLocation.innerHTML = favoritesLocation.innerHTML +
//            `<div class="card favorites card-margin" id="${component.valAssign}">
//            <a class="pxCompClick btn-small btn btn-primary" onclick="compCartItemKS(${component.valAssign})" > + Cart </a>
//            <img class="card-image" src="${component.image}"></img>
  
//               <div class="card-header">
//                   <h4 id=""> ${component.name} </h4>
//                   <a class="pxCompClick btn btn-primary" onclick="removeFavoritesKS(${component.valAssign})" > Remove Favorite </a>
//                   ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
//                   <h5><u> L-Codes </u></h5>
//                   <div class="lcodes">

//                   </div>
//                   </div>
//               </div>
//           </div>`;
//           console.log("Created", component.card, "Cards");
          
//           });

//           pxCompFavoritesKSArray = getFavorites;

// console.log(pxCompFavoritesKSArray, "This is the modified global comppxks favorite array")
// // change the global value of the array above
// }

// function pxCompFavoritespxComp(comp){


//   console.log(comp, "pxComp object");

//   console.log(comp.id, "pxComp id object");
      
//       let getStoredFavorite = JSON.parse(localStorage.getItem(comp.id));
//       console.log(getStoredFavorite, "retrieved cart item from local storage");
//       // retrieve the stored favorite item
  
//       pxCompFavoritespxCompArray.push(getStoredFavorite);
//        console.log(pxCompFavoritespxCompArray, "local storage array with favorite item");
//           // add the item to the cart array
        
//         localStorage.setItem("ComppxComp Favorites", JSON.stringify(pxCompFavoritespxCompArray))
//           // push the cartArray to local storage
  
//         let getFavorites = JSON.parse(localStorage.getItem("ComppxComp Favorites"));
//         console.log(getFavorites, "local storage favorite array");
//           // retrieve the stored array to check the values
//           document.getElementById('pxCompItemSectionJSpxComp').innerHTML = "";
//           // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
//           let favoritesLocation = document.querySelector('#pxCompItemSectionJSpxComp');
//           // document.getElementById('pxCompItemSectionJS').innerHTML = getFavorites;
  
//           // set the location where the favorite should show in the new configuration
  
//           getFavorites.forEach(component => {    
//             favoritesLocation.innerHTML = favoritesLocation.innerHTML +
//            `<div class="card favorites card-margin" id="${component.valAssign}">
//            <a class="pxCompClick btn-small btn btn-primary" onclick="compCartItempxComp(${component.valAssign})" > + Cart </a>
//            <img class="card-image" src="${component.image}"></img>
  
//               <div class="card-header">
//                   <h4 id=""> ${component.name} </h4>
//                   <a class="pxCompClick btn btn-primary" onclick="removeFavoritespxComp(${component.valAssign})" > Remove Favorite </a>
//                   <div id="">HD Code: ${component.hdcode}</div>
//                   <h5><u> L-Codes </u></h5>
//                   <div class="lcodes">
//                   <div id="${component.lcode1}">${component.lcode1}</div>
//                   <div id="${component.lcode2}">${component.lcode2}</div>
//                   <div id="${component.lcode3}">${component.lcode3}</div>
//                   <div id="${component.lcode4}">${component.lcode4}</div>
//                   <div id="${component.lcode5}">${component.lcode5}</div>
//                   <div id="${component.lcode6}">${component.lcode6}</div>
//                   </div>
//                   </div>
//               </div>
//           </div>`;
//           console.log("Created", component.card, "Cards");
          
//           });

//           pxCompFavoritespxCompArray = getFavorites;

//           console.log(pxCompFavoritespxCompArray, "This is the modified global comppx favorite array")
//           // change the global value of the array above
// }

// function showFavorites(){
// }





// function removeFavoritesKS(item){

//   // console.log(item, "item");
//   console.log(item[0].id, "item [0].id");
  
//   // console.log(item.id, "item.id");
//   // console.log(item.valAssign, "item.valAssign");
  
      
//   let getfavorite = JSON.parse(localStorage.getItem("CompKS Favorites"));
//   console.log(getfavorite, "local storage favorite array");
//   // the favorites array to be modified
//   let favoriteSpread = {...getfavorite};
//   console.log(favoriteSpread, "favoriteSpread");
  
  
//   let parts = JSON.parse(localStorage.getItem(item[0].id));
//   console.log(parts, "parts, the item created from the array item in local storage ");
  
  
//   let indexItem = getfavorite.map(object => object.valAssign).indexOf(item[0].id);
//   console.log(indexItem, "Index Item")

  
//   // let getfavoriteArray = JSON.parse(localStorage.getItem("Favorites"));
//   // console.log(getfavoriteArray, "retrieved favorite item from local storage");
//   // retrieve the item
  
//     // retrieve the stored array and check the values
  
//   getfavorite.splice(indexItem, 1);
//   console.log(getfavorite, "getfavorite Array spliced")
  
//   // splice out the item from the favorite array. 
  
//   localStorage.setItem("CompKS Favorites", JSON.stringify(getfavorite));
  
//   // push the modified favoriteArray back to local storage
  
  
//   let showfavorite = JSON.parse(localStorage.getItem("CompKS Favorites"));
//   console.log(showfavorite, "local storage favorite array");
//   // retrieve the favorite array back from local storage
  
//           document.getElementById('pxCompItemSectionJSKS').innerHTML = "";
//           // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
//           let favoritesLocation = document.querySelector('#pxCompItemSectionJSKS');
//           // document.getElementById('pxCompItemSectionJS').innerHTML = getFavorites;
  
//           // set the location where the favorite should show in the new configuration
  
//           showfavorite.forEach(component => {    
//             favoritesLocation.innerHTML = favoritesLocation.innerHTML +
//            `<div class="card card-margin" id="${component.valAssign}">
//            <a class="kneeClick btn-small btn btn-primary" onclick="cart(${component.valAssign})" > + Cart </a>
//            <img class="card-image" src="${component.image}"></img>
  
//               <div class="card-header">
//                   <h4 id=""> ${component.name} </h4>
//                   <a class="kneeClick btn btn-primary" onclick="removeFavoritesKS(${component.valAssign})" > Remove Favorite </a>
//                   ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
//                   </div>
//               </div>
//           </div>`;
//           console.log("Created", component.card, "Cards");
          
//           });
//   // display the retrieved array items in the "favorite" 
//   // reload the favorite and display it anew


//   pxCompFavoritesKSArray = showfavorite;

// console.log(pxCompFavoritesKSArray, "This is the modified global liner favorite array")
// // change the global value of the array above
//   }

//   function removeFavoritespxComp(item){

//     // console.log(item, "item");
//     console.log(item[0].id, "item [0].id");
    
//     // console.log(item.id, "item.id");
//     // console.log(item.valAssign, "item.valAssign");
    
        
//     let getfavorite = JSON.parse(localStorage.getItem("ComppxComp Favorites"));
//     console.log(getfavorite, "local storage favorite array");
//     // the favorites array to be modified
//     let favoriteSpread = {...getfavorite};
//     console.log(favoriteSpread, "favoriteSpread");
    
    
//     let parts = JSON.parse(localStorage.getItem(item[0].id));
//     console.log(parts, "parts, the item created from the array item in local storage ");
    
//     const lyrics = {...parts};
//     console.log(lyrics, "lyrics, the array with parts spliced in");
//     // Above was practice and spread operator understanding
    
//     //  ["head", "shoulders", "knees", "and", "toes"]
    
//     // const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
    
//     // const index = arr.map(object => object.id).indexOf('c');
    
//     // console.log(index); // 👉️ 2
    
//     let indexItem = getfavorite.map(object => object.valAssign).indexOf(item[0].id);
//     console.log(indexItem, "Index Item")
//     // console.log(value[0], "value object");
//     // console.log(value.id, "sameValue object");
//     // console.log((index)[0].id, "Samevalue id object");
//     // console.log(sameValue.id, "sameValue id object no array");
//     // console.log(ident.valAssign, "value assigned to object");
    
//     // let getfavoriteArray = JSON.parse(localStorage.getItem("Favorites"));
//     // console.log(getfavoriteArray, "retrieved favorite item from local storage");
//     // retrieve the item
    
//       // retrieve the stored array and check the values
    
//     getfavorite.splice(indexItem, 1);
//     console.log(getfavorite, "getfavorite Array spliced")
    
//     // splice out the item from the favorite array. 
    
//     localStorage.setItem("ComppxComp Favorites", JSON.stringify(getfavorite));
    
//     // push the modified favoriteArray back to local storage
    
    
//     let showfavorite = JSON.parse(localStorage.getItem("ComppxComp Favorites"));
//     console.log(showfavorite, "local storage favorite array");
//     // retrieve the favorite array back from local storage
    
//             document.getElementById('pxCompItemSectionJSpxComp').innerHTML = "";
//             // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
//             let favoritesLocation = document.querySelector('#pxCompItemSectionJSpxComp');
//             // document.getElementById('pxCompItemSectionJS').innerHTML = getFavorites;
    
//             // set the location where the favorite should show in the new configuration
    
//             showfavorite.forEach(component => {    
//               favoritesLocation.innerHTML = favoritesLocation.innerHTML +
//              `<div class="card card-margin" id="${component.valAssign}">
//              <a class="kneeClick btn-small btn btn-primary" onclick="cart(${component.valAssign})" > + Cart </a>
//              <img class="card-image" src="${component.image}"></img>
    
//                 <div class="card-header">
//                     <h4 id=""> ${component.name} </h4>
//                     <a class="kneeClick btn btn-primary" onclick="removeFavoritespxComp(${component.valAssign})" > Remove Favorite </a>
//                     ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
//                     </div>
//                 </div>
//             </div>`;
//             console.log("Created", component.card, "Cards");
            
//             });
//     // display the retrieved array items in the "favorite" 
//     // reload the favorite and display it anew


//     pxCompFavoritespxCompArray = showfavorite;

// console.log(pxCompFavoritespxCompArray, "This is the modified global components favorite array")
// // change the global value of the array above
//     }


//                 function compParChoice(choose){
//                 console.log(choose, "choose parameter");
//                 console.log(choose.id, "choose id")
                
//                   let getStoredFavorite = JSON.parse(localStorage.getItem(choose.id));
//                   console.log(getStoredFavorite, "retrieved comp item from local storage");
//                   // retrieve the stored favorite item
//                   let compChoiceComponent = [getStoredFavorite];
//                   console.log(compChoiceComponent, "Comp Choice Component Array");
                
//                   let compParLocation = document.getElementById("itemSelectorModal");
                
//                   compChoiceComponent.forEach(component => {   
                
//                     compParLocation.innerHTML = compParLocation.innerHTML +
//                        `
//                 <div id="itemModal">
//                        <div id="itemHeader">
//                 <img id="itemPhoto" src="${component.image}">
//                 </div>
//                 <form id="itemForm">                
//                 <label id="labItemQuantity" for="itemQuantity">Quantity:</label>
//                 <div class="parButton" id="itemCounter">
//                   <!-- <button type="button" id="itemMinus">-</button> -->
//                   <input type="number" id="itemQuantity" min="1" max="100" value="0">
//                   <!-- <button type="button" id="itemPlus">+</button> -->
                
//                 </div>
//                 <button onclick="hideCompSelector()" type="button" class="btn-secondary" id="removeParSelector">Cancel</button> 
                
//                 <button onclick="compCartItem(${component.valAssign}favorite); addCompQuantity(); hideCompSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button> 
                
//                 </form>
//                 <div id="itemQuantityOutput"></div>
//                 <div id="itemSizeOutput"></div>
//                 <div id="itemProfileOutput"></div>
//                 </div>
                
//                 `
//                        ;
//                       console.log("Choosing Comp Parameters Successful");
                      
//                       });
                
                
                
//                     }
                

//                 function addCompQuantity(){

//                     let quantity = document.getElementById("itemQuantity");
                      
//                     localStorage.setItem("Comp Quantity", JSON.stringify(quantity.value))
//                       // push the cartArray to local storage
                  
//                     let getQuantity = JSON.parse(localStorage.getItem("Comp Quantity"));
//                     console.log(getQuantity, "Quantity of Comps Stored");
//                       // retrieve the stored array to check the values
//                   }
                  
//                   function addCompProfile(){
                  
//                     let profile = document.getElementById("itemProfile");
                  
//                     localStorage.setItem("Comp Profile", JSON.stringify(profile.value))
//                       // push the cartArray to local storage
                  
//                     let getProfile = JSON.parse(localStorage.getItem("Comp Profile"));
//                     console.log(getProfile, "Profile of Comps Stored");
//                       // retrieve the stored array to check the values
//                   }
                  
//                   function addCompSize(){
                  
//                     let size = document.getElementById("itemSize");
                  
//                     localStorage.setItem("Comp Size", JSON.stringify(size.value))
//                     // push the cartArray to local storage
                  
//                   let getSize = JSON.parse(localStorage.getItem("Comp Size"));
//                   console.log(getSize, "Size of Comps Stored");
//                     // retrieve the stored array to check the values
//                   }
                  
//                   function hideCompSelector(){
//                     let myContainer = document.getElementById("itemSelectorModal");
//                     let itemToRemove = document.getElementById("itemModal");
//                     myContainer.removeChild(itemToRemove);
//                   }
//                    function addCompColor(){
                  
//                     let color = document.getElementById("itemColor");
                  
//                     localStorage.setItem("Comp Color", JSON.stringify(color.value))
//                     // push the cartArray to local storage
                  
//                   let getColor = JSON.parse(localStorage.getItem("Comp Color"));
//                   console.log(getColor, "Color of Comps Stored");
//                     // retrieve the stored array to check the values//   let color = document.getElementById("itemColor");
                  
                  
//                   //   localStorage.setItem("Comp Quantity", JSON.stringify(quantity.value))
//                   //   // push the cartArray to local storage
                  
//                   // let getQuantity = JSON.parse(localStorage.getItem("Comp Quantity"));
//                   // console.log(getQuantity, "Quantity of Comps Stored");
//                   //   // retrieve the stored array to check the values
//                    }













pxcompFavoritesArray = [];

function pxCompFavorites(pxcomp){
  console.log(pxcomp, "pxcomp object");

  console.log(pxcomp.id, "pxcomp id object");
      
      let getStoredFavorite = JSON.parse(localStorage.getItem(pxcomp.id));
      console.log(getStoredFavorite, "retrieved cart item from local storage");
      // retrieve the stored favorite item
  
      pxcompFavoritesArray.push(getStoredFavorite);
       console.log(pxcompFavoritesArray, "local storage array with favorite item");
          // add the item to the cart array
        
        localStorage.setItem("pxcomp Favorites", JSON.stringify(pxcompFavoritesArray))
          // push the cartArray to local storage
  
        let getFavorites = JSON.parse(localStorage.getItem("pxcomp Favorites"));
        console.log(getFavorites, "local storage favorite array");
          // retrieve the stored array to check the values
          document.getElementById('pxCompItemSectionJS').innerHTML = "";
          // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
          let favoritesLocation = document.querySelector('#pxCompItemSectionJS');
          // document.getElementById('pxcompItemSectionJS').innerHTML = getFavorites;
  
          // set the location where the favorite should show in the new configuration
  
// This will replace the +cart button in the below function
//            <a class="pxcompClick btn-small btn btn-primary" onclick="pxcompCartItem(${component.valAssign}); pxcompParChoice()" > + Cart </a>


getFavorites.forEach(component => {    
  favoritesLocation.innerHTML = favoritesLocation.innerHTML +
  `<div class="card favorites card-margin" id="${component.valAssign}favorite">

  <a class="pxcompClick btn-small btn btn-primary" onclick="pxcompParChoice(${component.valAssign})" > + Cart </a>
  <img class="card-image" src="${component.image}"></img>

  <div class="card-header">
      <h4 id=""> ${component.name} </h4>
      <a class="pxcompClick btn btn-primary" onclick="removepxcompFavorites(${component.valAssign})" > Remove Favorite </a>
      <div id="">HD Code: ${component.hdcode}</div>
      <h5><u> L-Codes </u></h5>
      <div class="lcodes">
      ${ component.lcode1 ? `<div id="${component.lcode1}">${component.lcode1}</div>` : ''}
      ${ component.lcode2 ? `<div id="${component.lcode2}">${component.lcode2}</div>` : ''}
      ${ component.lcode3 ? `<div id="${component.lcode3}">${component.lcode3}</div>` : ''}
      ${ component.lcode4 ? `<div id="${component.lcode4}">${component.lcode4}</div>` : ''}
      ${ component.lcode5 ? `<div id="${component.lcode5}">${component.lcode5}</div>` : ''}
      ${ component.lcode6 ? `<div id="${component.lcode6}">${component.lcode6}</div>` : ''}
      </div>
      </div>
  </div>
</div>`;
console.log("Created", component.card, "Cards");
});
          


          pxcompFavoritesArray = getFavorites;

          console.log(pxcompFavoritesArray, "This is the modified global pxcomp favorite array")
          // change the global value of the array above
}

function socksFavorites(pxcomp){
  console.log(pxcomp, "pxcomp object");

  console.log(pxcomp.id, "pxcomp id object");
      
      let getStoredFavorite = JSON.parse(localStorage.getItem(pxcomp.id));
      console.log(getStoredFavorite, "retrieved cart item from local storage");
      // retrieve the stored favorite item
  
      pxcompFavoritesArray.push(getStoredFavorite);
       console.log(pxcompFavoritesArray, "local storage array with favorite item");
          // add the item to the cart array
        
        localStorage.setItem("Socks Favorites", JSON.stringify(pxcompFavoritesArray))
          // push the cartArray to local storage
  
        let getFavorites = JSON.parse(localStorage.getItem("Socks Favorites"));
        console.log(getFavorites, "local storage favorite array");
          // retrieve the stored array to check the values
          document.getElementById('pxCompItemSectionJS').innerHTML = "";
          // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
          let favoritesLocation = document.querySelector('#pxCompItemSectionJS');
          // document.getElementById('pxcompItemSectionJS').innerHTML = getFavorites;
  
          // set the location where the favorite should show in the new configuration
  
// This will replace the +cart button in the below function
//            <a class="pxcompClick btn-small btn btn-primary" onclick="pxcompCartItem(${component.valAssign}); pxcompParChoice()" > + Cart </a>


getFavorites.forEach(component => {    
  favoritesLocation.innerHTML = favoritesLocation.innerHTML +
  `<div class="card favorites card-margin" id="${component.valAssign}favorite">

  <a class="pxcompClick btn-small btn btn-primary" onclick="socksParChoice(${component.valAssign})" > + Cart </a>
  <img class="card-image" src="${component.image}"></img>

  <div class="card-header">
      <h4 id=""> ${component.name} Hole: ${component.HoleSelection ? 'Yes' : 'No'} </h4>
      <a class="pxcompClick btn btn-primary" onclick="removeSocksFavorites(${component.valAssign})" > Remove Favorite </a>
      <div id="">HD Code: ${component.hdcode}</div>
      </div>
  </div>
</div>`;
console.log("Created", component.card, "Cards");
});
          


          pxcompFavoritesArray = getFavorites;

          console.log(pxcompFavoritesArray, "This is the modified global pxcomp favorite array")
          // change the global value of the array above
}




function removepxcompFavorites(item){
  
  console.log(item, "item");
  console.log(item.id, "item.id");
  // console.log(item.manufacturer, "item.manufacturer");

  
  
  // console.log(getfavorite, "getFavorite");
  // // the favorites array to be modified
  // let favoriteSpread = {...getfavorite};
  // console.log(favoriteSpread, "favoriteSpread");
  



// let getfavorite = JSON.parse(localStorage.getItem("getfavorite"));
let getfavorite = JSON.parse(localStorage.getItem("pxcomp Favorites"));
console.log(getfavorite, "getfavorite, the item created from the array item in local storage ");

// let [parts] = JSON.parse(localStorage.getItem("compareArray"));
let parts1 = JSON.parse(localStorage.getItem(item.id));
console.log(parts1, "parts1, the item created from the array item in local storage ");

let parts = JSON.parse(localStorage.getItem(item.id));
console.log(parts, "parts, the item created from the array item in local storage ");

const index = getfavorite.findIndex(pxcomp => pxcomp.valAssign === parts.valAssign);
console.log(index, "console log of index");





  console.log(index, "Using a spread operator to spread the array")


    // retrieve the stored array and check the values
  
  getfavorite.splice(index, 1);
  console.log(getfavorite, "getfavorite Array spliced")
  
  // splice out the item from the favorite array. 
  
  localStorage.setItem("pxcomp Favorites", JSON.stringify(getfavorite));
  
  // push the modified favoriteArray back to local storage
  
  
let showfavorite = JSON.parse(localStorage.getItem("pxcomp Favorites"));
console.log(showfavorite, "local storage favorite array");
// retrieve the favorite array back from local storage

        document.getElementById('pxCompItemSectionJSpxComp').innerHTML = "";
        // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
        let favoritesLocation = document.querySelector('#pxCompItemSectionJSpxComp');
        // document.getElementById('pxcompItemSectionJS').innerHTML = getFavorites;

        // set the location where the favorite should show in the new configuration

        showfavorite.forEach(component => {    
          favoritesLocation.innerHTML = favoritesLocation.innerHTML +
         `<div class="card card-margin" id="${component.valAssign}">
         <a class="kneeClick btn-small btn btn-primary" onclick="pxcompCartItem(${component.valAssign})" > + Cart </a>
         <img class="card-image" src="${component.image}"></img>

            <div class="card-header">
                <h4 id=""> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="removepxcompFavorites(${component.valAssign})"> Remove Favorite </a>
                ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
                </div>
            </div>
        </div>`;
        console.log("Created", component.card, "Cards");
        
        });

        pxcompFavoritesArray = showfavorite;
}

function removeSocksFavorites(item){
  
  console.log(item, "item");
  console.log(item.id, "item.id");
  // console.log(item.manufacturer, "item.manufacturer");

  
  
  // console.log(getfavorite, "getFavorite");
  // // the favorites array to be modified
  // let favoriteSpread = {...getfavorite};
  // console.log(favoriteSpread, "favoriteSpread");
  



// let getfavorite = JSON.parse(localStorage.getItem("getfavorite"));
let getfavorite = JSON.parse(localStorage.getItem("Socks Favorites"));
console.log(getfavorite, "getfavorite, the item created from the array item in local storage ");

// let [parts] = JSON.parse(localStorage.getItem("compareArray"));
let parts1 = JSON.parse(localStorage.getItem(item.id));
console.log(parts1, "parts1, the item created from the array item in local storage ");

let parts = JSON.parse(localStorage.getItem(item.id));
console.log(parts, "parts, the item created from the array item in local storage ");

const index = getfavorite.findIndex(pxcomp => pxcomp.valAssign === parts.valAssign);
console.log(index, "console log of index");





  console.log(index, "Using a spread operator to spread the array")


    // retrieve the stored array and check the values
  
  getfavorite.splice(index, 1);
  console.log(getfavorite, "getfavorite Array spliced")
  
  // splice out the item from the favorite array. 
  
  localStorage.setItem("Socks Favorites", JSON.stringify(getfavorite));
  
  // push the modified favoriteArray back to local storage
  
  
let showfavorite = JSON.parse(localStorage.getItem("Socks Favorites"));
console.log(showfavorite, "local storage favorite array");
// retrieve the favorite array back from local storage

        document.getElementById('pxCompItemSectionJS').innerHTML = "";
        // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
        let favoritesLocation = document.querySelector('#pxcompItemSectionJS');
        // document.getElementById('pxcompItemSectionJS').innerHTML = getFavorites;

        // set the location where the favorite should show in the new configuration

        showfavorite.forEach(component => {    
          favoritesLocation.innerHTML = favoritesLocation.innerHTML +
         `<div class="card card-margin" id="${component.valAssign}">
         <a class="kneeClick btn-small btn btn-primary" onclick="pxcompCartItem(${component.valAssign})" > + Cart </a>
         <img class="card-image" src="${component.image}"></img>

            <div class="card-header">
                <h4 id=""> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="removepxcompFavorites(${component.valAssign})"> Remove Favorite </a>
                ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
                </div>
            </div>
        </div>`;
        console.log("Created", component.card, "Cards");
        
        });

        pxcompFavoritesArray = showfavorite;
}







function pxcompParChoice(choose){
console.log(choose, "choose parameter");
console.log(choose.id, "choose id")

  let getStoredFavorite = JSON.parse(localStorage.getItem(choose.id));
  console.log(getStoredFavorite, "retrieved pxcomp item from local storage");
  // retrieve the stored favorite item
  let pxcompChoiceComponent = [getStoredFavorite];
  console.log(pxcompChoiceComponent, "pxcomp Choice Component Array");

  let pxcompParLocation = document.getElementById("itemSelectorModal");

  pxcompChoiceComponent.forEach(component => {   

    pxcompParLocation.innerHTML = pxcompParLocation.innerHTML +
       `
       <div id="itemModal">
       <div id="itemHeader">
<img id="itemPhoto" src="${component.image}">
</div>
<form id="itemForm">                
<label id="labItemQuantity" for="itemQuantity">Quantity:</label>
<div class="parButton" id="itemCounter">
  <!-- <button type="button" id="itemMinus">-</button> -->
  <input type="number" id="itemQuantity" min="1" max="100" value="0">
  <!-- <button type="button" id="itemPlus">+</button> -->

</div>
<button onclick="hidepxcompSelector()" type="button" class="btn-secondary" id="removeParSelector">Cancel</button> 

<button onclick="pxcompCartItem(${component.valAssign}favorite); addpxcompQuantity(); hidepxcompSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button> 

</form>
<div id="itemQuantityOutput"></div>
<div id="itemSizeOutput"></div>
<div id="itemProfileOutput"></div>
</div>

`
       ;
      console.log("Choosing pxcomp Parameters Successful");
      
      });


}

function socksParChoice(choose){
  console.log(choose, "choose parameter");
  console.log(choose.id, "choose id")
  
    let getStoredFavorite = JSON.parse(localStorage.getItem(choose.id));
    console.log(getStoredFavorite, "retrieved pxcomp item from local storage");
    // retrieve the stored favorite item
    let pxcompChoiceComponent = [getStoredFavorite];
    console.log(pxcompChoiceComponent, "pxcomp Choice Component Array");
  
    let pxcompParLocation = document.getElementById("itemSelectorModal");
  
    pxcompChoiceComponent.forEach(component => {   
  
      pxcompParLocation.innerHTML = pxcompParLocation.innerHTML +
         `
         <div id="itemModal">
         <div id="itemHeader">
  <img id="itemPhoto" src="${component.image}">
  </div>
  <form id="itemForm">                
  <label id="labItemProfile" for="itemProfile">Length:</label>
  <select class="parButton" id="itemProfile">
    <option value=""></option>
    <option value="Extra-Short">Extra-Short</option>
    <option value="Short">Short</option>
    <option value="Regular">Regular</option>
    <option value="Long">Long</option>

    
  </select>
  <label id="labItemSize" for="itemSize">Width:</label>
  <select class="parButton" id="itemSize">
    <option value=""></option>
    <option value="Narrow">Narrow</option>
    <option value="Medium">Medium</option>
    <option value="Wide">Wide</option>
    <option value="Extra-Wide">Extra-Wide</option>
  </select>
  
  <label id="labItemQuantity" for="itemQuantity">Quantity:</label>
  <div class="parButton" id="itemCounter">
    <!-- <button type="button" id="itemMinus">-</button> -->
    <input type="number" id="itemQuantity" min="1" max="100" value="0">
    <!-- <button type="button" id="itemPlus">+</button> -->
  </div>
  <button onclick="hidepxcompSelector()" type="button" class="btn-secondary" id="removeParSelector">Cancel</button> 
  
  <button onclick="pxcompCartItem(${component.valAssign}favorite); addSocksQuantity(); addSocksWidth(); addSocksLength(); hideSocksSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button> 
  
  </form>
  <div id="itemQuantityOutput"></div>
  <div id="itemSizeOutput"></div>
  <div id="itemProfileOutput"></div>
  </div>
  
  `
         ;
        console.log("Choosing pxcomp Parameters Successful");
        
        });
  
  }





function addpxcompQuantity(){

  let quantity = document.getElementById("itemQuantity");
    
  localStorage.setItem("pxcomp Quantity", JSON.stringify(quantity.value))
    // push the cartArray to local storage

  let getQuantity = JSON.parse(localStorage.getItem("pxcomp Quantity"));
  console.log(getQuantity, "Quantity of pxcomps Stored");
    // retrieve the stored array to check the values
}

function hidepxcompSelector(){
  let myContainer = document.getElementById("itemSelectorModal");
  let itemToRemove = document.getElementById("itemModal");
  myContainer.removeChild(itemToRemove);
}



function addSocksQuantity(){

  let quantity = document.getElementById("itemQuantity");
    
  localStorage.setItem("Socks Quantity", JSON.stringify(quantity.value))
    // push the cartArray to local storage

  let getQuantity = JSON.parse(localStorage.getItem("Socks Quantity"));
  console.log(getQuantity, "Quantity of Socks Stored");
    // retrieve the stored array to check the values
}

function hideSocksSelector(){
  let myContainer = document.getElementById("itemSelectorModal");
  let itemToRemove = document.getElementById("itemModal");
  myContainer.removeChild(itemToRemove);
}


function addSocksLength(){

  let profile = document.getElementById("itemProfile");

  localStorage.setItem("Socks Length", JSON.stringify(profile.value))
    // push the cartArray to local storage

  let getProfile = JSON.parse(localStorage.getItem("Socks Length"));
  console.log(getProfile, "Socks Length Stored");
    // retrieve the stored array to check the values
}

function addSocksWidth(){

  let size = document.getElementById("itemSize");

  localStorage.setItem("Socks Width", JSON.stringify(size.value))
  // push the cartArray to local storage

let getSize = JSON.parse(localStorage.getItem("Socks Width"));
console.log(getSize, "Width of Socks Stored");
  // retrieve the stored array to check the values
}



