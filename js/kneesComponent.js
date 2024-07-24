import { K14BFEA, kneeTwo, K14BFESF, K14BFESL, SML, SAEA, SASFE, PHyS, PHySS, PHySSFEA, SPSFS, SHySS, MPK, MPKSw, PolyPneu, PPSSF, MISC } from "../src/kneeArrays/kneesArray.js";
// import {favorites} from "../js/favoritesComponent.js";
// let itemOne = document.getElementById("fricMan");
// const itemOne = document.querySelector(".mainChoice")
// ;
// const itemTwo = document.querySelector(".mainChoice")
// ;
// const itemThree = document.querySelector(".mainChoice")
// ;
// const itemFour = document.querySelector(".mainChoice")
// ;
// const itemFive = document.querySelector(".mainChoice")
// ;
// const itemSix = document.querySelector(".mainChoice")
// ;
// const itemSeven = document.querySelector(".mainChoice")
// ;
// const itemEight = document.querySelector(".mainChoice")
// ;
// const itemNine = document.querySelector(".mainChoice")
// ;
// const itemTen = document.querySelector(".mainChoice")
// ;
// const itemEleven = document.querySelector(".mainChoice")
// ;
// const itemTwelve = document.querySelector(".mainChoice")
// ;
// const itemThirteen = document.querySelector(".mainChoice")
// ;
// const itemFourteen = document.querySelector(".mainChoice")
// ;
// const itemFifteen = document.querySelector(".mainChoice")
// ;
// const itemSixteen = document.querySelector(".mainChoice")
// ;
const itemSeventeen = document.querySelector(".mainChoice")
;



// itemOne.addEventListener("click", () => kneeCard(K14BFEA));
// itemTwo.addEventListener("click", () => kneeCard(kneeTwo));
// itemThree.addEventListener("click", () => kneeCard(K14BFESF));
// itemFour.addEventListener("click", () => kneeCard(K14BFESL));
// itemFive.addEventListener("click", () => kneeCard(SML));
// itemSix.addEventListener("click", () => kneeCard(SAEA));
// itemSeven.addEventListener("click", () => kneeCard(SASFE));
// itemEight.addEventListener("click", () => kneeCard(PHyS));
// itemNine.addEventListener("click", () => kneeCard(PHySS));
// itemTen.addEventListener("click", () => kneeCard(PHySSFEA));
// itemEleven.addEventListener("click", () => kneeCard(SPSFS));
// itemTwelve.addEventListener("click", () => kneeCard(SHySS));
// itemThirteen.addEventListener("click", () => kneeCard(PolyPneu));
// itemFourteen.addEventListener("click", () => kneeCard(PPSSF));
// itemFifteen.addEventListener("click", () => kneeCard(MPK));
// itemSixteen.addEventListener("click", () => kneeCard(MPKSw));
itemSeventeen.addEventListener("click", () => kneeCard(MISC, MPKSw, MPK, K14BFEA, kneeTwo));




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
        `<div class="flip-card card card-margin" id="${component.valAssign}">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h4 id=""> ${component.name} </h4>
                    <a class="kneeClick btn btn-primary" onclick="kneeFavorites(${component.valAssign})" > Add To Favorites </a>

                    <img class="card-image" src="${component.image}"></img>
            
                </div>

                <div class="flip-card-back">
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

                    
                    <div id="${component.reimbursement}">Typical Reimbursement: $${component.reimbursement}</div>
                    <div id="${component.pdac}${component.valAssign}">PPDAC Approval: ${component.pdac}</div>


                    <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                </div>
            </div>
        </div>
    </div>`;
    console.log("Created", component.card, "Cards");
    
    });


        console.log("Card Creation Complete");
    };


    // export {kneeCard};




