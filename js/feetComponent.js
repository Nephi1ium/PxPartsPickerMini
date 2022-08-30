import { feetArray } from "../html/data/feetArray.js";


// This is the array modifier



// const chunkIntoN = (arr, n) => {
//     const size = Math.ceil(feetArray.length / n);
//     return Array.from({ length: n }, (v, i) =>
//       feetArray.slice(i * size, i * size + size)
//     );
//   }
  
//   let theGreen = chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4); // [[1, 2], [3, 4], [5, 6], [7]]
//   let theGrey = chunkIntoN([1, 2, 3, 4, 5, 6, 7], 9); // [[1, 2], [3, 4], [5, 6], [7]]
  
  
//   console.log(theGreen, "the green");
//   console.log(theGrey, "the grey");


// This is the array modifier 




















function feetCard(){


    let footCard = document.querySelector('#mainpageSectionforJS');


    feetArray.forEach(component => {    
        footCard.innerHTML = footCard.innerHTML +
         `<div class="card">
            <div class="card-header">
                <h4> ${component.name} </h4>
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
        });
    };


    export {feetCard};