import {componentArray} from "../src/componentArrays/componentArray.js";




function componentSection() {

    const componentItemNav = 
    `
    <nav>

              <a class=" secButtons  mpk"  id="#" > Socks  </a>
    
              <a class="secButtons   mpk"  id="#"> Sleeves and Sheaths </a>
    
              <a class=" secButtons  mpk"  id="#" > Build Components </a>
    
  </nav>
  `;
  document.getElementById("componentsSection").innerHTML = componentItemNav;

}

function componentCard(array){

    let compCard = document.querySelector('#mainpageSectionforJS');


    array.forEach(component => {    
        compCard.innerHTML = compCard.innerHTML +
         `<div class="card">
            <div class="card-header">
                <h4> ${component.name} </h4>
                <div class="card-body">
                <img class="card-image" src="${component.image}"></img>
                <h5> Product Description </h5>
                <div>${component.weight}</div>
                <div>${component.weightlimit}</div>
                <div>${component.material}</div>

                <div>$${component.price}</div>
                <div>${component.hdcode}</div>
                <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                <input type="button" class="additionSelectButton"></input>

                </div>
            </div>
        </div>`;
        console.log("Created", component.name, "Cards")
        });
        console.log("Card Creation Complete");

    };



export {componentSection, componentCard};
// export {componentCard};



