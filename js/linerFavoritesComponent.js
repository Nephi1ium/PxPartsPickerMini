
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
  
// This will replace the +cart button in the below function
//            <a class="linerClick btn-small btn btn-primary" onclick="linerCartItem(${component.valAssign}); linerParChoice()" > + Cart </a>


          getFavorites.forEach(component => {    
            favoritesLocation.innerHTML = favoritesLocation.innerHTML +
           `<div class="card favorites card-margin" id="${component.valAssign}favorite">

           <a class="linerClick btn-small btn btn-primary" onclick="linerCartItem(${component.valAssign}favorite); linerParChoice(${component.valAssign})" > + Cart </a>
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

          linerFavoritesArray = getFavorites;

          console.log(linerFavoritesArray, "This is the modified global liner favorite array")
          // change the global value of the array above
}

function showFavorites(){
}

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

linerFavoritesArray = showfavorite;

console.log(linerFavoritesArray, "This is the modified global liner favorite array")
// change the global value of the array above
}




function linerParChoice(choose){
console.log(choose, "choose parameter");
console.log(choose.id, "choose id")

  let getStoredFavorite = JSON.parse(localStorage.getItem(choose.id));
  console.log(getStoredFavorite, "retrieved liner item from local storage");
  // retrieve the stored favorite item
  let linerChoiceComponent = [getStoredFavorite];
  console.log(linerChoiceComponent, "Liner Choice Component Array");

  let linerParLocation = document.getElementById("itemSelectorModal");

  linerChoiceComponent.forEach(component => {   

    linerParLocation.innerHTML = linerParLocation.innerHTML +
       `
<div id="linerModal">
       <div id="itemHeader">
<img id="itemPhoto" src="${component.image}">
</div>
<form id="itemForm">
<label id="labItemProfile" for="itemProfile">Profile:</label>
<select id="itemProfile">
  <option value="uniform">Uniform</option>
  <option value="progressive">Progressive</option>
</select>
<label id="labItemSize" for="itemSize">Size:</label>
<select id="itemSize">
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="medium+">Medium+</option>
  <option value="large">Large</option>
</select>
<label id="labItemQuantity" for="itemQuantity">Quantity:</label>
<div id="itemCounter">
  <!-- <button type="button" id="itemMinus">-</button> -->
  <input type="number" id="itemQuantity" min="1" max="100" value="0">
  <!-- <button type="button" id="itemPlus">+</button> -->

</div>
<button onclick="addLinerQuantity(${component.valAssign}quantity); addLinerProfile(${component.valAssign}profile); addLinerSize(${component.valAssign}size); addLinerColor(${component.valAssign}color)" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button> 

</form>
<div id="itemQuantityOutput"></div>
<div id="itemSizeOutput"></div>
<div id="itemProfileOutput"></div>
</div>

`
       ;
      console.log("Choosing Liner Parameters Successful");
      
      });




}





function addLinerQuantity(liner){

}

function addLinerProfile(liner){

}

function addLinerSize(liner){

}

function addLinerColor(liner){
  
}








