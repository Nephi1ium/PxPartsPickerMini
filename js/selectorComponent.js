


// const itemComponent = 
// `

// `
// document.querySelector("#itemSelectorModal") = itemComponent;



let profile = document.getElementById("itemProfile");
profile.addEventListener("change", function() {
  console.log("Selected profile: " + profile.value);
});

let size = document.getElementById("itemSize");
let quantity = document.getElementById("itemQuantity");
let quantityOutput = document.getElementById("itemQuantityOutput");
let sizeOutput = document.getElementById("itemSizeOutput");
let profileOutput = document.getElementById("itemProfileOutput");

// let minus = document.getElementById("itemMinus");
// let plus = document.getElementById("itemPlus");

// minus.addEventListener("click", function(){
//   let currentValue = parseInt(quantity.value);
//   if(currentValue>0){
//     quantity.value = currentValue - 1;
//   }
// });

// plus.addEventListener("click", function(){
//   let currentValue = parseInt(quantity.value);
//   quantity.value = currentValue + 1;
// });

size.addEventListener("change", function() {
  console.log("Selected size: " + size.value);
  sizeOutput.innerHTML = "Selected Size: " + size.value;

});

quantity.addEventListener("change", function() {
  console.log("Selected quantity: " + quantity.value);
  quantityOutput.innerHTML = "Selected Quantity: " + quantity.value;
});

profile.addEventListener("change", function() {
    console.log("Selected Profile: " + size.value);
    profileOutput.innerHTML = "Selected Profile: " + profile.value;
  
  });