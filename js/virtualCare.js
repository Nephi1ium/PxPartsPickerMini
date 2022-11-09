

// let kOne = document.getElementById("kOne").value;
// let kTwo = document.getElementById("kTwo").value;
// let kThree = document.getElementById("kThree").value;
// let kFour = document.getElementById("kFour").value;
// let klevel = document.querySelector('input[name=kLevel]:checked');

// let patientName = document.getElementById("patientName"); DUPLICATE
// let dob = document.getElementById("dob"); DUPLICATE
// let clinicLocation = document.getElementById("clinicLocation");

// localStorage.setItem('z511', z511.value);
// localStorage.setItem('z512', z512.value);
// localStorage.setItem('z612', z612.value);
// localStorage.setItem('z611', z611.value);



// localStorage.setItem('klevel',$('input[name="kLevel"]:checked').val());

// localStorage.setItem('clinicianName', clinicianName.value);
// localStorage.setItem('clinicLocation', clinicLocation.value);
// localStorage.setItem('patientName', patientName.value);
// localStorage.setItem('dateOfBirth', dateOfBirth.value);
// localStorage.setItem('encounterNumber', encounterNumber.value);
// localStorage.setItem('klevel', klevel.value);
// localStorage.setItem('patientWeight', patientWeight.value);
// localStorage.setItem('patientHeight', patientHeight.value);
let savePatientInfoVV = document.querySelector("#saveInfo");
let createVirtualPDF = document.querySelector("#genVirPDF");
let PDFDownloaded = document.querySelector("#VVPDFDown");

savePatientInfoVV.addEventListener("click", () => savePatientInfo());
savePatientInfoVV.addEventListener("click", () => showButtons());

createVirtualPDF.addEventListener("click", () => virtualDocumentPDF());

PDFDownloaded.addEventListener("click", () => downloadPDF());


// console.log(patientName);

function savePatientInfo(){
    let ptName = document.getElementById("ptName");
    localStorage.setItem("ptName", ptName.value);

    let drName = document.getElementById("drName");
    localStorage.setItem("drName", drName.value);

    let dateOfAmp = document.getElementById("dateOfAmp");
    localStorage.setItem("dateOfAmp", dateOfAmp.value);

    let ampLoc = document.getElementById("ampLoc");
    localStorage.setItem("ampLoc", ampLoc.value);
    
        // let dob = document.getElementById("dob");
    // localStorage.setItem("dob", dob.value);
    
    let icd = document.querySelector('input[name=icd]:checked');
    localStorage.setItem('icd', icd.value);

    let ROM = document.querySelector('select#rom');
    localStorage.setItem("rom", ROM.value);

    let klevel = document.querySelector('select#klevel');
    localStorage.setItem("klevel", klevel.value);

    let strengthLevel = document.querySelector('select#strengthLevel');
    localStorage.setItem("strengthLevel", strengthLevel.value);

    let skinCondition = document.querySelector('select#skinCondition');
    localStorage.setItem("skinCondition", skinCondition.value);

    let reccPx = document.querySelector('select#reccPx');
    localStorage.setItem("reccPx", reccPx.value);

    let changeReas = document.querySelector('select#changeReas');
    localStorage.setItem("changeReas", changeReas.value);
    
    let timeUsed = document.querySelector('select#timeUsed');
    localStorage.setItem("timeUsed", timeUsed.value);

    let socksUsed = document.querySelector('select#socksUsed');
    localStorage.setItem("socksUsed", socksUsed.value);

    let knee = document.getElementById("knee");
    localStorage.setItem("knee", knee.value);

    let foot = document.getElementById("foot");
    localStorage.setItem("foot", foot.value);

    let addNotes = document.getElementById("addNotes");
    localStorage.setItem("addNotes", addNotes.value);
    
    let willUse = document.querySelector('input[name=willUse]:checked');
    localStorage.setItem('willUse', willUse.value);

    let strDes = document.querySelector('input[name=strDes]:checked');
    localStorage.setItem('strDes', strDes.value);

    const confirmSaved = `<p>Information Saved</p>`
    document.getElementById("infoSaved").innerHTML = confirmSaved;


      // retrieve the stored array to check the values

    
}

function showButtons(){
    document.getElementById("genVirPDF").style.cssText = "display: flex; width: 4vm";
    document.getElementById("VVPDFDown").style.cssText = "display: flex; width: 4vm";
}



function virtualDocumentPDF(){

    
    let ptNameData = localStorage.getItem("ptName");
    let clinicianName = localStorage.getItem("clinicianName");
    let drNameData = localStorage.getItem("drName")
    let clinicLocation = localStorage.getItem("clinicLocation");
    let patientName = localStorage.getItem("patientName");
    let dateOfAmp = localStorage.getItem("dateOfAmp")
    let encounterNumber = localStorage.getItem("encounterNumber");
    let patientWeight = localStorage.getItem("patientWeight");
    let patientHeight = localStorage.getItem("patientHeight");
    let ampLoc = localStorage.getItem("ampLoc");
    let reccPx = localStorage.getItem("reccPx");
    let skinCondition = localStorage.getItem("skinCondition");
    let strengthLevel = localStorage.getItem("strengthLevel");
    let ROM = localStorage.getItem("ROM");
    let timeUsed = localStorage.getItem("timeUsed");
    let socksUsed = localStorage.getItem("socksUsed");
    let foot = localStorage.getItem("foot");
    let knee = localStorage.getItem("knee");
    let addNotes = localStorage.getItem("addNotes");
    // let dob = localStorage.getItem("dob");
    // console.log(dob);
    const kneeItem = `<p> Patient will benefit from ${knee}.</p>`;

    const footItem = `<p> Patient will benefit from ${foot}.</p>`
    let dateOfBirth = localStorage.getItem("dateOfBirth");
    let dateOfCreate = new Date();





        const vvPDF =
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
                    PCC Number: ${clinicLocation} <br />
                    // Clinic Address- Field in HTML
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
                <h5> Dear Doctor: ${drNameData},</h5>
                

                    <h5>Regarding: ${patientName}</h5>
				</div>
                        <ul>
                            <li><div>Date of Birth: ${dateOfBirth}</div></li>
    <!-- I want the age to show in parenthesis right next to the DOB -->
                            <li><div>Weight: ${patientWeight} lbs</div></li>
                            <li><div>Height: ${patientHeight} inches</div></li>
                            <li><div>K Level: ${klevel}</div></li>


                        </ul>
</div>
<div class=" item2">
				<div class="heading">
                    <h5>Foot Selection</h5>
				</div>

                <ul>
                    <li><div>Amputation Date: ${dateOfAmp}</div></li>
                    <li><div>Location of Amputation: ${ampLoc} </div></li>
                    <li><div>Prosthetic Reccomendation: ${reccPx}</div></li>
                    <li><div>Reason for Change: ${changeReas}</div></li>
                    <li><div>Skin Condition: ${skinCondition}</div></li>
                    <li><div>Strength Level: ${strengthLevel}</div></li>
                    <li><div>Range of Motion: ${ROM}</div></li>
                    <li><div>Patient has historically used their prosthesis an average of: ${timeUsed},
                    while managing the socket fit with ${socksUsed}.
                    <p>
                    ${kneeItem}
                    ${footItem}

                     </p>
                     <p> ${addNotes} </p>
                    </div></li>

                    </ul>
</div>                
</div> 
</div>
</div>`;

document.getElementById("vvPDFDoc").innerHTML = vvPDF;

}

function downloadPDF (){
    var element = document.getElementById('PDFDocument');
    element.style.display = 'block'  
    html2pdf(element);

}