import { feetArrayOne, feetArrayTwo, feetArrayThree, feetArrayFour, feetArrayFive, feetArraySix, feetArraySeven, feetArrayEight, feetArrayNine, feetArrayTen, feetArrayEleven, feetArrayTwelve, feetArrayThirteen, feetArray14, feetArray15, feetArray16, feetArray17, feetArray18, feetArray19, feetArray20, feetArray21} from "../src/feetArrays/feetArray.js";


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


itemOne.addEventListener("click", () => feetCard(feetArrayOne));
itemTwo.addEventListener("click", () => feetCard(feetArrayTwo));
itemThree.addEventListener("click", () => feetCard(feetArrayThree));
itemFour.addEventListener("click", () => feetCard(feetArrayFour));
itemFive.addEventListener("click", () => feetCard(feetArrayFive));
itemSix.addEventListener("click", () => feetCard(feetArraySix));
itemSeven.addEventListener("click", () => feetCard(feetArraySeven));
itemNine.addEventListener("click", () => feetCard(feetArrayEight));
// the above is the MPF section.
itemEight.addEventListener("click", () => feetCard(feetArrayNine));
itemTen.addEventListener("click", () => feetCard(feetArrayTen));
itemEleven.addEventListener("click", () => feetCard(feetArrayEleven));
itemTwelve.addEventListener("click", () => feetCard(feetArrayTwelve));
itemThirteen.addEventListener("click", () => feetCard(feetArrayThirteen));
itemFourteen.addEventListener("click", () => feetCard(feetArray14));
itemFifteen.addEventListener("click", () => feetCard(feetArray15));
itemSixteen.addEventListener("click", () => feetCard(feetArray16));
itemSeventeen.addEventListener("click", () => feetCard(feetArray17));
itemEighteen.addEventListener("click", () => feetCard(feetArray18));
itemNineteen.addEventListener("click", () => feetCard(feetArray19));
itemTwenty.addEventListener("click", () => feetCard(feetArray20));
itemTwentyOne.addEventListener("click", () => feetCard(feetArray21));


function feetCard(array){

    document.getElementById('mainpageSectionforJS').innerHTML = "";

    let footCard = document.querySelector('#mainpageSectionforJS');
    console.log(array,"array name");


    array.forEach(component => {    
        footCard.innerHTML = footCard.innerHTML +
         `<div class="card card-margin">
            <div class="card-header">
                <h4> ${component.name} </h4>
                <a class="kneeClick btn btn-primary" onclick="favorites(${component.hdcode})" > Add To Favorites </a>
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




