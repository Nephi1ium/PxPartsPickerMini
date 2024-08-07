

let subtfPDFDocument = document.querySelector("#genPDF");
let downPDFDocument = document.querySelector("#downPDF");



subtfPDFDocument.addEventListener("click", () => transFemoralProsthesis());
subtfPDFDocument.addEventListener("click", () => kneeComponentPDF());
subtfPDFDocument.addEventListener("click", () => footComponentPDF());
subtfPDFDocument.addEventListener("click", () => linerComponentPDF());
subtfPDFDocument.addEventListener("click", () => pxCompComponentPDF());
subtfPDFDocument.addEventListener("click", () => pxCompKSComponentPDF());
subtfPDFDocument.addEventListener("click", () => pxCompSockComponentPDF());
subtfPDFDocument.addEventListener("click", () => resizeFont());



downPDFDocument.addEventListener("click", () => downloadPDF());


let footColor = localStorage.getItem("Foot Color");
let footSize = localStorage.getItem("Foot Size");
let footProfile = localStorage.getItem("Foot Profile");
let linerSize = localStorage.getItem("Liner Size");
let linerProfile = localStorage.getItem("Liner Profile");
\
let sleeveColor = localStorage.getItem("Sleeve Color");
let sleeveThickness = localStorage.getItem("Sleeve Thickness");
let sleeveCircumference = localStorage.getItem("Sleeve Circumference");

console.log(sleeveQuantity);
console.log(sleeveColor);
console.log(sleeveThickness);
console.log(sleeveCircumference);

let dateOfCreate = new Date();


function resizeFont() {
    var container = document.getElementById("item5pxCompInfo");
    var content = document.querySelector(".resizeFont");
    var maxFontSize = 30;
    var minFontSize = 10;
  
    console.log(container, content);

    if (!container || !content) {
        console.log(container, content, "error finding the container or content")
        return;
      }

    function resize() {
      var fontSize = minFontSize + (container.offsetWidth * container.offsetHeight) / (content.offsetWidth * content.offsetHeight) * (maxFontSize - minFontSize);
      content.style.fontSize = fontSize + "px";
    }
  
    resize();
  };
  




function kneeComponentPDF(){
    let kneeChoice = JSON.parse(localStorage.getItem("Knee cart item"));
    console.log(kneeChoice, "locally stored knee item choice");
    // the array for the knee item
    console.log(kneeChoice.length, "Knee Array Length");

    let kneeLocation = document.querySelector('#kneeSection');

    kneeChoice.forEach(component => {
        kneeLocation.innerHTML = kneeLocation.innerHTML +
   
         
        `
    <ul>
          <li><div>HD Part Number: ${component.hdcode} </div></li>
          <li><div>Manufacturer: ${component.manufacturer} </div></li>
          <li><div>Name: ${component.name}</div></li>
          <li><div>Quantity: ${kneeQuantity}</div></li>
      </ul>
`

          });
    // how the array should be printed out from its core components
}
console.log(kneeComponentPDF, "Knee Component PDF")


function footComponentPDF(){
    let footChoice = JSON.parse(localStorage.getItem("Foot cart item"));
    console.log(footChoice, "locally stored foot item choice");
    // the array for the foot item
    console.log(footChoice.length, "Foot Array Length");

    let footLocation = document.querySelector('#footSection');

    footChoice.forEach(component => {
        

        let pxCompChoice = JSON.parse(localStorage.getItem("Foot Quantity"));
        console.log(pxCompChoice, "locally stored pxComp item choice");
        // item retrieved



        footLocation.innerHTML = footLocation.innerHTML +
   
        `
        <ul>
          <li><div>Manufacturer: ${component.manufacturer} </div></li>
          <li><div>Name: ${component.name}</div></li>
          <li><div>Size: ${footSize}</div></li>
          <li><div>Color: ${footColor}</div></li>
          <li><div>Quantity: ${pxCompChoice}</div></li>
          <li><div>Profile: ${footProfile}</div></li>

      </ul>
`

          });
    // how the array should be printed out from its core components
}
console.log(footComponentPDF, "Foot Component PDF") 

function linerComponentPDF(){
    let linerChoice = JSON.parse(localStorage.getItem("Liner cart item"));
    console.log(linerChoice, "locally stored liner item choice");
    // the array for the liner item
    console.log(linerChoice.length, "Liner Array Length");

    let linerLocation = document.querySelector('#linerSection');

    linerChoice.forEach(component => {
        linerLocation.innerHTML = linerLocation.innerHTML +
   
         
        `
        <ul>
          <li><div>Manufacturer: ${component.manufacturer} </div></li>
          <li><div>Name: ${component.name}</div></li>
          <li><div>Size</div></li>
          <li><div>Color</div></li>
          <li><div>Quantity</div></li>
      </ul>
`

          });
    // how the array should be printed out from its core components
}
console.log(linerComponentPDF, "Liner Component PDF") 

function pxCompSockComponentPDF(){

    let pxCompChoice = JSON.parse(localStorage.getItem("Socks Favorites"));
    console.log(pxCompChoice, "locally stored pxComp item choice");
    // the array for the pxComp item
    console.log(pxCompChoice.length, "pxComp Array Length");

    let pxCompLocation = document.querySelector('#item5SSInfo');

    pxCompChoice.forEach(component => {

    let item1 = `${component.valAssign}CompChoice`;
    // item to be retrieved from local storage
    let pxCompChoice = JSON.parse(localStorage.getItem(item1));
    console.log(pxCompChoice, "locally stored pxComp item choice");
    // item retrieved

    console.log(item1, "item 1 CompChoice");


        pxCompLocation.innerHTML = pxCompLocation.innerHTML +
   
         
        `
        <ul>
        <li><div>Name: ${component.name}</div></li>
        <li><div>Quantity: ${pxCompChoice}</div></li>
      </ul>
`

          });
    // how the array should be printed out from its core components
}
console.log(pxCompSockComponentPDF, "pxComp Component PDF") 

function pxCompKSComponentPDF(){
    let pxCompKSChoice = JSON.parse(localStorage.getItem("CompKS cart item"));
    console.log(pxCompKSChoice, "locally stored pxCompKS item choice");
    // the array for the pxCompSS item
    console.log(pxCompKSChoice.length, "pxCompKS Array Length");

    let pxCompKSLocation = document.querySelector('#item5KSInfo');

    pxCompKSChoice.forEach(component => {
        pxCompKSLocation.innerHTML = pxCompKSLocation.innerHTML +
   
         
        `
        <ul>
        <li>
            <div>Name: ${component.name ? component.name : ''}</div>
        </li>
        <li>
            <div>Size: ${component.circumference ? component.circumference : ''}</div>
        </li>
        <li>
            <div>Thickness: ${component.thickness ? component.thickness : ''}</div>
        </li>
        <li>
            <div>Color: ${component.color ? component.color : ''}</div>
        </li>
        <li>
            <div>Quantity: ${component.quantity ? component.quantity : ''}</div>
        </li>
      </ul>
`

          });
    // how the array should be printed out from its core components
}
console.log(pxCompKSComponentPDF, "pxCompSS Component PDF") 

function pxCompComponentPDF(){

    let pxCompChoice = JSON.parse(localStorage.getItem("PxComp Items"));
    console.log(pxCompChoice, "locally stored pxComp item choice");
    // the array for the pxComp item
    console.log(pxCompChoice.length, "pxComp Array Length");

    let pxCompLocation = document.querySelector('.resizeFont');

    pxCompChoice.forEach(component => {

    let item1 = `${component.valAssign}CompChoice`;
    // item to be retrieved from local storage
    let pxCompChoice = JSON.parse(localStorage.getItem(item1));
    console.log(pxCompChoice, "locally stored pxComp item choice");
    // item retrieved

    console.log(item1, "item 1 CompChoice");


        pxCompLocation.innerHTML = pxCompLocation.innerHTML +
   
         
        `
        <ul>
        <li class="pxCompKSInfoList"><div>${component.name}, ${pxCompChoice}</div></li>

      </ul>
`

          });
    // how the array should be printed out from its core components
}
console.log(pxCompComponentPDF, "pxComp Component PDF")




function transFemoralProsthesis(){



// let storedArray = JSON.parse(localStorage.infoArr);

// let linersOnly = 

        const transFemPDF =
        `
            <div class="box">
            <div class="top">
                <div  >
                    <img class="title" src="../images/icons/plus.png" />
                </div>

                <div class="information">
                    Created: ${dateOfCreate.toLocaleDateString()} <br />
                </div>

                <div class="information1">
                    Placeholder Info
                </div>
                
                <div class="information2"> 
                    Acme Corp.<br />
                    John Doe<br />
                    john@example.com
                </div>
            </div>


<div class="body">
<div class="item1">
				<div class="heading">
                    <p>Patient Name: ${patientName}</p>
				</div>
                        <ul>
    <!-- I want the age to show in parenthesis right next to the DOB -->

                            <li><div>Amputation Side</div></li>
                            <li><div>Amputation Level</div></li>



                        </ul>
</div>
<div class="" id="footSection">
				<div class="heading">
                    <p>Foot Selection</p>
				</div>


</div>
<div id="kneeSection" class=" item3">

                <div class="heading">
                    <p>Knee Selection</p>
                </div>




</div>
<div id="linerSection" class=" item4">
                <div class="heading">
                    <p>Liner Selection</p>
                </div>      
</div>
<div id="pxCompSection" class=" item5">
    <div id="headingComp" class="componentHeading heading">
    Component Selection
    </div>
    <div id="item5SS" class="">
    <p>Socks and Sheaths</p>
    <div id="item5SSInfo"></div>
    </div>
    <div id="item5KS" class="">
    <p>Knee Sleeves</p>
    <div id="item5KSInfo"></div>

    </div>
    <div id="item5Comp" class="">
    <p>Parts & Components</p>
    <div id="item5pxCompInfo">
        <div class="resizeFont">
        </div>
    </div>

    </div>


</div>

</div>
</div>`;
        
        
document.getElementById("tfPDFDoc").innerHTML = transFemPDF;
    


const transFemPDFMobile =
        `
            <div class="boxMobile">
            <div class="topMobile">
                <div  >
                    <img class="title" src="../images/prosthetic_logo.jpg" />
                </div>

                <div class="information">
                    Created: ${dateOfCreate.toLocaleDateString()} <br />
                </div>

                <div class="information1">
Placeholder Information
                </div>
                
                <div class="information2"> 
                    Acme Corp.<br />
                    John Doe<br />
                    john@example.com
                </div>
            </div>


<div class="bodyMobile">
<div id="mDemographicsPDF" class="fonty item1 ">
				<div class="heading heading.cent">
                    <p>Patient Name: ${patientName}</p>
				</div>
                        <ul>
    <!-- I want the age to show in parenthesis right next to the DOB -->

                            <li><div>Amputation Side</div></li>
                            <li><div>Amputation Level</div></li>



                        </ul>
</div>
<div id="mFeetPDF" class="fonty item2">
				<div class="heading">
                    <p>Foot Selection</p>
				</div>

                <ul>
                    <li><div>HD Part Number</div></li>
                    <li><div>Manufacturer</div></li>
                    <li><div>Name</div></li>
                    <li><div>Size</div></li>
                    <li><div>Thickness</div></li>
                    <li><div>Profile</div></li>
                    <li><div>Color</div></li>
                    <li><div>Quantity</div></li>
                </ul>
</div>
<div id="mKneesPDF" class="fonty item3">

                <div class="heading">
                    <p>Knee Selection</p>
                </div>


                <ul>
                    <li><div>HD Part Number</div></li>
                    <li><div>Manufacturer</div></li>
                    <li><div>Name</div></li>
                    <li><div>Size</div></li>
                    <li><div>Thickness</div></li>
                    <li><div>Profile</div></li>
                    <li><div>Color</div></li>
                    <li><div>Quantity</div></li>
                </ul>

</div>
<div id="mLinersPDF" class="fonty item4">
                <div class="heading">
                    <p>Liners</p>
                </div>

                <ul >
<li id="footBuilderSelection"> </li>
                </ul>
        


</div>
<aside id="mobileComponentsSection">
<header class="heading" id="mobileCompHeader"> Components Section</header>
<div id="mSocksPDF" class="fonty item5Mobile">
                <div class="heading cent">
                    <p> Socks and Sheaths </p>
                </div>
                
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>

<div id="mSleevesPDF" class="fonty item7">
                <div class="heading ">
                    <p> Sleeves </p>
                </div>
                    <ul>
                        <li>Price</li>
                        <li></li>
                    </ul>
                
</div> 
<div id="mComponentsPDF" class="fonty item8">
                <div class="heading ">
                    <p> Components </p>
                </div>
                    <ul>
                        <li>Price</li>
                        <li></li>
                    </ul>
                
</div> 
</aside>
</div>
</div>`;
        
        
document.getElementById("tfPDFDocMobile").innerHTML = transFemPDFMobile;
    
};



function downloadPDF (){
    // var element = document.getElementById('PDFDocument');
    // element.style.display = 'block'  
    // html2pdf(element);

    
    
    // const element = document.getElementById('PDFDocument');

    const element = document.getElementById('tfPDFDoc');
let opt = {
  margin:       [.2,0,0,.2],
  filename:     `${patientName}_Order.pdf`,
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2, scrollX: 0, scrollY: 0 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  
};

// New Promise-based usage:
html2pdf().set(opt).from(element).save();


}




