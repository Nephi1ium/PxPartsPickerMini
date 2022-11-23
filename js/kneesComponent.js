import { K14BFEA, kneeTwo, K14BFESF, K14BFESL, SML, SAEA, SASFE, PHyS, PHySS, PHySSFEA, SPSFS, SHySS, MPK, MPKSw, PolyPneu, PPSSF, MISC } from "../src/kneeArrays/kneesArray.js";
// import {favorites} from "../js/favoritesComponent.js";
// let itemOne = document.getElementById("fricMan");
const itemOne = document.querySelector("#fric");
const itemTwo = document.querySelector("#fricMan");
const itemThree = document.querySelector("#fricExtStan");
const itemFour = document.querySelector("#fricExtStanLock");
const itemFive = document.querySelector("#singAxManLock");
const itemSix = document.querySelector("#singAxPneuFric");
const itemSeven = document.querySelector("#singAxHydStanSwin");
const itemEight = document.querySelector("#safeExt");
const itemNine = document.querySelector("#safeFlexExt");
const itemTen = document.querySelector("#polyHydrau");
const itemEleven = document.querySelector("#polyHydrauStan");
const itemTwelve = document.querySelector("#polyPneu");
const itemThirteen = document.querySelector("#polyPneuSwinStanFlex");
const itemFourteen = document.querySelector("#polyHydrSwinStanFlexHigh");
const itemFifteen = document.querySelector("#allMPK");
const itemSixteen = document.querySelector("#mpkSwOnly");
const itemSeventeen = document.querySelector("#allMisc");



itemOne.addEventListener("click", () => kneeCard(K14BFEA));
itemTwo.addEventListener("click", () => kneeCard(kneeTwo));
itemThree.addEventListener("click", () => kneeCard(K14BFESF));
itemFour.addEventListener("click", () => kneeCard(K14BFESL));
itemFive.addEventListener("click", () => kneeCard(SML));
itemSix.addEventListener("click", () => kneeCard(SAEA));
itemSeven.addEventListener("click", () => kneeCard(SASFE));
itemEight.addEventListener("click", () => kneeCard(PHyS));
itemNine.addEventListener("click", () => kneeCard(PHySS));
itemTen.addEventListener("click", () => kneeCard(PHySSFEA));
itemEleven.addEventListener("click", () => kneeCard(SPSFS));
itemTwelve.addEventListener("click", () => kneeCard(SHySS));
itemThirteen.addEventListener("click", () => kneeCard(PolyPneu));
itemFourteen.addEventListener("click", () => kneeCard(PPSSF));
itemFifteen.addEventListener("click", () => kneeCard(MPK));
itemSixteen.addEventListener("click", () => kneeCard(MPKSw));
itemSeventeen.addEventListener("click", () => kneeCard(MISC));




function kneeCard(array){

    document.getElementById('mainpageSectionforJS').innerHTML = "";

    let kneesCard = document.querySelector('#mainpageSectionforJS');

    localStorage.setItem("array", JSON.stringify(array));
    console.log(array, "array name");
    let data = JSON.parse(localStorage.getItem("array")); 
    console.log(data, "item data");

    data.forEach(component => {
        localStorage.setItem(component.valAssign, JSON.stringify(component))
    });
    // this puts all of the array items from the selected objects in local storage to be retrieved later

    data.forEach(component => {    
        kneesCard.innerHTML = kneesCard.innerHTML +
         `<div class="card card-margin" id="${component.valAssign}">

            <div class="card-header">
                <h4 id=""> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="kneeFavorites(${component.valAssign})" > Add To Favorites </a>
                <div class="card-body">
                <img class="card-image" src="${component.image}"></img>
                <h5> Product Description </h5>
                <div id="${component.manufacturer}"> Manufacturer: ${component.manufacturer}</div>
                <br>
                <h5><u> L-Codes </u></h5>
                <div class="lcodes">
                <div id="${component.lcode1}">${component.lcode1}</div>
                <div id="${component.lcode2}">${component.lcode2}</div>
                <div id="${component.lcode3}">${component.lcode3}</div>
                <div id="${component.lcode4}">${component.lcode4}</div>
                <div id="${component.lcode5}">${component.lcode5}</div>
                <div id="${component.lcode6}">${component.lcode6}</div>
                </div>

                <div id="">HD Code: ${component.hdcode}</div>

                <div id="${component.cost}">Price: $${component.cost}</div>
                <div id="${component.reimbursement}">Typical Reimbursement: $${component.reimbursement}</div>
                <div id="${component.percent}">${component.percent}</div>
                <div id="${component.pdac}${component.hdcode}">PPDAC Approval: ${component.pdac}</div>


                <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                <input type="button" class="additionSelectButton"></input>

                </div>
            </div>
        </div>`;
        console.log("Created", component.card, "Cards");
        
        });
// To save the array item to local storage for use in a favorites section.
        // array.forEach(component => {
        //     localStorage.setItem(`${component.hdcode}`, JSON.stringify(component));
        //     console.log(component);
        //     let data = JSON.parse(localStorage.getItem(`${component.hdcode}`)); 
        //     console.log(data, "item data");


        // });

        console.log("Card Creation Complete");
    };


    // export {kneeCard};




