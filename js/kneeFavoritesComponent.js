
    kneeFavoritesArray = [];

  function kneeFavorites(keyed){


console.log(keyed.id, "keyed object");
    
    let getStoredFavorite = JSON.parse(localStorage.getItem(keyed.id));
    console.log(getStoredFavorite, "retrieved cart item from local storage");
    // retrieve the stored favorite item


    // push an array to the local storage


    //retrieve that same array from local storage

    kneeFavoritesArray.push(getStoredFavorite);
     console.log(kneeFavoritesArray, "local storage array with favorite item");
        // add the item to the array pulled from local storage
      
      localStorage.setItem("Knee Favorites", JSON.stringify(kneeFavoritesArray))
        // push the cartArray to local storage

      let getFavorites = JSON.parse(localStorage.getItem("Knee Favorites"));
      console.log(getFavorites, "local storage favorite array");
        // retrieve the stored array to check the values
        document.getElementById('kneeItemSectionJS').innerHTML = "";
        // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
        let favoritesLocation = document.querySelector('#kneeItemSectionJS');
        // document.getElementById('kneeItemSectionJS').innerHTML = getFavorites;

        // set the location where the favorite should show in the new configuration

        getFavorites.forEach(component => {    
          favoritesLocation.innerHTML = favoritesLocation.innerHTML +
         `<div class="card favorites card-margin" id="${component.valAssign}favorite">
         <img class="card-image" src="${component.image}"></img>

            <div class="card-header">
                <h4 id=""> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="removeKneeFavorites(${component.valAssign})" > Remove Favorite </a>
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


        kneeFavoritesArray = getFavorites;

        console.log(kneeFavoritesArray, "This is the modified global knee favorite array")
        // change the global value of the array above
}

  




function showFavorites(){

      // let getFavorites = JSON.parse(localStorage.getItem("Favorites"));
      // console.log(getFavorites, "local storage favorite array");
      //   // retrieve the stored array to check the values
      //   let favoritesLocation = document.querySelector('#kneeItemSectionJS');
      //   // document.getElementById('kneeItemSectionJS').innerHTML = getFavorites;

      //   // set the location where the favorite should show in the new configuration

      //   getFavorites.forEach(component => {    
      //     favoritesLocation.innerHTML = favoritesLocation.innerHTML +
      //    `<div class="card card-margin" id="${component.valAssign}">
      //    <a class="footClick btn-small btn btn-primary" onclick="cart(${component.valAssign}, ${component.valAssign})" > + Cart </a>
      //    <img class="card-image" src="${component.image}"></img>

      //       <div class="card-header">
      //           <h4 id=""> ${component.name} </h4>
      //           <a class="footClick btn btn-primary" onclick="removeFavorites(${component.valAssign}, ${component.valAssign})" > Remove Favorite (not working) </a>
      //           <div id="">HD Code: ${component.hdcode}</div>
      //           </div>
      //       </div>
      //   </div>`;
      //   console.log("Created", component.card, "Cards");
        
      //   });



      

 }

// window.addEventListener('load', showFavorites());


function removeKneeFavorites(item){
  
  console.log(item, "item");
  console.log(item.id, "item.id");
  // console.log(item.manufacturer, "item.manufacturer");

  
  
  // console.log(getfavorite, "getFavorite");
  // // the favorites array to be modified
  // let favoriteSpread = {...getfavorite};
  // console.log(favoriteSpread, "favoriteSpread");
  



// let getfavorite = JSON.parse(localStorage.getItem("getfavorite"));
let getfavorite = JSON.parse(localStorage.getItem("Knee Favorites"));
console.log(getfavorite, "getfavorite, the item created from the array item in local storage ");

// let [parts] = JSON.parse(localStorage.getItem("compareArray"));
let parts1 = JSON.parse(localStorage.getItem(item.id));
console.log(parts1, "parts1, the item created from the array item in local storage ");

let parts = JSON.parse(localStorage.getItem(item.id));
console.log(parts, "parts, the item created from the array item in local storage ");

const index = getfavorite.findIndex(knee => knee.valAssign === parts.valAssign);
console.log(index, "console log of index");





  console.log(index, "Using a spread operator to spread the array")


    // retrieve the stored array and check the values
  
  getfavorite.splice(index, 1);
  console.log(getfavorite, "getfavorite Array spliced")
  
  // splice out the item from the favorite array. 
  
  localStorage.setItem("Knee Favorites", JSON.stringify(getfavorite));
  
  // push the modified favoriteArray back to local storage
  
  
let showfavorite = JSON.parse(localStorage.getItem("Knee Favorites"));
console.log(showfavorite, "local storage favorite array");
// retrieve the favorite array back from local storage

        document.getElementById('kneeItemSectionJS').innerHTML = "";
        // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
        let favoritesLocation = document.querySelector('#kneeItemSectionJS');
        // document.getElementById('kneeItemSectionJS').innerHTML = getFavorites;

        // set the location where the favorite should show in the new configuration

        showfavorite.forEach(component => {    
          favoritesLocation.innerHTML = favoritesLocation.innerHTML +
         `<div class="card card-margin" id="${component.valAssign}">
         <a class="kneeClick btn-small btn btn-primary" onclick="kneeCartItem(${component.valAssign})" > + Cart </a>
         <img class="card-image" src="${component.image}"></img>

            <div class="card-header">
                <h4 id=""> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="removeKneeFavorites(${component.valAssign})" > Remove Favorite </a>
                <div id="">HD Code: ${component.hdcode}</div>
                </div>
            </div>
        </div>`;
        console.log("Created", component.card, "Cards");
        
        });

        kneeFavoritesArray = showfavorite;
}

function kneeParChoice(choose){
  console.log(choose, "choose parameter");
  console.log(choose.id, "choose id")
  
    let getStoredFavorite = JSON.parse(localStorage.getItem(choose.id));
    console.log(getStoredFavorite, "retrieved knee item from local storage");
    // retrieve the stored favorite item
    let kneeChoiceComponent = [getStoredFavorite];
    console.log(kneeChoiceComponent, "Knee Choice Component Array");
  
    let kneeParLocation = document.getElementById("itemSelectorModal");
  
    kneeChoiceComponent.forEach(component => {   
  
      kneeParLocation.innerHTML = kneeParLocation.innerHTML +
         `
  <div id="itemModal">
         <div id="itemHeader">
  <img id="itemPhoto" src="${component.image}">
  </div>
  <form id="itemForm">
  <label id="labItemQuantity" for="itemQuantity">Quantity:</label>
  <div id="itemCounter">
    <!-- <button type="button" id="itemMinus">-</button> -->
    <input type="number" id="itemQuantity" min="1" max="100" value="0">
    <!-- <button type="button" id="itemPlus">+</button> -->
  
  </div>
  <button onclick="addKneeQuantity(); hideKneeSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button> 
  
  </form>
  <div id="itemQuantityOutput"></div>
  <div id="itemSizeOutput"></div>
  <div id="itemProfileOutput"></div>
  </div>
  
  `
         ;
        console.log("Choosing Knee Parameters Successful");
        
        });
  
  
  
  
  }



  function addKneeQuantity(){
  
    let quantity = document.getElementById("itemQuantity");
      
    localStorage.setItem("Knee Quantity", JSON.stringify(quantity.value))
      // push the cartArray to local storage
  
    let getQuantity = JSON.parse(localStorage.getItem("Knee Quantity"));
    console.log(getQuantity, "Quantity of Knees Stored");
      // retrieve the stored array to check the values
  }
  
  

  function hideKneeSelector(){
    let myContainer = document.getElementById("itemSelectorModal");
    let itemToRemove = document.getElementById("itemModal");
    myContainer.removeChild(itemToRemove);
  }










