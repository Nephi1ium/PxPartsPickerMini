import {lockLiners, cushLiner, sealLiner, custLiner} from "../src/linerArrays/linersArray.js"


const itemOne = document.querySelector("#pin");
const itemTwo = document.querySelector("#cush");
const itemThree = document.querySelector("#seal");
const itemFour = document.querySelector("#custom");


itemOne.addEventListener("click", () => linerCard(lockLiners));
itemTwo.addEventListener("click", () => linerCard(cushLiner));
itemThree.addEventListener("click", () => linerCard(sealLiner));
itemFour.addEventListener("click", () => linerCard(custLiner));



function linerCard(array){

    document.getElementById('mainpageSectionforJS').innerHTML = "";

    let linersCard = document.querySelector('#mainpageSectionforJS');

    localStorage.setItem("array", JSON.stringify(array));
    console.log(array, "array name");
    let data = JSON.parse(localStorage.getItem("array")); 
    console.log(data, "item data");

    data.forEach(component => {
        localStorage.setItem(component.valAssign, JSON.stringify(component))
    });
    
    data.forEach(component => {   
        linersCard.innerHTML = linersCard.innerHTML +
        `<div class="flip-card card card-margin" id="${component.valAssign}">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h4 id=""> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="kneeFavorites(${component.valAssign})" > Add To Favorites </a>

                <img class="card-image" src="${component.image}"></img>
        
            </div>

            <div class="flip-card-back">
                <h5> Product Description </h5>
                ${component.manufacturer ? `<div id="${component.manufacturer}"> Manufacturer: ${component.manufacturer}</div>` : ''}
                <br>
            <h5><u> L-Codes </u></h5>
                <div class="lcodes">
                    ${component.lcode1 ? `<div id="${component.lcode1}">${component.lcode1}</div>` : ''}
                    ${component.lcode2 ? `<div id="${component.lcode2}">${component.lcode2}</div>` : ''}
                    ${component.lcode3 ? `<div id="${component.lcode3}">${component.lcode3}</div>` : ''}
                    ${component.lcode4 ? `<div id="${component.lcode4}">${component.lcode4}</div>` : ''}
                    ${component.lcode5 ? `<div id="${component.lcode5}">${component.lcode5}</div>` : ''}
                    ${component.lcode6 ? `<div id="${component.lcode6}">${component.lcode6}</div>` : ''}
                </div>
                ${component.reimbursement ? `<div id="${component.reimbursement}">Typical Reimbursement: $${component.reimbursement}</div>` : ''}
                ${component.pdac ? `<div id="${component.pdac}${component.valAssign}">PPDAC Approval: ${component.pdac}</div>` : ''}
            </div>
        </div>
</div>`;
        console.log("Created", component.card, "Cards");
        });
        console.log("Card Creation Complete");
    };

    export {linerCard};