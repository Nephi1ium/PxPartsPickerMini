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

    console.log(array,"array name");

    array.forEach(component => {    
        linersCard.innerHTML = linersCard.innerHTML +
         `<div class="card card-margin" id="${component.valAssign}">
            <div class="card-header">
                <h4 > ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="favorites(${component.valAssign}, ${component.valAssign})" > Add To Favorites </a>
                <div class="card-body">
                <img class="card-image" src="${component.image}"></img>
                <h5> Product Description </h5>
                <div> Manufacturer: ${component.manufacturer}</div>
                <br>
                <h5><u> L-Codes </u></h5>
                <div class="lcodes">
                <div>${component.lcode1}</div>
                <div>${component.lcode2}</div>
                <div>${component.lcode3}</div>
                <div>${component.lcode4}</div>
                <div>${component.lcode5}</div>
                <div>${component.lcode6}</div>
                </div>

                <div>HD Code: ${component.hdcode}</div>

                <div>Price: ${component.cost}</div>
                <div>Typical Reimbursement: ${component.reimbursement}</div>
                <div>${component.percent}</div>
                <div>PPDAC Approval: ${component.pdac}</div>


                <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                <input type="button" class="additionSelectButton"></input>

                </div>
            </div>
        </div>`;
        console.log("Created", component.card, "Cards");
        });
        console.log("Card Creation Complete");
    };

    export {linerCard};