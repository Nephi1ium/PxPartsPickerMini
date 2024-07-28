import {allFeet} from "../src/feetArrays/feetArray.js";

const clickFeet = document.querySelector("#feetOne");
// const itemTwo = document.querySelector("#feet2");
// const itemThree = document.querySelector("#feet3");
// const itemFour = document.querySelector("#feet4");
// const itemFive = document.querySelector("#feet5");
// const itemSix = document.querySelector("#feet6");
// const itemSeven = document.querySelector("#feet7");
// const itemEight = document.querySelector("#feet8");
// const itemNine = document.querySelector("#feet9");
// const itemTen = document.querySelector("#feet10");
// const itemEleven = document.querySelector("#feet11");
// const itemTwelve = document.querySelector("#feet12");
// const itemThirteen = document.querySelector("#feet13");
// const itemFourteen = document.querySelector("#feet14");
// const itemFifteen = document.querySelector("#feet15");
// const itemSixteen = document.querySelector("#feet16");
// const itemSeventeen = document.querySelector("#feet17");
// const itemEighteen = document.querySelector("#feet18");
// const itemNineteen = document.querySelector("#feet19");
// const itemTwenty = document.querySelector("#feet20");
// const itemTwentyOne = document.querySelector("#feet21");
// const itemTwentyTwo = document.querySelector("#feet22");


clickFeet.addEventListener("click", () => feetCard(allFeet));
// itemTwo.addEventListener("click", () => feetCard(k3FlexHydrauMulti));
// itemThree.addEventListener("click", () => feetCard(K3FlexHydrauMultiVertShock));
// itemFour.addEventListener("click", () => feetCard(SACH));
// itemFive.addEventListener("click", () => feetCard(K2FlexHeel));
// itemSix.addEventListener("click", () => feetCard(K2FlexKeelMultiAxialRot));
// itemSeven.addEventListener("click", () => feetCard(K2FlexKeelAxialRotVert));
// itemNine.addEventListener("click", () => feetCard(Microprocessor));
// // the above is the MPF section.
// itemEight.addEventListener("click", () => feetCard(SingAxis));
// itemTen.addEventListener("click", () => feetCard(EnergyStore));
// itemEleven.addEventListener("click", () => feetCard(MultiAxialDynamResp));
// itemTwelve.addEventListener("click", () => feetCard(FlexFoot));
// itemThirteen.addEventListener("click", () => feetCard(FlexFootMultiAxialAnkle));
// itemFourteen.addEventListener("click", () => feetCard(FlexWalk));
// itemFifteen.addEventListener("click", () => feetCard(FlexWalkMultiAxial));
// itemSixteen.addEventListener("click", () => feetCard(VertShockAxialRot));
// itemSeventeen.addEventListener("click", () => feetCard(VertShockMultiAxialRot));
// itemEighteen.addEventListener("click", () => feetCard(VertShock));
// itemNineteen.addEventListener("click", () => feetCard(FlexWalkMultiAxialAnkleVac));
// itemTwenty.addEventListener("click", () => feetCard(L5999));
// itemTwentyOne.addEventListener("click", () => feetCard(MiscFeet));


function feetCard(array){

    document.getElementById('mainpageSectionforJS').innerHTML = "";

    let footCard = document.querySelector('#mainpageSectionforJS');
    console.log(array,"array name");

    localStorage.setItem("feetarray", JSON.stringify(array));
    console.log(array, "array name");
    let data = JSON.parse(localStorage.getItem("feetarray")); 
    console.log(data, "item data");

    data.forEach(component => {
        localStorage.setItem(component.valAssign, JSON.stringify(component))
    });
    // this puts all of the array items from the selected objects in local storage to be retrieved later

    data.forEach(component => {    

        const formattedName = component.manufacturer.replace(/_/g, " ");

        footCard.innerHTML = footCard.innerHTML +
        `<div class="flip-card card card-margin .card-normal card-overlay" id="${component.valAssign}">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div id=""> ${component.name} </div>
                <button class="small-top-right-btn" onclick="kneeFavorites(${component.valAssign})">+</button>
                <i class="toggle-icon fas fa-chevron-down small-top-left-btn"></i>    
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
        };
        console.log("Card Creation Complete");

    

    export {feetCard};




    // <button class="small-top-left-btn toggle-size-btn">Toggle Size</button>
