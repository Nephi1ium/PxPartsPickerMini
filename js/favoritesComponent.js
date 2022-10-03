

function favorites(ident, keyed){


    console.log("step 1");
    console.log(keyed.id, "keyed object")

    localStorage.setItem(keyed.outerHTML, ident.outerHTML);

    let thisOne = localStorage.getItem("Card Item One");
    console.log(thisOne, "this one")

    document.getElementById('secondContainer').innerHTML = thisOne;
}

export {favorites};







// array.forEach(component => {
//     localStorage.setItem(`${component.name}`,JSON.stringify(component));
//     let data = JSON.parse(localStorage.getItem(`${component.name}`)); 
//     console.log(data);

// });







// 