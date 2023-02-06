import {sleevesSh, socksPx, allPxComponents, sleeveArray, flexSleeve, gripGel, extreme, easy, easyStretch, easySticky, proFlex} from "../src/componentArrays/componentArray.js";

const itemOne = document.querySelector("#socks");
const itemTwo = document.querySelector("#sleeves");
const itemThree = document.querySelector("#components");
const itemFour = document.querySelector("#components");
// const sleeveSelector = document.querySelector("#sleeveChoice");
// const flexSleeveItem = document.querySelector("#sleeves");

itemOne.addEventListener("click", () => componentCard(socksPx));

// flexSleeveItem.addEventListener("click", () => componentCardKS(flexSleeve));


// itemTwo.addEventListener("click", () => componentCardKS(sleevesSh));
itemTwo.addEventListener("click", () => componentCardKS(sleeveArray));


itemThree.addEventListener("click", () => componentCardpxComp(allPxComponents));
itemThree.addEventListener("click", () => componentCardpxComp(allPxComponents));

// sleeveSelector.addEventListener("click", () => createSleeveSelector());


function componentCard(array){

    document.getElementById('mainpageSectionforJS').innerHTML = "";

    let compCard = document.querySelector('#mainpageSectionforJS');

    localStorage.setItem("array", JSON.stringify(array));
    console.log(array, "array name");
    let data = JSON.parse(localStorage.getItem("array")); 
    console.log(data, "item data");

    data.forEach(component => {
        localStorage.setItem(component.valAssign, JSON.stringify(component))
    });

        data.forEach(component => {
            console.log("Creating", component, "cards");
            compCard.innerHTML = compCard.innerHTML +
              `<div class="card list" id="${component.valAssign}">
                  <div class="card-header">
                      <h4> ${component.name} Hole ${component.HoleSelection ? 'Yes' : 'No'} </h4>
                      <a class="kneeClick btn btn-primary" onclick="socksFavorites(${component.valAssign})" > Add To Favorites </a>
                      <div class="card-body">
                      <img class="card-image" src="${component.image}"></img>
                      <h5> Product Description </h5>
                      ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}

          

                      <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                      <input type="button" class="additionSelectButton"></input>
          
                      </div>
                  </div>
              </div>`;
            console.log("Created", component, "Cards");
          });
        console.log("Card Creation Complete");

    };


    function componentCardKS(array){

        document.getElementById('mainpageSectionforJS').innerHTML = "";
    
        let compCard = document.querySelector('#mainpageSectionforJS');
    
        localStorage.setItem("array", JSON.stringify(array));
        console.log(array, "array name");
        let data = JSON.parse(localStorage.getItem("array")); 
        console.log(data, "item data");
    
        data.forEach(component => {
            localStorage.setItem(component.valAssign, JSON.stringify(component))
        });
        
        data.forEach(component => {
            console.log("Creating", component, "cards");
            compCard.innerHTML = compCard.innerHTML +
              `<div class="card list" id="${component.valAssign}">
                  <div class="card-header">
                      <h4> ${component.name} </h4>
                      <a class="kneeClick btn btn-primary" onclick="sleeveFavorites(${component.valAssign})" > Add To Favorites </a>
                      <div class="card-body">
                      <img class="card-image" src="${component.image}"></img>
                      <h5> Product Description </h5>
                      ${component.weight ? `<div id="${component.weight}">Weight: ${component.weight}</div>` : ''}
                      ${component.weightlimit ? `<div id="${component.weightlimit}">Weight Limit: ${component.weightlimit}</div>` : ''}
                      ${component.material ? `<div id="${component.material}">Material: ${component.material}</div>` : ''}
          
                      ${component.price ? `<div id="${component.price}">Price: ${component.price}</div>` : ''}
                      ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
                      <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                      <input type="button" class="additionSelectButton"></input>
          
                      </div>
                  </div>
              </div>`;
            console.log("Created", component, "Cards");
            });
            console.log("Card Creation Complete");
    
        };

        function componentCardpxComp(array){

            document.getElementById('mainpageSectionforJS').innerHTML = "";
        
            let compCard = document.querySelector('#mainpageSectionforJS');
        
            localStorage.setItem("array", JSON.stringify(array));
            console.log(array, "array name");
            let data = JSON.parse(localStorage.getItem("array")); 
            console.log(data, "item data");
        
            data.forEach(component => {
                localStorage.setItem(component.valAssign, JSON.stringify(component))
            });
            
            data.forEach(component => {
                console.log("Creating", component, "cards");
                compCard.innerHTML = compCard.innerHTML +
                  `<div class="card list" id="${component.valAssign}">
                      <div class="card-header">
                          <h4> ${component.name} </h4>
                          <a class="kneeClick btn btn-primary" onclick="pxCompFavorites(${component.valAssign})" > Add To Favorites </a>
                          <div class="card-body">
                          <img class="card-image" src="${component.image}"></img>
                          <h5> Product Description </h5>
                          ${component.weight ? `<div id="${component.weight}">Weight: ${component.weight}</div>` : ''}
                          ${component.weightlimit ? `<div id="${component.weightlimit}">Weight Limit: ${component.weightlimit}</div>` : ''}
                          ${component.material ? `<div id="${component.material}">Material: ${component.material}</div>` : ''}
                          ${component.lcode ? `<div id="${component.material}">LCode: ${component.lcode}</div>` : ''}
              
                          ${component.price ? `<div id="${component.price}">Price: ${component.price}</div>` : ''}
                          ${component.hdcode ? `<div id= "${component.hdcode}">HD Code: ${component.hdcode}</div>` : ''}
                          <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                          <input type="button" class="additionSelectButton"></input>
              
                          </div>
                      </div>
                  </div>`;
                console.log("Created", component, "Cards");
        
                });
                console.log("Card Creation Complete");
        
            };


            // function createSleeveSelector(array) {

            //     let pxcompParLocation = document.getElementById("itemSelectorModal");
              
            //       pxcompParLocation.innerHTML = pxcompParLocation.innerHTML +
            //     '<div id="itemModal">\
            //                    <div id="itemHeader">\
            //                      <img id="itemPhoto" src="' + array[0].image + '">\
            //                    </div>\
            //                    <form id="itemForm">\
            //                      <label id="labItemProfile" for="itemProfile">Width:</label>\
            //                      <select class="parButton" id="itemProfile">\
            //                        <option value=""></option>\
            //                        <option value="wide">Wide</option>\
            //                        <option value="narrow">Narrow</option>\
            //                      </select>\
            //                      <label id="labItemSide" for="itemSide">Side:</label>\
            //                      <select class="parButton" id="itemSide">\
            //                        <option value=""></option>\
            //                        <option value="Right">Right</option>\
            //                        <option value="Left">Left</option>\
            //                      </select>\
            //                      <label id="labItemSize" for="itemSize">Size:</label>\
            //                      <select class="parButton" id="itemSize">\
            //                        <option value=""></option>';
            //     for (let i = 0; i < 3; i++) {
            //       html += '<option value="' + array[i].size + '">' + array[i].size + '</option>';
            //     }
            //     html += '</select>\
            //              <label id="labItemColor" for="itemColor">Color</label>\
            //              <select class="parButton" id="itemColor">\
            //                <option value=""></option>';
            //     let colors = new Set();
            //     for (let i = 0; i < 3; i++) {
            //       colors.add(flexSleeve[i].color);
            //     }
            //     for (let color of colors) {
            //       html += '<option value="' + color + '">' + color + '</option>';
            //     }
            //     html += '</select>\
            //              <label id="labItemQuantity" for="itemQuantity">Quantity:</label>\
            //              <div class="parButton" id="itemCounter">\
            //                <input type="number" id="itemQuantity" min="1" max="100" value="0">\
            //              </div>\
            //              <button onclick="hideFootSelector()" type="button" class="btn-secondary" id="removeParSelector">Cancel</button>\
            //              <button onclick="footCartItem(${component.valAssign}favorite); addFootQuantity(); addFootSide(); addFootProfile(); addFootSize(); addFootColor(); hideFootSelector();" type="button" class="btn-primary" id="addQuantCart">Add to Cart</button>\
            //            </form>\
            //            <div id="itemQuantityOutput"></div>\
            //            <div id="itemSizeOutput"></div>\
            //            <div id="itemProfileOutput"></div>\
            //          </div>';
            //   }


export {componentCard};
// export {componentCard};
























