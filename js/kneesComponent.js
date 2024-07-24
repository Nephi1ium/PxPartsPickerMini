import { allKnees } from "../src/kneeArrays/kneesArray.js";
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
itemSeventeen.addEventListener("click", () => kneeCard(allKnees));




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

        const formattedName = component.manufacturer.replace(/_/g, " ");

        kneesCard.innerHTML = kneesCard.innerHTML +
        `<div class="flip-card card card-margin .card-normal card-overlay" id="${component.valAssign}">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div id=""> ${component.name} </div>
                <button class="small-top-right-btn" onclick="kneeFavorites(${component.valAssign})">+</button>
                <button class="toggle-size-btn">Toggle Size</button>
                    <img class="card-image" src="${component.image}"></img>
            
                </div>

                <div class="flip-card-back card-description">
                    <div class="card-description"> Product Description </div>
                    <div id="${component.manufacturer}"> Manufacturer: ${formattedName}</div>
                    <br>
                <div><u> L-Codes </u></div>
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

// Event delegation for toggle-size button
document.querySelector('#mainpageSectionforJS').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('toggle-size-btn')) {
        const card = e.target.closest('.flip-card');
        if (card.classList.contains('enlarged')) {
            // If the card is enlarged, remove 'enlarged' and add 'shrunk' to shrink it.
            card.classList.remove('enlarged');
            card.classList.add('shrunk');
        } else {
            // If the card is not enlarged, remove 'shrunk' (if it exists) and add 'enlarged' to enlarge it.
            card.classList.remove('shrunk');
            card.classList.add('enlarged');
        }
    }
});



        console.log("Card Creation Complete");
    };


    // export {kneeCard};




