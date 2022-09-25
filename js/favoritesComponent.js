// const One = document.getElementsByClassName("kneeClick");
// console.log(One, "Favorite Query");

// One.addEventListener("click", () => favorites());

function favorites(favorited){

    let favoritesCard = document.querySelector('#itemSectionJS');

    let favorite = JSON.parse(localStorage.getItem(favorited)); 

    console.log(favorite,"favorite");

    favorite.forEach(component => {    
            favoritesCard.innerHTML = favoritesCard.innerHTML +
             `<div class="card card-margin">
                <div class="card-header">
                    <h4> ${component.name} </h4>
                    <a class="btn btn-primary" id="${component.hdcode}"> Add To Favorites </a>
                    <div class="card-body">
                    <img class="card-image" src="${component.image}"></img>
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
        
                    <div id="">HD Code: ${component.hdcode}</div>
        
                    <div id="${component.cost}">Price: $${component.cost}</div>
                    <div id="${component.reimbursement}">Typical Reimbursement: $${component.reimbursement}</div>
                    <div id="${component.percent}">${component.percent}</div>
                    <div id="${component.pdac}${component.hdcode}">PPDAC Approval: ${component.pdac}</div>
        
        
                    <a class="btn btn-primary" href="${component.link}" target="_blank">${component.linkname}</a>
                    <input type="button" class="additionSelectButton"></input>
        
                    </div>
                </div>
            </div>`;
            console.log("Created", component.card, "Cards");
        
        });
}

export {favorites};







// array.forEach(component => {
//     localStorage.setItem(`${component.name}`,JSON.stringify(component));
//     let data = JSON.parse(localStorage.getItem(`${component.name}`)); 
//     console.log(data);

// });







// 