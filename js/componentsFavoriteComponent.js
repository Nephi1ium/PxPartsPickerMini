pxcompFavoritesArray = [];
addPxCompArray = [];


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

function sleeveFavorites(pxcomp){
  console.log(pxcomp, "pxcomp object");

  console.log(pxcomp.id, "pxcomp id object");
      
      let getStoredFavorite = JSON.parse(localStorage.getItem(pxcomp.id));
      console.log(getStoredFavorite, "retrieved cart item from local storage");
      // retrieve the stored favorite item
  
      pxcompFavoritesArray.push(getStoredFavorite);
       console.log(pxcompFavoritesArray, "local storage array with favorite item");
          // add the item to the cart array
        
        localStorage.setItem("Sleeve Favorites", JSON.stringify(pxcompFavoritesArray))
          // push the cartArray to local storage
  
        let getFavorites = JSON.parse(localStorage.getItem("Sleeve Favorites"));
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

  <a class="pxcompClick btn-small btn btn-primary" id="sleeveChoice" onclick="createSleeveSelector(${component.array})" > + Cart </a>
  <img class="card-image" src="${component.image}"></img>

  <div class="card-header">
      <a class="pxcompClick btn btn-primary" onclick="removeSleeveFavorites(${component.valAssign})" > Remove Favorite </a>
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

function removeSleeveFavorites(item){
  
  console.log(item, "item");
  console.log(item.id, "item.id");
  // console.log(item.manufacturer, "item.manufacturer");

  
  
  // console.log(getfavorite, "getFavorite");
  // // the favorites array to be modified
  // let favoriteSpread = {...getfavorite};
  // console.log(favoriteSpread, "favoriteSpread");
  



// let getfavorite = JSON.parse(localStorage.getItem("getfavorite"));
let getfavorite = JSON.parse(localStorage.getItem("Sleeve Favorites"));
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
  
  localStorage.setItem("Sleeve Favorites", JSON.stringify(getfavorite));
  
  // push the modified favoriteArray back to local storage
  
  
let showfavorite = JSON.parse(localStorage.getItem("Sleeve Favorites"));
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

<button onclick="pxcompCartItem(${component.valAssign}favorite); addpxcompQuantity(${component.valAssign}); addPxComp(${component.valAssign}); hidepxcompSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button> 

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

// function sleeveParChoice(choose){
//   console.log(choose, "choose parameter");
//   console.log(choose.id, "choose id")
  
//     let getStoredFavorite = JSON.parse(localStorage.getItem(choose.id));
//     console.log(getStoredFavorite, "retrieved pxcomp item from local storage");
//     // retrieve the stored favorite item
//     let pxcompChoiceComponent = [getStoredFavorite];
//     console.log(pxcompChoiceComponent, "pxcomp Choice Component Array");
  
//     let pxcompParLocation = document.getElementById("itemSelectorModal");
  
//     pxcompChoiceComponent.forEach(component => {   
  
//       pxcompParLocation.innerHTML = pxcompParLocation.innerHTML +
//          `
//          <div id="itemModal">
//          <div id="itemHeader">
//   <img id="itemPhoto" src="${component.image}">
//   </div>
//   <form id="itemForm">                
//   <label id="labItemQuantity" for="itemQuantity">Quantity:</label>
//   <div class="parButton" id="itemCounter">
//     <!-- <button type="button" id="itemMinus">-</button> -->
//     <input type="number" id="itemQuantity" min="1" max="100" value="0">
//     <!-- <button type="button" id="itemPlus">+</button> -->
  
//   </div>
//   <button onclick="hidepxcompSelector()" type="button" class="btn-secondary" id="removeParSelector">Cancel</button> 
  
//   <button onclick="pxcompCartItem(${component.valAssign}favorite); addpxcompQuantity(${component.valAssign}); addPxComp(${component.valAssign}); hidepxcompSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button> 
  
//   </form>
//   <div id="itemQuantityOutput"></div>
//   <div id="itemSizeOutput"></div>
//   <div id="itemProfileOutput"></div>
//   </div>
  
//   `
//          ;
//         console.log("Choosing pxcomp Parameters Successful");
        
//         });
  
  
//   }

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





function addpxcompQuantity(item){

  console.log(item.id, "item id");
  console.log(item.id + "CompChoice", "item id");

  let quantity = document.getElementById("itemQuantity");
  console.log(quantity.value, "quantity.value");

  localStorage.setItem(item.id + "CompChoice", JSON.stringify(quantity.value))
    // push the cartArray to local storage

  let getQuantity = JSON.parse(localStorage.getItem(item.id + "CompChoice"));
  console.log(getQuantity, "Quantity of pxcomps Stored");
    // retrieve the stored array to check the values
}
// my problem now is that I have a unique item in the local storage and I still dont have a way to access it to add to the PDF...I could add all of the pxcomp items 
// to an array, and just have the entire array be printed to the place for the items. I would need to remove the CompChoice from the unique identifier, find the 
// stored item and print only the needed items.  


function addPxComp(item){

  console.log(item, "addPxComp item parameter");
  console.log(item.id, "addPxComp item id")
  
    let getStoredFavorite = JSON.parse(localStorage.getItem(item.id));
    console.log(getStoredFavorite, "retrieved pxcomp item from local storage");
    // retrieve the stored favorite item
    addPxCompArray.push(getStoredFavorite);

    console.log(addPxCompArray, "local storage array with favorite item");
       // add the item to the cart array
     
     localStorage.setItem("PxComp Items", JSON.stringify(addPxCompArray))
       // push the cartArray to local storage
       let checkArray = JSON.parse(localStorage.getItem("PxComp Items"));
       // push the cartArray to local storage
       console.log(checkArray, "retrieved checkArray item from local storage");

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




function addSleeveQuantity(){

  let quantity = document.getElementById("itemQuantity");
    
  localStorage.setItem("Sleeve Quantity", JSON.stringify(quantity.value))
    // push the cartArray to local storage

  let getQuantity = JSON.parse(localStorage.getItem("Sleeve Quantity"));
  console.log(getQuantity, "Quantity of Sleeves Stored");
    // retrieve the stored array to check the values
}

function addSleeveProfile(){

  let profile = document.getElementById("itemProfile");

  localStorage.setItem("Sleeve Profile", JSON.stringify(profile.value))
    // push the cartArray to local storage

  let getProfile = JSON.parse(localStorage.getItem("Sleeve Profile"));
  console.log(getProfile, "Profile of Sleeves Stored");
    // retrieve the stored array to check the values
}

function addSleeveSize(){

  let size = document.getElementById("itemSize");

  localStorage.setItem("Sleeve Size", JSON.stringify(size.value))
  // push the cartArray to local storage

let getSize = JSON.parse(localStorage.getItem("Sleeve Size"));
console.log(getSize, "Size of Sleeves Stored");
  // retrieve the stored array to check the values
}

function hideSleeveSelector(){
  let myContainer = document.getElementById("itemSelectorModal");
  let itemToRemove = document.getElementById("itemModal");
  myContainer.removeChild(itemToRemove);
}
 function addSleeveColor(){

  let color = document.getElementById("itemColor");

  localStorage.setItem("Sleeve Color", JSON.stringify(color.value))
  // push the cartArray to local storage

let getColor = JSON.parse(localStorage.getItem("Sleeve Color"));
console.log(getColor, "Color of Sleeves Stored");
  // retrieve the stored array to check the values//   let color = document.getElementById("itemColor");


//   localStorage.setItem("Sleeve Quantity", JSON.stringify(quantity.value))
//   // push the cartArray to local storage

// let getQuantity = JSON.parse(localStorage.getItem("Sleeve Quantity"));
// console.log(getQuantity, "Quantity of Sleeves Stored");
//   // retrieve the stored array to check the values
 }












function createSleeveSelector(array) {

  let pxcompParLocation = document.getElementById("itemSelectorModal");



  let html = '<div id="itemModal">\
                 <div id="itemHeader">\
                   <img id="itemPhoto" src="' + array[0].image + '">\
                 </div>\
                 <form id="itemForm">\
                   <label id="labItemProfile" for="itemProfile">Width:</label>\
                   <select class="parButton" id="itemProfile">\
                     <option value=""></option>\
                     <option value="wide">Wide</option>\
                     <option value="narrow">Narrow</option>\
                   </select>\
                   <label id="labItemSide" for="itemSide">Side:</label>\
                   <select class="parButton" id="itemSide">\
                     <option value=""></option>\
                     <option value="Right">Right</option>\
                     <option value="Left">Left</option>\
                   </select>\
                   <label id="labItemSize" for="itemSize">Size:</label>\
                   <select class="parButton" id="itemSize">\
                     <option value=""></option>';
  for (let i = 0; i < 3; i++) {
    html += '<option value="' + array[i].size + '">' + array[i].size + '</option>';
  }
  html += '</select>\
           <label id="labItemColor" for="itemColor">Color</label>\
           <select class="parButton" id="itemColor">\
             <option value=""></option>';
  let colors = new Set();
  for (let i = 0; i < 3; i++) {
    colors.add(flexSleeve[i].color);
  }
  for (let color of colors) {
    html += '<option value="' + color + '">' + color + '</option>';
  }
  html += `</select>
           <label id="labItemQuantity" for="itemQuantity">Quantity:</label>
           <div class="parButton" id="itemCounter">
             <input type="number" id="itemQuantity" min="1" max="100" value="0">
           </div>
           <button onclick="hideSleeveSelector()" type="button" class="btn-secondary" id="removeParSelector">Cancel</button>
           <button onclick="sleeveCartItem(${array[0].valAssign}); addSleeveQuantity(); addSleeveSide(); addSleeveProfile(); addSleeveSize(); addSleeveColor(); hideSleeveSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button>
         </form>
         <div id="itemQuantityOutput"></div>
         <div id="itemSizeOutput"></div>
         <div id="itemProfileOutput"></div>
       </div>`;

       pxcompParLocation.innerHTML = pxcompParLocation.innerHTML + html;
}



const flexSleeve = [
  {  "lcode":"L5685", "lcode":"L5685", "image": "../images/components/AlpsFlexSleeve.jpg", "material": "", "hdCode":" ", "valAssign":"F32034G","name":"ALPS Flex Sleeve", "size":"3mm/20-34 cm", "color":"Gray"},
{  "lcode":"L5685", "image": "../images/components/AlpsFlexSleeve.jpg", "material": "", "hdCode":" ", "valAssign":"F33140G","name":"ALPS Flex Sleeve", "size":"3mm/31-40 cm", "color":"Gray"},
{  "lcode":"L5685", "image": "../images/components/AlpsFlexSleeve.jpg", "material": "", "hdCode":" ", "valAssign":"F33560G","name":"ALPS Flex Sleeve", "size":"3mm/35-60 cm", "color":"Gray"},
{  "lcode":"L5685", "image": "../images/components/AlpsFlexSleeve.jpg", "material": "", "hdCode":" ", "valAssign":"F32034B","name":"ALPS Flex Sleeve", "size":"3mm/20-34 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsFlexSleeve.jpg", "material": "", "hdCode":" ", "valAssign":"F33140B","name":"ALPS Flex Sleeve", "size":"3mm/31-40 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsFlexSleeve.jpg", "material": "", "hdCode":" ", "valAssign":"F33560B","name":"ALPS Flex Sleeve", "size":"3mm/35-60 cm", "color":"Beige"},
  
]


const gripGel = [
  {  "lcode":"L5685", "image": "../images/components/AlpsGripGel.jpg", "material": "", "hdCode":" ", "valAssign":"G22530","name":"ALPS Gripgel", "size":"2mm/25-30 cm", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/AlpsGripGel.jpg", "material": "", "hdCode":" ", "valAssign":"G23134","name":"ALPS Gripgel", "size":"2mm/31-34 cm", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/AlpsGripGel.jpg", "material": "", "hdCode":" ", "valAssign":"G23537","name":"ALPS Gripgel", "size":"2mm/35-37 cm", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/AlpsGripGel.jpg", "material": "", "hdCode":" ", "valAssign":"G23840","name":"ALPS Gripgel", "size":"2mm/38-40 cm", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/AlpsGripGel.jpg", "material": "", "hdCode":" ", "valAssign":"G24145","name":"ALPS Gripgel", "size":"2mm/41-45 cm", "color":"Black"},

]

const extreme = [

  {  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E32024","name":"ALPS Extreme", "size":"3mm/20-24 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E32530","name":"ALPS Extreme", "size":"3mm/25-30 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E33134","name":"ALPS Extreme", "size":"3mm/31-34 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E33537","name":"ALPS Extreme", "size":"3mm/35-37 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E33840","name":"ALPS Extreme", "size":"3mm/38-40 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E34145","name":"ALPS Extreme", "size":"3mm/41-45 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E34660","name":"ALPS Extreme", "size":"3mm/46-60 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E36170","name":"ALPS Extreme", "size":"3mm/61-70 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E62024","name":"ALPS Extreme", "size":"6mm/20-24 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E62530","name":"ALPS Extreme", "size":"6mm/25-30 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E63134","name":"ALPS Extreme", "size":"6mm/31-34 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E63537","name":"ALPS Extreme", "size":"6mm/35-37 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E63840","name":"ALPS Extreme", "size":"6mm/38-40 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E64145","name":"ALPS Extreme", "size":"6mm/41-45 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E64660","name":"ALPS Extreme", "size":"6mm/46-60 cm", "color":"Brown"},
{  "lcode":"L5685", "image": "../images/components/AlpsExtreme.jpg", "material": "", "hdCode":" ", "valAssign":"E66170","name":"ALPS Extreme", "size":"6mm/61-70 cm", "color":"Brown"},


]

const easy = [

  {  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES32024","name":"ALPS EasySleeve", "size":"3mm/20-24 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES32530","name":"ALPS EasySleeve", "size":"3mm/25-30 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES33134","name":"ALPS EasySleeve", "size":"3mm/31-34 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES33537","name":"ALPS EasySleeve", "size":"3mm/35-37 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES33840","name":"ALPS EasySleeve", "size":"3mm/38-40 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES34145","name":"ALPS EasySleeve", "size":"3mm/41-45 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES34660","name":"ALPS EasySleeve", "size":"3mm/46-60 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES36170","name":"ALPS EasySleeve", "size":"3mm/61-70 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES62024","name":"ALPS EasySleeve", "size":"6mm/20-24 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES62530","name":"ALPS EasySleeve", "size":"6mm/25-30 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES63134","name":"ALPS EasySleeve", "size":"6mm/31-34 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES63537","name":"ALPS EasySleeve", "size":"6mm/35-37 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES63840","name":"ALPS EasySleeve", "size":"6mm/38-40 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES64145","name":"ALPS EasySleeve", "size":"6mm/41-45 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES64660","name":"ALPS EasySleeve", "size":"6mm/46-60 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasy.jpg", "material": "", "hdCode":" ", "valAssign":"ES66170","name":"ALPS EasySleeve", "size":"6mm/61-70 cm", "color":"Beige"},


]

const easyStretch = [
  {  "lcode":"L5685", "image": "../images/components/AlpsEasyStretch.jpg", "material": "", "hdCode":" ", "valAssign":"ESS62024G","name":"ALPS EasySleeve Stretch", "size":"6mm/20-24 cm", "color":"Gray"},
  {  "lcode":"L5685", "image": "../images/components/AlpsEasyStretch.jpg", "material": "", "hdCode":" ", "valAssign":"ESS62530G","name":"ALPS EasySleeve Stretch", "size":"6mm/25-30 cm", "color":"Gray"},
  {  "lcode":"L5685", "image": "../images/components/AlpsEasyStretch.jpg", "material": "", "hdCode":" ", "valAssign":"ESS3134G","name":"ALPS EasySleeve Stretch", "size":"6mm/31-34 cm", "color":"Gray"},
  {  "lcode":"L5685", "image": "../images/components/AlpsEasyStretch.jpg", "material": "", "hdCode":" ", "valAssign":"ESS3537G","name":"ALPS EasySleeve Stretch", "size":"6mm/35-37 cm", "color":"Gray"},
  {  "lcode":"L5685", "image": "../images/components/AlpsEasyStretch.jpg", "material": "", "hdCode":" ", "valAssign":"ESS3840G","name":"ALPS EasySleeve Stretch", "size":"6mm/38-40 cm", "color":"Gray"},
  {  "lcode":"L5685", "image": "../images/components/AlpsEasyStretch.jpg", "material": "", "hdCode":" ", "valAssign":"ESS4145G","name":"ALPS EasySleeve Stretch", "size":"6mm/41-45 cm", "color":"Gray"},
  {  "lcode":"L5685", "image": "../images/components/AlpsEasyStretch.jpg", "material": "", "hdCode":" ", "valAssign":"ESST2024","name":"ALPS EasySleeve Sticky", "size":"3mm/20-24 cm", "color":"Beige"},
  

]

const easySticky = [


  {  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST32530","name":"ALPS EasySleeve Sticky", "size":"3mm/25-30 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST33134","name":"ALPS EasySleeve Sticky", "size":"3mm/31-34 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST33537","name":"ALPS EasySleeve Sticky", "size":"3mm/35-37 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST33840","name":"ALPS EasySleeve Sticky", "size":"3mm/38-40 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST34145","name":"ALPS EasySleeve Sticky", "size":"3mm/41-45 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST34660","name":"ALPS EasySleeve Sticky", "size":"3mm/46-60 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST36170","name":"ALPS EasySleeve Sticky", "size":"3mm/61-70 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST62024","name":"ALPS EasySleeve Sticky", "size":"6mm/20-24 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST62530","name":"ALPS EasySleeve Sticky", "size":"6mm/25-30 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST63134","name":"ALPS EasySleeve Sticky", "size":"6mm/31-34 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST63537","name":"ALPS EasySleeve Sticky", "size":"6mm/35-37 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST63840","name":"ALPS EasySleeve Sticky", "size":"6mm/38-40 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST64145","name":"ALPS EasySleeve Sticky", "size":"6mm/41-45 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST64660","name":"ALPS EasySleeve Sticky", "size":"6mm/46-60 cm", "color":"Beige"},
{  "lcode":"L5685", "image": "../images/components/AlpsEasySticky.jpg", "material": "", "hdCode":" ", "valAssign":"ESST66170","name":"ALPS EasySleeve Sticky", "size":"6mm/61-70 cm", "color":"Beige"},

]

const proFlex = [
  {  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS1T","name":"Ottobock ProFlex", "size":"Short Size 1", "color":"Tan"},
{  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS2T","name":"Ottobock ProFlex", "size":"Short Size 2", "color":"Tan"},
{  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS3T","name":"Ottobock ProFlex", "size":"Short Size 3", "color":"Tan"},
{  "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR1T","name":"Ottobock ProFlex", "size":"Regular Size 1", "color":"Tan"},
{  "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR2T","name":"Ottobock ProFlex", "size":"Regular Size 2", "color":"Tan"},
{  "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR3T","name":"Ottobock ProFlex", "size":"Regular Size 3", "color":"Tan"},
{  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS1B","name":"Ottobock ProFlex", "size":"Short Size 1", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS2B","name":"Ottobock ProFlex", "size":"Short Size 2", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS3B","name":"Ottobock ProFlex", "size":"Short Size 3", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR1B","name":"Ottobock ProFlex", "size":"Regular Size 1", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR2B","name":"Ottobock ProFlex", "size":"Regular Size 2", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR3B","name":"Ottobock ProFlex", "size":"Regular Size 3", "color":"Black"},
{  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS1G","name":"Ottobock ProFlex", "size":"Short Size 1", "color":"Gray"},
{  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS2G","name":"Ottobock ProFlex", "size":"Short Size 2", "color":"Gray"},
{  "lcode":"L5685", "image": "../images/components/OBProflexShort.jpg", "material": "", "hdCode":" ", "valAssign":"PROS3G","name":"Ottobock ProFlex", "size":"Short Size 3", "color":"Gray"},
{  "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR1G","name":"Ottobock ProFlex", "size":"Regular Size 1", "color":"Gray"},
{  "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR2G","name":"Ottobock ProFlex", "size":"Regular Size 2", "color":"Gray"},
{  "lcode":"L5685", "lcode":"L5685", "image": "../images/components/OBProflexLong.jpg", "material": "", "hdCode":" ", "valAssign":"PROR3G","name":"Ottobock ProFlex", "size":"Regular Size 3", "color":"Gray"},

]
