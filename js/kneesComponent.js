import { K14BFEA, kneeTwo, K14BFESF, K14BFESL, SML, SAEA, SASFE, PHyS, PHySS, PHySSFEA, SPSFS, SHySS, MPK, MPKSw, PolyPneu, PPSSF, MISC } from "../src/kneeArrays/kneesArray.js";

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
itemThirteen.addEventListener("click", () => kneeCard(MPK));
itemFourteen.addEventListener("click", () => kneeCard(MPKSw));
itemFifteen.addEventListener("click", () => kneeCard(PolyPneu));
itemSixteen.addEventListener("click", () => kneeCard(PPSSF));
itemSeventeen.addEventListener("click", () => kneeCard(MISC));




function kneeCard(array){


    let kneesCard = document.querySelector('#mainpageSectionforJS');

    console.log(array,"array name");

    array.forEach(component => {    
        kneesCard.innerHTML = kneesCard.innerHTML +
         `<div class="card card-margin">
            <div class="card-header">
                <h4> ${component.name} </h4>
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

                <div>Price: $${component.cost}</div>
                <div>Typical Reimbursement: $${component.reimbursement}</div>
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


    // export {kneeCard};




