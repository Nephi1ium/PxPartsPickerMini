import {sleevesSh, socksPx, allPxComponents} from "../src/componentArrays/componentArray.js";

const itemOne = document.querySelector("#socks");
const itemTwo = document.querySelector("#sleeves");
const itemThree = document.querySelector("#components");

itemOne.addEventListener("click", () => componentCard(socksPx));
itemTwo.addEventListener("click", () => componentCard(sleevesSh));
itemThree.addEventListener("click", () => componentCard(allPxComponents));

function componentCard(array){

    let compCard = document.querySelector('#mainpageSectionforJS');


    array.forEach(component => {    
        compCard.innerHTML = compCard.innerHTML +
         `<div class="card">
            <div class="card-header">
                <h4> ${component.name} </h4>
                <div class="card-body">
                <img class="card-image" src="${component.image}"></img>
                <h5> Product Description </h5>
                <div>${component.weight}</div>
                <div>${component.weightlimit}</div>
                <div>${component.material}</div>

                <div>$${component.price}</div>
                <div>${component.hdcode}</div>
                <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                <input type="button" class="additionSelectButton"></input>

                </div>
            </div>
        </div>`;
        console.log("Created", component.name, "Cards")
        });
        console.log("Card Creation Complete");

    };



export {componentCard};
// export {componentCard};



