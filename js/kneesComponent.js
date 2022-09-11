import { kneeArray } from "../src/kneesArray.js";




function kneeCard(){


    let kneesCard = document.querySelector('#mainpageSectionforJS');


    kneeArray.forEach(component => {    
        kneesCard.innerHTML = kneesCard.innerHTML +
         `<div class="card noShow">
            <div class="card-header">
                <h4> ${component.Name} </h4>
                <div class="card-body">
                <img class="card-image" src="${component.image}"></img>
                <h5> Product Description </h5>
                <div>${component.manufacturer}</div>
                <div>${component.lcode1}</div>
                <div>${component.lcode2}</div>
                <div>${component.lcode3}</div>
                <div>${component.lcode4}</div>
                <div>${component.lcode5}</div>
                <div>${component.lcode6}</div>


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
        });
    };


    export {kneeCard};




