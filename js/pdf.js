// For this one, set a series of parameters that have to be met in order for the specific function to execute, and the particular PDF document be generated.
// ie. 

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

subtfPDFDocument.addEventListener("click", () => transFemoralProsthesis());


function transFemoralProsthesis(){
let storedArray = JSON.parse(localStorage.infoArr);


        storedArray.every(item => {
            let tfPDF = document.querySelector('#tfPDFDoc')
            
            tfPDF.innerHTML = tfPDF.innerHTML + `
            <div class="box">
            <div class="top">
                <div  >
                    <img class="title" src="../images/prosthetic_logo.jpg" />
                </div>

                <div class="information">
                    Encounter #: 123456<br />
                    Created: <br />
                    <!-- Need to set teh time and date automatically -->
                    Due: Set from first page
                </div>

                <div class="information1">
                    Clinician Name: ${storedArray[0]}<br />
                    Billed to PCC: <br />
                    PCC Number: ${storedArray[1]} <br />
                    Address State, ZIP SFFP
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
                    <h5>Patient Name</h5>
				</div>
                        <ul>
                            <li><div>DOB (age)</div></li>
    <!-- I want the age to show in parenthesis right next to the DOB -->
                            <li><div>Weight</div></li>
                            <li><div>Height</div></li>
                            <li><div>Amputation Side</div></li>
                            <li><div>Amputation Level</div></li>
                            <li><div>K Level</div></li>


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
                <div class="heading">
                    <h5> Socks </h5>
                </div>
                
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>

<div class=" item6">    

                <div class="heading">
                    <h5> Sheaths </h5>
                </div>
                <ul>
                    <li>Price</li>
                    <li></li>
                </ul>
</div>
<div class="item7">
                <div class="heading">
                    <h5> Sleeves </h5>
                </div>
                    <ul>
                        <li>Price</li>
                        <li></li>
                    </ul>
                
</div> 
</div>
</div>`
        
        })
    
    }


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