var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function openNav() {
    document.getElementById("mySidebar").style.width = "100%";


  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



  function cart(item){

    // let cartItem = item[0].id;
    // set a default cart item
  
      // console.log(item[0].id, "item object");
      // console.log(cartItem, "cartItem");
  // test the values
      cartArray = [];
  
      // let getStoredFavorite = JSON.parse(localStorage.getItem(cartItem));
      // console.log(getStoredFavorite, "retrieved cart item from local storage");
  
  //   let showCart = JSON.parse(localStorage.getItem("cart"));
  // console.log(showCart, "local storage cart array");
  // // retrieve the cart array back from local storage
  
  let showKneeCart = JSON.parse(localStorage.getItem("Knee cart item"));
  console.log(showKneeCart, "local storage cart display array");
  // retrieve the knee cart array back from local storage
  let showFootCart = JSON.parse(localStorage.getItem("Foot cart item"));
  console.log(showFootCart, "local storage cart display array");
  // retrieve the foot cart array back from local storage
  let showLinerCart = JSON.parse(localStorage.getItem("Liner cart item"));
  console.log(showLinerCart, "local storage cart display array");
  // retrieve the liner cart array back from local storage
      // retrieve the items
  
       cartArray.push(showKneeCart);
       console.log(cartArray, "local storage array with Knee cart item");
          // add the item to the cart array
          cartArray.push(showFootCart);
          console.log(cartArray, "local storage array with Knee and foot cart items");
             // add the item to the cart array
             cartArray.push(showLinerCart);
             console.log(cartArray, "local storage array with Knee foot and liner cart items");
                // add the item to the cart array
        
        localStorage.setItem("cart", JSON.stringify(cartArray))
          // push the cartArray to local storage
  
  console.log("THIS IS AS FAR AS MY MIND WILL LET ME GO")
  
        let getCart = JSON.parse(localStorage.getItem("cart"));
        console.log(getCart, "local storage cart array");
          // retrieve the stored array to check the values
  
          const noDupes = [...new Map(getCart.map((m) => [m.valAssign, m])).values()];
          console.log(noDupes, "eureka!");
        // now here turn the items into a set without duplicates
  
        localStorage.setItem("cart", JSON.stringify(noDupes))
        // push the cartArray to local storage
  
      let showCart = JSON.parse(localStorage.getItem("cart"));
        console.log(showCart, "local storage cart array");
      // retrieve the item from local storage
  
      let cartLocation = document.querySelector('#cartSection');
      // display the cart in the cart section section 
      document.getElementById('cartSection').innerHTML = "";
      // clear the cart window on addition of a new item
  
      showCart.forEach(component => {    
        cartLocation.innerHTML = cartLocation.innerHTML +
           `<div id="${component.valAssign}">
           <a class="kneeClick btn-small btn btn-primary" onclick="removeCart(${component.valAssign})"> Delete </a>
           <img class="cart-image" src="${component.image}"></img>
            <h4 > ${component.name} </h4>
  
          </div>`;
          console.log("Created", component.value, "Cards");
          
          });
      // display the retrieved array items in the "cart" 
  
      // allow deletion of cart items, remove item from array and then push the modified array back to local storage
     
    }