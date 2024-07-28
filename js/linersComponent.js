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
    // this puts all of the array items from the selected objects in local storage to be retrieved later

    data.forEach(component => {    

        const formattedName = component.manufacturer.replace(/_/g, " ");

        linersCard.innerHTML = linersCard.innerHTML +
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
        console.log("Created", component.card, "Cards");
        };
        console.log("Card Creation Complete");


    export {linerCard};