// function makeDraggable(className) {
//     var elements = document.getElementsByClassName(className);
//     for (var i = 0; i < elements.length; i++) {
//       var element = elements[i];
//       element.addEventListener("mousedown", function(e) {
//         var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//         if (document.getElementById(this.id + "header")) {
//           document.getElementById(this.id + "header").onmousedown = dragMouseDown;
//         } else {
//           this.onmousedown = dragMouseDown;
//         }

        
  
//         function dragMouseDown(e) {
//           e = e || window.event;
//           e.preventDefault();
//           pos3 = e.clientX;
//           pos4 = e.clientY;
//           document.onmouseup = closeDragElement;
//           document.onmousemove = elementDrag;
//         }
  
//         function elementDrag(e) {
//           e = e || window.event;
//           e.preventDefault();
//           pos1 = pos3 - e.clientX;
//           pos2 = pos4 - e.clientY;
//           pos3 = e.clientX;
//           pos4 = e.clientY;
//           element.style.top = (element.offsetTop - pos2) + "px";
//           element.style.left = (element.offsetLeft - pos1) + "px";
//         }
  
//         function closeDragElement() {
//           document.onmouseup = null;
//           document.onmousemove = null;
//         }
//       });
//     }
//   }
  
//   makeDraggable("dragItem");


  function moveMap(){
    // Make the DIV element draggable:
dragElement(document.getElementById("linerModal"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Mover")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Mover").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  console.log("Map Can be Dragged");
}
  }
  window.addEventListener("load", () => {
    moveMap();
  });
