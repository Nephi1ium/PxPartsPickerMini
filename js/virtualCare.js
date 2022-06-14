



let clinicLocation = document.getElementById("clinLoc");
let patientName = document.getElementById("ptName");
let dateOfBirth = document.getElementById("ptDOB");
let encounterNumber = document.getElementById("encN");
// let kOne = document.getElementById("kOne").value;
// let kTwo = document.getElementById("kTwo").value;
// let kThree = document.getElementById("kThree").value;
// let kFour = document.getElementById("kFour").value;
let klevel = document.querySelector('input[name=kLevel]:checked');
let patientWeight = document.getElementById("ptWeight");
let patientHeight = document.getElementById("ptHeight");

localStorage.setItem('klevel',$('input[name="kLevel"]:checked').val());

localStorage.setItem('clinicianName', clinicianName.value);
localStorage.setItem('clinicLocation', clinicLocation.value);
localStorage.setItem('patientName', patientName.value);
localStorage.setItem('dateOfBirth', dateOfBirth.value);
localStorage.setItem('encounterNumber', encounterNumber.value);
localStorage.setItem('klevel', klevel.value);
localStorage.setItem('patientWeight', patientWeight.value);
localStorage.setItem('patientHeight', patientHeight.value);

let createVirtualPDF = document.querySelector("#genVirPDF");

createVirtualPDF.addEventListener("click", () => virtualDocumentPDF());


function virtualDocumentPDF(){

let ptName = localStorage.getItem("ptName");
let dob = localStorage.getItem("dob");
let clinicLocation = localStorage.getItem("clinicLocation");
let patientName = localStorage.getItem("patientName");
let dateOfBirth = localStorage.getItem("dateOfBirth");
let encounterNumber = localStorage.getItem("encounterNumber");
let patientWeight = localStorage.getItem("patientWeight");
let patientHeight = localStorage.getItem("patientHeight");

let dateOfCreate = new Date();

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
                    <h5>Patient Name: ${patientName}</h5>
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
                    <h5>Foot Selection</h5>
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
                    <h5>Knee Selection</h5>
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
                    <h5>Liners</h5>
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
                    <h5> Socks </h5>
                </div>
                
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>

<div class=" item6">    

                <div class="heading cent">
                    <h5> Sheaths </h5>
                </div>
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>
<div class="item7">
                <div class="heading rght">
                    <h5> Sleeves </h5>
                </div>
                    <ul>
                        <li>Price</li>
                        <li></li>
                    </ul>
                
</div> 
</div>
</div>`;}