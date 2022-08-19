/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    let id = document.getElementById("itemNavigator");
    console.log(id);
    document.getElementById("itemNavigator").style.cssText = "width: 250px";
    document.getElementById("main").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "#1a1919";
  }
//   document.getElementById("fricExtMan").style.cssText = "display: flex; padding: 25px; margin: 25px;"

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("itemNavigator").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

const choiceCards = []

  function addCard () {
    let cardItem = document.getElementsByClassName("choice");



    
  }

  // document.body.addEventListener('click', closeNav, true); 