
















footFavoritesArray = [];

function footFavorites(foot){
  console.log(foot, "foot object");

  console.log(foot.id, "foot id object");
      
      let getStoredFavorite = JSON.parse(localStorage.getItem(foot.id));
      console.log(getStoredFavorite, "retrieved cart item from local storage");
      // retrieve the stored favorite item
  
      footFavoritesArray.push(getStoredFavorite);
       console.log(footFavoritesArray, "local storage array with favorite item");
          // add the item to the cart array
        
        localStorage.setItem("Foot Favorites", JSON.stringify(footFavoritesArray))
          // push the cartArray to local storage
  
        let getFavorites = JSON.parse(localStorage.getItem("Foot Favorites"));
        console.log(getFavorites, "local storage favorite array");
          // retrieve the stored array to check the values
          document.getElementById('footItemSectionJS').innerHTML = "";
          // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
          let favoritesLocation = document.querySelector('#footItemSectionJS');
          // document.getElementById('footItemSectionJS').innerHTML = getFavorites;
  
          // set the location where the favorite should show in the new configuration
  
// This will replace the +cart button in the below function
//            <a class="footClick btn-small btn btn-primary" onclick="footCartItem(${component.valAssign}); footParChoice()" > + Cart </a>


getFavorites.forEach(component => {    
  favoritesLocation.innerHTML = favoritesLocation.innerHTML +
  `<div class="card favorites card-margin" id="${component.valAssign}favorite">

  ${ component.lcode1 ? `<a class="footClick btn-small btn btn-primary" onclick="footParChoice(${component.valAssign})" > + Cart </a>` : ''}
  <img class="card-image" src="${component.image}"></img>

  <div class="card-header">
      <h4 id=""> ${component.name} </h4>
      <a class="footClick btn btn-primary" onclick="removeFeetFavorites(${component.valAssign})" > Remove Favorite </a>
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
          


          footFavoritesArray = getFavorites;

          console.log(footFavoritesArray, "This is the modified global foot favorite array")
          // change the global value of the array above
}

function showFavorites(){
}


function removeFeetFavorites(item){
  
  console.log(item, "item");
  console.log(item.id, "item.id");
  // console.log(item.manufacturer, "item.manufacturer");

  
  
  // console.log(getfavorite, "getFavorite");
  // // the favorites array to be modified
  // let favoriteSpread = {...getfavorite};
  // console.log(favoriteSpread, "favoriteSpread");
  



// let getfavorite = JSON.parse(localStorage.getItem("getfavorite"));
let getfavorite = JSON.parse(localStorage.getItem("Foot Favorites"));
console.log(getfavorite, "getfavorite, the item created from the array item in local storage ");

// let [parts] = JSON.parse(localStorage.getItem("compareArray"));
let parts1 = JSON.parse(localStorage.getItem(item.id));
console.log(parts1, "parts1, the item created from the array item in local storage ");

let parts = JSON.parse(localStorage.getItem(item.id));
console.log(parts, "parts, the item created from the array item in local storage ");

const index = getfavorite.findIndex(foot => foot.valAssign === parts.valAssign);
console.log(index, "console log of index");





  console.log(index, "Using a spread operator to spread the array")


    // retrieve the stored array and check the values
  
  getfavorite.splice(index, 1);
  console.log(getfavorite, "getfavorite Array spliced")
  
  // splice out the item from the favorite array. 
  
  localStorage.setItem("Foot Favorites", JSON.stringify(getfavorite));
  
  // push the modified favoriteArray back to local storage
  
  
let showfavorite = JSON.parse(localStorage.getItem("Foot Favorites"));
console.log(showfavorite, "local storage favorite array");
// retrieve the favorite array back from local storage

        document.getElementById('footItemSectionJS').innerHTML = "";
        // clear the favorites viewport so the older items are removed, and redisplayed as a new one is added
        let favoritesLocation = document.querySelector('#footItemSectionJS');
        // document.getElementById('footItemSectionJS').innerHTML = getFavorites;

        // set the location where the favorite should show in the new configuration

        showfavorite.forEach(component => {    
          favoritesLocation.innerHTML = favoritesLocation.innerHTML +
         `<div class="card card-margin" id="${component.valAssign}">
         <a class="kneeClick btn-small btn btn-primary" onclick="footCartItem(${component.valAssign})" > + Cart </a>
         <img class="card-image" src="${component.image}"></img>

            <div class="card-header">
                <h4 id=""> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="removeFeetFavorites(${component.valAssign})"> Remove Favorite </a>
                ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
                </div>
            </div>
        </div>`;
        console.log("Created", component.card, "Cards");
        
        });

        footFavoritesArray = showfavorite;
}







function footParChoice(choose){
console.log(choose, "choose parameter");
console.log(choose.id, "choose id")

  let getStoredFavorite = JSON.parse(localStorage.getItem(choose.id));
  console.log(getStoredFavorite, "retrieved foot item from local storage");
  // retrieve the stored favorite item
  let footChoiceComponent = [getStoredFavorite];
  console.log(footChoiceComponent, "Foot Choice Component Array");

  let footParLocation = document.getElementById("itemSelectorModal");

  footChoiceComponent.forEach(component => {   

    footParLocation.innerHTML = footParLocation.innerHTML +
       `
<div id="itemModal">
       <div id="itemHeader">
<img id="itemPhoto" src="${component.image}">
</div>
<form id="itemForm">
<label id="labItemProfile" for="itemProfile">Width:</label>
<select class="parButton" id="itemProfile">
  <option value=""></option>
  <option value="wide">Wide</option>
  <option value="narrow">Narrow</option>
</select>
<label id="labItemSide" for="itemSide">Side:</label>
<select class="parButton" id="itemSide">
  <option value=""></option>
  <option value="Right">Right</option>
  <option value="Left">Left</option>
</select>
<label id="labItemSize" for="itemSize">Size:</label>
<select class="parButton" id="itemSize">
  <option value=""></option>
  <option value="23">23</option>
  <option value="24">24</option>
  <option value="25">25</option>
  <option value="26">26</option>
  <option value="27">27</option>
  <option value="28">28</option>
  <option value="29">29</option>
  <option value="30">30</option>
  <option value="31">31</option>
  <option value="32">32</option>

</select>
<label id="labItemColor" for="itemColor">Color</label>
<select class="parButton" id="itemColor">
  <option value=""></option>
  <option value="Brown">Brown</option>
  <option value="Caucasian">Caucasian</option>
</select>

<label id="labItemQuantity" for="itemQuantity">Quantity:</label>
<div class="parButton" id="itemCounter">
  <!-- <button type="button" id="itemMinus">-</button> -->
  <input type="number" id="itemQuantity" min="1" max="100" value="0">
  <!-- <button type="button" id="itemPlus">+</button> -->

</div>
<button onclick="hideFootSelector()" type="button" class="btn-secondary" id="removeParSelector">Cancel</button> 

<button onclick="footCartItem(${component.valAssign}favorite); addFootQuantity(); addFootSide(); addFootProfile(); addFootSize(); addFootColor(); hideFootSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button> 

</form>
<div id="itemQuantityOutput"></div>
<div id="itemSizeOutput"></div>
<div id="itemProfileOutput"></div>
</div>

`
       ;
      console.log("Choosing Foot Parameters Successful");
      
      });




}





function addFootQuantity(){

  let quantity = document.getElementById("itemQuantity");
    
  localStorage.setItem("Foot Quantity", JSON.stringify(quantity.value))
    // push the cartArray to local storage

  let getQuantity = JSON.parse(localStorage.getItem("Foot Quantity"));
  console.log(getQuantity, "Quantity of Foots Stored");
    // retrieve the stored array to check the values
}

function addFootSide(){

  let quantity = document.getElementById("itemSide");
    
  localStorage.setItem("Foot Side", JSON.stringify(quantity.value))
    // push the cartArray to local storage

  let getSide = JSON.parse(localStorage.getItem("Foot Side"));
  console.log(getSide, "Side of Foots Stored");
    // retrieve the stored array to check the values
}

function addFootProfile(){

  let profile = document.getElementById("itemProfile");

  localStorage.setItem("Foot Profile", JSON.stringify(profile.value))
    // push the cartArray to local storage

  let getProfile = JSON.parse(localStorage.getItem("Foot Profile"));
  console.log(getProfile, "Profile of Foots Stored");
    // retrieve the stored array to check the values
}

function addFootSize(){

  let size = document.getElementById("itemSize");

  localStorage.setItem("Foot Size", JSON.stringify(size.value))
  // push the cartArray to local storage

let getSize = JSON.parse(localStorage.getItem("Foot Size"));
console.log(getSize, "Size of Foots Stored");
  // retrieve the stored array to check the values
}

function hideFootSelector(){
  let myContainer = document.getElementById("itemSelectorModal");
  let itemToRemove = document.getElementById("itemModal");
  myContainer.removeChild(itemToRemove);
}
 function addFootColor(){

  let color = document.getElementById("itemColor");

  localStorage.setItem("Foot Color", JSON.stringify(color.value))
  // push the cartArray to local storage

let getColor = JSON.parse(localStorage.getItem("Foot Color"));
console.log(getColor, "Color of Foots Stored");
  // retrieve the stored array to check the values//   let color = document.getElementById("itemColor");


//   localStorage.setItem("Foot Quantity", JSON.stringify(quantity.value))
//   // push the cartArray to local storage

// let getQuantity = JSON.parse(localStorage.getItem("Foot Quantity"));
// console.log(getQuantity, "Quantity of Foots Stored");
//   // retrieve the stored array to check the values
 }









