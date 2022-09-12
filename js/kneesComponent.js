import { kneeOne } from "../src/kneeArrays/kneesArray.js";




function kneeCard(){


    let kneesCard = document.querySelector('#mainpageSectionforJS');


    kneeOne.forEach(component => {    
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


    export {kneeCard};




