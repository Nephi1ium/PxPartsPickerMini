

// window.onload=sideVirtInfo();
window.onload=showStoredValue();


function sideVirtInfo(){



    const sideVirtSection = 
    `
    <form class="sideCorrections">
    <ul>
        <li>
            <label for="drName"> Doctors Name:</label>
            <input type="text" id="drName" name="drName" required>
            
        </li>
        <li>
            <h5></h5>

            <label for="ptName"> Patient Name:</label>
            <input type="text" id="ptName" name="ptName" required> 

        </li>
        <li>
            <h5></h5>

            <label for="dateOfAmp"> Date of Amputation: </label>
            <input type="date" name="dateOfAmp" id="dateOfAmp" required>

        </li>
        <li>
            <h5></h5>
            <label for="ampLoc"> Location of Amputation (Hospital):</label>
            <input type="text" id="ampLoc" name="ampLoc" required>
            
        </li>
        <li>
            <h5></h5>

            <section class="recc" id="recc"> 
                <label for="reccPx"> Prosthetic Recommendation:</label>
                    <select class="form-control" id="reccPx">
                    <option value=''></option>
                    <option value="New Prosthesis ">New Prosthesis</option>
                    <option value="Socket Replacement with Supplies">Socket Replacement with Supplies</option>
                    <option value="Prosthetic Componenetry Replacement">Prosthetic Componentry Replacement</option>
                    </select>
            </section>
            
        </li>
        <li>
            <h5></h5>

            <section class="change" id="change"> 
                <label for="changeReas"> Reason for Change:</label>
                    <select class="form-control" id="changeReas">
                    <option value=''></option>
                    <option value="Significant change in Patient's weight">Significant change in Patient's weight</option>
                    <option value="Socket does not fit patient due to change in residual limb and further">Socket does not fit patient due to change in residual limb and further</option>
                    <option value="Functional level change">Functional level change</option>
                    <option value="Patient is a new prosthetic wearer">Patient is a new prosthetic wearer</option>
                    <option value="Components are worn beyond economical repair and no longer ">Components are worn beyond economical repair and no longer </option>
                    </select>
            </section>
        </li>
        <li>
            <h5></h5>

            <section class="ampCause" id="ampCause"> 
                <label for="ampCauses"> Cause of Amputation</label>
                    <select class="form-control" id="ampCauses">
                    <option value=''></option>
                    <option value="Cancer">Cancer</option>
                    <option value="Congenital">Congenital</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Infection/Wound">Infection/Wound</option>
                    <option value="MVA">MVA</option>
                    <option value="Trauma">Trauma</option>
                    </select>
            </section>
        </li>
        <li>
            <h5></h5>
            <section class="icdTen" id="icdTen">  
                <label for="z511">                            Z89.511 Acquired absence of right leg below knee
                    <input type="radio" value="Z89.511 Acquired absence of right leg below knee" class="radio"name="icd" id="z511">
                    </input>
                </label>             

                    <label for="z512">                            Z89.512 Acquired absence of left leg below knee

                    <input type="radio" value="Z89.512 Acquired absence of left leg below knee" class="radio"name="icd" id="z512">
                    </input>
                </label>             

                    <label for="z611">                            Z89.611 Acquired absence of left leg above knee

                    <input type="radio" value="Z89.611 Acquired absence of left leg above knee" class="radio" name="icd" id="z611">
                    </input>
                </label>             

                    <label for="z612">                            Z89.612 Acquired absence of right leg above knee

                    <input type="radio" value="Z89.612 Acquired absence of right leg above knee" class="radio"name="icd" id="z612">
                    </input>
                </label> 
            </section>
        </li>
        <li>
            <h5></h5>

            <section class="demographic" id="demographic"> 
                <label for="skinCondition"> Skin Condition</label>
                    <select class="form-control" id="skinCondition">
                    <option value=''></option>
                    <option value="Intact">Intact</option>
                    <option value="Average">Average</option>
                    <option value="Soft">Soft</option>
                    <option value="Firm">Firm</option>
                    <option value="Redundant">Redundant</option>
                    <option value="Redundant with Signs">Redundant with Signs</option>
                    </select>
            </section>
        </li>
        <li>
            <h5></h5>

            <section class="strength" id="strength"> 
                <label for="strengthLevel"> Strength Level </label>
                    <select class="form-control" id="strengthLevel">
                    <option></option>
                    <option value="5">5</option>
                    <option value="4/5">4/5</option>
                    <option value="3/5">3/5</option>
                    <option value="2/5">2/5</option>
                    <option value="1/5">1/5</option>
                    <option value="0">0</option>
                    </select>
            </section>
        </li>
        <li>
            <h5></h5>

            <section class="k-level" id="k-level">
                <label for="klevel"> K-Level </label>
                    <select class="form-control" id="klevel">
                    <option></option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                    <option value="0">0</option>
                    </select>
        </section>
        </li>
        <li>
            <h5></h5>

            <section class="ROM"  id="ROM"> 
                <label for="rom"> Range of Motion </label>
                    <select class="form-control" id="rom">
                        <option></option>
                        <option value="5">Full</option>
                        <option value="4/5">4/5</option>
                        <option value="3/5">3/5</option>
                        <option value="2/5">2/5</option>
                        <option value="1/5">1/5</option>
                        <option value="0">0</option>
                    </select>
            </section>
        </li>
        <li>
            <h5></h5>

            <section class="socksUse"  id="socksUse"> 
                <label for="socksUsed"> While managing their fit with: </label>
                    <select class="form-control" id="socksUsed">
                        <option></option>
                        <option value="1Suction Fit">Suction Fit</option>
                        <option value="1-3 ply sock">1-3 ply sock </option>
                        <option value="5-8 ply sock">5-8 ply sock</option>
                        <option value="8-10 ply sock">8-10 ply sock</option>
                        <option value="10-12 ply sock">10-12 ply sock</option>
                        <option value="12-15 ply sock">12-15 ply sock</option>
                        <option value="Greater than 15 ply">Greater than 15 ply</option>
                    </select>
            </section>
        </li>
        <li>
            <h5></h5>

            <section class="commitment form-group" id="confirm">  
                <label for="willUse">The patient does not have any comorbidities that we are aware of that will impact mobility</label>
                <input type="radio" id="willUse" name="willUse" value="The patient does not have any comorbidities that we are aware of that will impact mobility"> </br>
                <label for="strDes">Patient verbally communicates a strong desire to proceed with prosthetic care in our opinion</label>
                <input type="radio" id="strDes" name="strDes" value="Patient verbally communicates a strong desire to proceed with prosthetic care in our opinion">
            </section> 
        </li>
        <li>
            <h5></h5>

            <section id="components" class="components">           
                <label for="knee"> Knee:</label>
                <input type="text" id="knee" name="knee" required>
                
                <label for="foot"> Foot:</label>
                <input type="text" id="foot" name="foot" required> 
            </section>
        </li>

        
    </ul>
    <section id="saveButton" class="saveButton">
    <label for="saveInfo"> Save Patient Information</label>
    <button class='btn btn-large btn-primary' type="button" id="saveInfo">Save</button>   
    <p id="infoSaved"></p>
</section>
</form>
    `;
    document.getElementById("sideCorrectionsSection").innerHTML = sideVirtSection;
}


function saveNewInfo(){
    let ptName = document.getElementById("ptName");
    localStorage.setItem("patientName", ptName.value);

    let drName = document.getElementById("drName");
    localStorage.setItem("doctorName", drName.value);

    let dateOfAmp = document.getElementById("dateOfAmp");
    localStorage.setItem("dateOfAmp", dateOfAmp.value);

    let ptDOB = document.getElementById("dateOfBirth");
    localStorage.setItem("dateOfBirth", ptDOB.value);

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


}


function showStoredValue(){
// 
    let clinicianName = localStorage.getItem("clinicianName");
console.log(clinicianName, "Clinician Name");

let replacementClinName = 
`Current Clinician Name: ${clinicianName}
`
document.getElementById("replaceClinName").innerHTML = replacementClinName;

// 
// let doctorName = localStorage.getItem("clinicianName");
// console.log(clinicianName, "local storage favorite array");

// let replacementDoctorName = 
// `Current Doctor: ${doctorName}
// `
// document.getElementById("replaceDrName").innerHTML = replacementDoctorName;

// 
let patientName = localStorage.getItem("patientName");
console.log(patientName, "Patients Name");

let replacePtName = 
`Current Patients Name: ${patientName}
`
document.getElementById("replacePtName").innerHTML = replacePtName;

// 
let amputationDate = localStorage.getItem("dateOfAmp");
console.log(amputationDate, "Amputation Date");

let replaceDateOfAmp = 
`Current Date of Amputation: ${amputationDate}
`
document.getElementById("replaceDateOfAmp").innerHTML = replaceDateOfAmp;

// 
// let amputationLocation = localStorage.getItem("clinicianName");
// console.log(clinicianName, "local storage favorite array");

// let replaceAmpLoc = 
// `Current Doctor: ${amputationLocation}
// `
// document.getElementById("replaceAmpLoc").innerHTML = replaceAmpLoc;

// 
let clinicAddress = localStorage.getItem("clinicLocation");
console.log(clinicAddress, "clinic Address");

// if(clinicAddress == null) {
//     let replaceAddressInp = 
//     `Current Clinic Address: None
//     `
// } else {
// let replaceAddressInp = 
// `Current Clinic Address: ${clinicAddress}
// `
// }

let replaceAddressInp = 
`Current Clinic Address: ${clinicAddress}
`
document.getElementById("replaceAddressInp").innerHTML = replaceAddressInp;

// 
let ptDOB = localStorage.getItem("dateOfBirth");
console.log(clinicianName, "local storage favorite array");

let patientDOB = 
`Current Patient DOB: ${ptDOB}
`
document.getElementById("replacePtDOB").innerHTML = patientDOB;

}