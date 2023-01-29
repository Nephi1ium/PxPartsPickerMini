import { FlexFootMultiAxialAnkle, FlexWalk, FlexWalkMultiAxial, VertShockAxialRot, VertShockMultiAxialRot, VertShock, MiscFeet, L5999, FlexWalkMultiAxialAnkleVac, k2FlexKeelhydraMulti, FlexFoot, MultiAxialDynamResp, EnergyStore, SingAxis, Microprocessor, k3FlexHydrauMulti, K3FlexHydrauMultiVertShock, SACH, K2FlexHeel, K2FlexKeelMultiAxialRot, K2FlexKeelAxialRotVert} from "../src/feetArrays/feetArray.js";


const itemOne = document.querySelector("#feetOne");
const itemTwo = document.querySelector("#feet2");
const itemThree = document.querySelector("#feet3");
const itemFour = document.querySelector("#feet4");
const itemFive = document.querySelector("#feet5");
const itemSix = document.querySelector("#feet6");
const itemSeven = document.querySelector("#feet7");
const itemEight = document.querySelector("#feet8");
const itemNine = document.querySelector("#feet9");
const itemTen = document.querySelector("#feet10");
const itemEleven = document.querySelector("#feet11");
const itemTwelve = document.querySelector("#feet12");
const itemThirteen = document.querySelector("#feet13");
const itemFourteen = document.querySelector("#feet14");
const itemFifteen = document.querySelector("#feet15");
const itemSixteen = document.querySelector("#feet16");
const itemSeventeen = document.querySelector("#feet17");
const itemEighteen = document.querySelector("#feet18");
const itemNineteen = document.querySelector("#feet19");
const itemTwenty = document.querySelector("#feet20");
const itemTwentyOne = document.querySelector("#feet21");
const itemTwentyTwo = document.querySelector("#feet22");


itemOne.addEventListener("click", () => feetCard(k2FlexKeelhydraMulti));
itemTwo.addEventListener("click", () => feetCard(k3FlexHydrauMulti));
itemThree.addEventListener("click", () => feetCard(K3FlexHydrauMultiVertShock));
itemFour.addEventListener("click", () => feetCard(SACH));
itemFive.addEventListener("click", () => feetCard(K2FlexHeel));
itemSix.addEventListener("click", () => feetCard(K2FlexKeelMultiAxialRot));
itemSeven.addEventListener("click", () => feetCard(K2FlexKeelAxialRotVert));
itemNine.addEventListener("click", () => feetCard(Microprocessor));
// the above is the MPF section.
itemEight.addEventListener("click", () => feetCard(SingAxis));
itemTen.addEventListener("click", () => feetCard(EnergyStore));
itemEleven.addEventListener("click", () => feetCard(MultiAxialDynamResp));
itemTwelve.addEventListener("click", () => feetCard(FlexFoot));
itemThirteen.addEventListener("click", () => feetCard(FlexFootMultiAxialAnkle));
itemFourteen.addEventListener("click", () => feetCard(FlexWalk));
itemFifteen.addEventListener("click", () => feetCard(FlexWalkMultiAxial));
itemSixteen.addEventListener("click", () => feetCard(VertShockAxialRot));
itemSeventeen.addEventListener("click", () => feetCard(VertShockMultiAxialRot));
itemEighteen.addEventListener("click", () => feetCard(VertShock));
itemNineteen.addEventListener("click", () => feetCard(FlexWalkMultiAxialAnkleVac));
itemTwenty.addEventListener("click", () => feetCard(L5999));
itemTwentyOne.addEventListener("click", () => feetCard(MiscFeet));


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

    data.forEach(component => {    
        footCard.innerHTML = footCard.innerHTML +
        `<div class="card card-margin" id="${component.valAssign}">
        <div class="card-header">
                <h4> ${component.name} </h4>
                ${component.favorited ? 
                `<a class="kneeClick btn btn-primary" onclick="removeFootFavorites(${component.valAssign})" > Remove From Favorites </a>` :
                `<a class="kneeClick btn btn-primary" onclick="footFavorites(${component.valAssign})" > Add To Favorites </a>`}
                <div class="card-body">
                <img class="card-image" src="${component.image}"></img>
                <h5> Product Description </h5>
                <div>${component.manufacturer}</div>
                <div>${component.lcode1}</div>
                <div>${component.lcode2}</div>
                <div>${component.lcode3}</div>
                <div>${component.lcode4}</div>
    
                <div>${component.hdcode}</div>
    
                <div>$${component.cost}</div>
                <div>${component.reimbursement}</div>
                <div>${component.percent}</div>
                <div>${component.pdac}</div>
    
    
                <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                <input type="button" class="additionSelectButton"></input>
    
                </div>
            </div>
        </div>`;
        console.log("Created", component.card, "Cards");
        });
        console.log("Card Creation Complete");

    };


    export {feetCard};




