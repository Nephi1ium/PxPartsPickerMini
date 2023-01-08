



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addressInp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

let modalToChange = document.querySelector("#myModal")
// When the user clicks x then the modal should disappear
 function changeModal() {
    modalToChange.style.display = "none";
}

// This shows the map item
let clickShowMap = document.querySelector("#openGoogleModal")
// clickShowMap.addEventListener("click", () => maptopage());
clickShowMap.addEventListener("click", () => resetModalToShow());

// This resets the modal back to its initial unseen, but loaded configuraiton.
function resetModalToShow(){
if( modalToChange.style.display = "none") {
    modalToChange.style.display = "initial"
}
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}








// function maptopage(){
// let googleMap = 
// `
//     <div class="pac-card" id="pac-card">
//       <div>
//         <div id="title">Autocomplete search</div>

    
//         <button id="closeGoogleModal"> X </button>


//         <div id="type-selector" class="pac-controls">
//           <input
//             type="radio"
//             name="type"
//             id="changetype-all"
//             checked="checked"
//           />
//           <label for="changetype-all">All</label>

//           <input type="radio" name="type" id="changetype-establishment" />
//           <label for="changetype-establishment">establishment</label>

//           <input type="radio" name="type" id="changetype-address" />
//           <label for="changetype-address">address</label>

//           <input type="radio" name="type" id="changetype-geocode" />
//           <label for="changetype-geocode">geocode</label>

//           <input type="radio" name="type" id="changetype-cities" />
//           <label for="changetype-cities">(cities)</label>

//           <input type="radio" name="type" id="changetype-regions" />
//           <label for="changetype-regions">(regions)</label>
//         </div>
//         <br />
//         <div id="strict-bounds-selector" class="pac-controls">
//           <input type="checkbox" id="use-location-bias" value="" checked />
//           <label for="use-location-bias">Bias to map viewport</label>

//           <input type="checkbox" id="use-strict-bounds" value="" />
//           <label for="use-strict-bounds">Strict bounds</label>
//         </div>
//       </div>
//       <div id="pac-container">
//         <input id="pac-input" type="text" placeholder="Enter a location" />
//       </div>
//     </div>
//     <div id="map"></div>
//     <div id="infowindow-content">
//       <span id="place-name" class="title"></span><br />
//       <span id="place-address"></span>
//     </div>
//     `
//     document.getElementById("googleMap").innerHTML = googleMap;

    const closeModal = document.querySelector("#closeGoogleModal");
closeModal.addEventListener("click", () => changeModal());



      /**
       * @license
       * Copyright 2019 Google LLC. All Rights Reserved.
       * SPDX-License-Identifier: Apache-2.0
       */
      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
      // function initMap() {
      //   const map = new google.maps.Map(document.getElementById("map"), {
      //     center: { lat: 35.2271, lng: -80.8431 },
      //     zoom: 13,
      //     mapTypeControl: false,
      //   });
      //   const card = document.getElementById("pac-card");
      //   const input = document.getElementById("pac-input");
      //   const biasInputElement = document.getElementById("use-location-bias");
      //   const strictBoundsInputElement =
      //     document.getElementById("use-strict-bounds");
      //   const options = {
      //     fields: ["formatted_address", "geometry", "name"],
      //     strictBounds: false,
      //     types: ["establishment"],
      //   };

      //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);

      //   const autocomplete = new google.maps.places.Autocomplete(
      //     input,
      //     options
      //   );

      //   // Bind the map's bounds (viewport) property to the autocomplete object,
      //   // so that the autocomplete requests use the current map bounds for the
      //   // bounds option in the request.
      //   autocomplete.bindTo("bounds", map);

      //   const infowindow = new google.maps.InfoWindow();
      //   const infowindowContent = document.getElementById("infowindow-content");

      //   infowindow.setContent(infowindowContent);

      //   const marker = new google.maps.Marker({
      //     map,
      //     anchorPoint: new google.maps.Point(0, -29),
      //   });

      //   autocomplete.addListener("place_changed", () => {
      //     infowindow.close();
      //     marker.setVisible(false);

      //     const place = autocomplete.getPlace();

      //     if (!place.geometry || !place.geometry.location) {
      //       // User entered the name of a Place that was not suggested and
      //       // pressed the Enter key, or the Place Details request failed.
      //       window.alert(
      //         "No details available for input: '" + place.name + "'"
      //       );
      //       return;
      //     }

      //     // If the place has a geometry, then present it on a map.
      //     if (place.geometry.viewport) {
      //       map.fitBounds(place.geometry.viewport);
      //     } else {
      //       map.setCenter(place.geometry.location);
      //       map.setZoom(17);
      //     }

      //     marker.setPosition(place.geometry.location);
      //     marker.setVisible(true);
      //     infowindowContent.children["place-name"].textContent = place.name;
      //     infowindowContent.children["place-address"].textContent =
      //       place.formatted_address;
      //     infowindow.open(map, marker);
      //   });

      //   // Sets a listener on a radio button to change the filter type on Places
      //   // Autocomplete.
      //   function setupClickListener(id, types) {
      //     const radioButton = document.getElementById(id);

      //     radioButton.addEventListener("click", () => {
      //       autocomplete.setTypes(types);
      //       input.value = "";
      //     });
      //   }

      //   setupClickListener("changetype-all", []);
      //   setupClickListener("changetype-address", ["address"]);
      //   setupClickListener("changetype-establishment", ["establishment"]);
      //   setupClickListener("changetype-geocode", ["geocode"]);
      //   setupClickListener("changetype-cities", ["(cities)"]);
      //   setupClickListener("changetype-regions", ["(regions)"]);
      //   biasInputElement.addEventListener("change", () => {
      //     if (biasInputElement.checked) {
      //       autocomplete.bindTo("bounds", map);
      //     } else {
      //       // User wants to turn off location bias, so three things need to happen:
      //       // 1. Unbind from map
      //       // 2. Reset the bounds to whole world
      //       // 3. Uncheck the strict bounds checkbox UI (which also disables strict bounds)
      //       autocomplete.unbind("bounds");
      //       autocomplete.setBounds({
      //         east: 180,
      //         west: -180,
      //         north: 90,
      //         south: -90,
      //       });
      //       strictBoundsInputElement.checked = biasInputElement.checked;
      //     }

      //     input.value = "";
      //   });
      //   strictBoundsInputElement.addEventListener("change", () => {
      //     autocomplete.setOptions({
      //       strictBounds: strictBoundsInputElement.checked,
      //     });
      //     if (strictBoundsInputElement.checked) {
      //       biasInputElement.checked = strictBoundsInputElement.checked;
      //       autocomplete.bindTo("bounds", map);
      //     }

      //     input.value = "";
      //   });
      // }
    //   initMap();

    //  window.initMap = initMap;
// }




// This will let me delay execution of a function. 
// setTimeout(()=>{function_body}, time in milliseconds);