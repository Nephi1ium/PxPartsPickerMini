


// For this one, set a series of parameters that have to be met in order for the specific function to execute, and the particular PDF document be generated.
// ie. 

// const { default: jsPDF } = require("jspdf");

// function linerReplacement(){
//     let x = document.getElementById(#SOMEID);

//     if (x){
//         return(`<div>This is the start of the PDF created to show all the pertinent information as well as the liners, but only the liners. `)
//     }
// }

// function getLocalStoreData(){
//     let firstArray = JSON.parse(localStorage.infoArr)
//     console.log(firstArray);
// }

let subtfPDFDocument = document.querySelector("#genPDF");
let downPDFDocument = document.querySelector("#downPDF");



subtfPDFDocument.addEventListener("click", () => transFemoralProsthesis());
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
<div class=" item3">

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
                <div class="heading rght">
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
    
}



function downloadPDF (){
    var element = document.getElementById('PDFDocument');
    element.style.display = 'block'  
    html2pdf(element);

}


// html2canvas(document.body).then(function(canvas) {
//     // Export the canvas to its data URI representation
//     var base64image = canvas.toDataURL("image/png");

//     // Open the image in a new window
//     window.open(base64image , "_blank");
// });



// html2canvas(document.querySelector("#tfPDFDoc")).then(canvas => {
//     let base64image = canvas.toDataURL("image/png");

//     window.open(base64image , "_blank");

    // html2canvas(document.body).then(function(canvas) {
    //     // Export the canvas to its data URI representation
    //     var base64image = canvas.toDataURL("image/png");
    
    //     // Open the image in a new window
    //     window.open(base64image , "_blank");
    // });
//     // document.body.appendChild(canvas);

    // html2canvas(document.body).then(function(canvas) {
    //     // Export the canvas to its data URI representation
    //     var base64image = canvas.toDataURL("image/png");
    
    //     // Open the image in a new window
    //     window.open(base64image , "_blank");
    // html2canvas(document.body).then(function(canvas) {
    //     document.body.appendChild(canvas);
    //    });
    //    html2canvas(document.getElementById('tfPDFDoc')).then(function(canvas) {
    //     document.body.appendChild(canvas);
        
        // html2canvas(document.getElementById('tfPDFDoc')).then(function(canvas) {
        //     document.getElementById("image").src= canvas.toDataURL();        
// const doc = new jsPDF();
// doc.save(`${patientName}.pdf`);
// let HTMLPDF = 
    // let node = document.getElementById('PDFDocument');

    // domtoimage.toPng(node).then(function (dataUrl) {
    //     let img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
    // }).catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    // });

















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