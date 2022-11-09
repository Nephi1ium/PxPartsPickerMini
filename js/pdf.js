

let subtfPDFDocument = document.querySelector("#genPDF");
let downPDFDocument = document.querySelector("#downPDF");



subtfPDFDocument.addEventListener("click", () => transFemoralProsthesis());
subtfPDFDocument.addEventListener("click", () => kneeComponentPDF());


downPDFDocument.addEventListener("click", () => downloadPDF());


let klevel = localStorage.getItem("klevel");
let clinicianName = localStorage.getItem("clinicianName");
let clinicLocation = localStorage.getItem("clinicLocation");
let patientName = localStorage.getItem("patientName");
let dateOfBirth = localStorage.getItem("dateOfBirth");
let encounterNumber = localStorage.getItem("encounterNumber");
let patientWeight = localStorage.getItem("patientWeight");
let patientHeight = localStorage.getItem("patientHeight");

let dateOfCreate = new Date();

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
          <li><div>Size</div></li>
          <li><div>Thickness</div></li>
          <li><div>Profile</div></li>
          <li><div>Color</div></li>
          <li><div>Quantity</div></li>
      </ul>
`

          });
    // how the array should be printed out from its core components
}
console.log(kneeComponentPDF, "Knee Component PDF")

function transFemoralProsthesis(){



// let storedArray = JSON.parse(localStorage.infoArr);

// let linersOnly = 

        const transFemPDF =
        `
            <div class="box">
            <div class="top">
                <div  >
                    <img class="title" src="../images/prosthetic_logo.jpg" />
                </div>

                <div class="information">
                    Encounter #: ${encounterNumber}<br />
                    Created: ${dateOfCreate.toLocaleDateString()} <br />
                    Due: Set from first page
                </div>

                <div class="information1">
                    Clinician Name: ${clinicianName}<br />
                    Billed to PCC: <br />
                    PCC Number: ${clinicLocation} <br />
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
                            <li><div>Date of Birth: ${dateOfBirth}</div></li>
    <!-- I want the age to show in parenthesis right next to the DOB -->
                            <li><div>Weight: ${patientWeight} lbs</div></li>
                            <li><div>Height: ${patientHeight} inches</div></li>
                            <li><div>Amputation Side</div></li>
                            <li><div>Amputation Level</div></li>
                            <li><div>K Level: ${klevel}</div></li>


                        </ul>
</div>
<div class=" item2">
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
<div id="kneeSection" class=" item3">

                <div class="heading">
                    <p>Knee Selection</p>
                </div>




</div>
<div class=" item4">
                <div class="heading">
                    <p>Liners</p>
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
<div class=" item5">
                <div class="heading cent">
                    <p> Socks </p>
                </div>
                
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>

<div class=" item6">    

                <div class="heading cent">
                    <p> Sheaths </p>
                </div>
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>
<div class="item7">
                <div class="heading ">
                    <p> Sleeves </p>
                </div>
                    <ul>
                        <li>Price</li>
                        <li></li>
                    </ul>
                
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
                    Encounter #: ${encounterNumber}<br />
                    Created: ${dateOfCreate.toLocaleDateString()} <br />
                    Due: Set from first page
                </div>

                <div class="information1">
                    Clinician Name: ${clinicianName}<br />
                    Billed to PCC: <br />
                    PCC Number: ${clinicLocation} <br />
                </div>
                
                <div class="information2"> 
                    Acme Corp.<br />
                    John Doe<br />
                    john@example.com
                </div>
            </div>


<div class="bodyMobile">
<div class="fonty item1">
				<div class="heading">
                    <p>Patient Name: ${patientName}</p>
				</div>
                        <ul>
                            <li><div>Date of Birth: ${dateOfBirth}</div></li>
    <!-- I want the age to show in parenthesis right next to the DOB -->
                            <li><div>Weight: ${patientWeight} lbs</div></li>
                            <li><div>Height: ${patientHeight} inches</div></li>
                            <li><div>Amputation Side</div></li>
                            <li><div>Amputation Level</div></li>
                            <li><div>K Level: ${klevel}</div></li>


                        </ul>
</div>
<div class="fonty item2">
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
<div class="fonty item3">

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
<div class="fonty item4">
                <div class="heading">
                    <p>Liners</p>
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
<div class="fonty item5">
                <div class="heading cent">
                    <p> Socks </p>
                </div>
                
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>

<div class="fonty item6">    

                <div class="heading cent">
                    <p> Sheaths </p>
                </div>
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>
<div class="fonty item7">
                <div class="heading ">
                    <p> Sleeves </p>
                </div>
                    <ul>
                        <li>Price</li>
                        <li></li>
                    </ul>
                
</div> 
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

// Old monolithic-style usage:
// html2pdf(element, opt);

}











//     storedArray.every(() => {
//         let tfPDF = document.querySelector('#tfPDFDoc');
        
//         tfPDF.innerHTML = tfPDF.innerHTML + `
//         <div class="box">
//         <div class="top">
//             <div  >
//                 <img class="title" src="../images/prosthetic_logo.jpg" />
//             </div>

//             <div class="information">
//                 Encounter #: ${storedArray[4]}<br />
//                 Created: ${dateOfCreate.toLocaleDateString()} <br />
//                 Due: Set from first page
//             </div>

//             <div class="information1">
//                 Clinician Name: ${storedArray[0]}<br />
//                 Billed to PCC: <br />
//                 PCC Number: ${storedArray[1]} <br />
//             </div>
            
//             <div class="information2"> 
//                 Acme Corp.<br />
//                 John Doe<br />
//                 john@example.com
//             </div>
//         </div>


// <div class="body">
// <div class="item1">
//             <div class="heading">
//                 <h5>Patient Name: ${storedArray[2]}</h5>
//             </div>
//                     <ul>
//                         <li><div>Date of Birth: ${storedArray[3]}</div></li>
// <!-- I want the age to show in parenthesis right next to the DOB -->
//                         <li><div>Weight: ${storedArray[6]} lbs</div></li>
//                         <li><div>Height: ${storedArray[7]} inches</div></li>
//                         <li><div>Amputation Side</div></li>
//                         <li><div>Amputation Level</div></li>
//                         <li><div>K Level: ${one}</div></li>


//                     </ul>
// </div>
// <div class=" item2">
//             <div class="heading">
//                 <h5>Foot Selection</h5>
//             </div>

//             <ul>
//                 <li><div>HD Part Number</div></li>
//                 <li><div>Manufacturer</div></li>
//                 <li><div>Name</div></li>
//                 <li><div>Size</div></li>
//                 <li><div>Thickness</div></li>
//                 <li><div>Profile</div></li>
//                 <li><div>Color</div></li>
//                 <li><div>Quantity</div></li>
//             </ul>
// </div>
// <div class=" item3">

//             <div class="heading">
//                 <h5>Knee Selection</h5>
//             </div>


//             <ul>
//                 <li><div>HD Part Number</div></li>
//                 <li><div>Manufacturer</div></li>
//                 <li><div>Name</div></li>
//                 <li><div>Size</div></li>
//                 <li><div>Thickness</div></li>
//                 <li><div>Profile</div></li>
//                 <li><div>Color</div></li>
//                 <li><div>Quantity</div></li>
//             </ul>

// </div>
// <div class=" item4">
//             <div class="heading">
//                 <h5>Liners</h5>
//             </div>

//             <ul>
//                 <li><div>HD Part Number</div></li>
//                 <li><div>Manufacturer</div></li>
//                 <li><div>Name</div></li>
//                 <li><div>Size</div></li>
//                 <li><div>Thickness</div></li>
//                 <li><div>Profile</div></li>
//                 <li><div>Color</div></li>
//                 <li><div>Quantity</div></li>
//             </ul>
    


// </div>
// <div class=" item5">
//             <div class="heading cent">
//                 <h5> Socks </h5>
//             </div>
            
//             <ul>
//                 <li>Price</li>
//                 <li></li>
//             </ul>
// </div>

// <div class=" item6">    

//             <div class="heading cent">
//                 <h5> Sheaths </h5>
//             </div>
//             <ul>
//                 <li>Price</li>
//                 <li></li>
//             </ul>
// </div>
// <div class="item7">
//             <div class="heading rght">
//                 <h5> Sleeves </h5>
//             </div>
//                 <ul>
//                     <li>Price</li>
//                     <li></li>
//                 </ul>
            
// </div> 
// </div>
// </div>`
    
//     })

// }


// answerCardBody.forEach(answer=> {
//     let ansCard = document.querySelector('#aflashcard')
    
//     ansCard.innerHTML = ansCard.innerHTML + `
//         <div class="card">
//             <div class="card-header">
//                 <h4> Answer </h4>
//                 <div class="card-body">
//                     <h4>${answer}</h4>
//                 </div>
//             </div>
//         </div>`
//         })

// The above code will be what is used to create the appropriate pdf document.