import {sleevesSh, socksPx, allPxComponents} from "../src/componentArrays/componentArray.js";

const itemOne = document.querySelector("#socks");
const itemTwo = document.querySelector("#sleeves");
const itemThree = document.querySelector("#components");
const itemFour = document.querySelector("#components");

itemOne.addEventListener("click", () => componentCard(socksPx));
itemTwo.addEventListener("click", () => componentCardKS(sleevesSh));
itemThree.addEventListener("click", () => componentCardpxComp(allPxComponents));
itemThree.addEventListener("click", () => componentCardpxComp(allPxComponents));


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









    // data.forEach(component => {  
    //     console.log("Created", component, "Cards")
   
    //     compCard.innerHTML = compCard.innerHTML +
    //      `<div class="card list" id="${component.valAssign}">
    //         <div class="card-header">
    //             <h4> ${component.name} </h4>
    //             <a class="kneeClick btn btn-primary" onclick="pxCompFavorites(${component.valAssign})" > Add To Favorites </a>
    //             <div class="card-body">
    //             <img class="card-image" src="${component.image}"></img>
    //             <h5> Product Description </h5>
    //             <div id="${component.weight}">${component.weight}</div>
    //             <div id="${component.weightlimit}">${component.weightlimit}</div>
    //             <div id="${component.material}">${component.material}</div>
    //             <div id="${component.material}">LCode:${component.lcode}</div>

    //             <div id="${component.price}" >${component.price}</div>
    //             <div id= "${component.hdcode}">${component.hdcode}</div>
    //             <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
    //             <input type="button" class="additionSelectButton"></input>

    //             </div>
    //         </div>
    //     </div>`;
    //     console.log("Created", component, "Cards")










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





export {componentCard};
// export {componentCard};
























