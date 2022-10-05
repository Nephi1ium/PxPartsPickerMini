
    function mainNavComponent(){
        const hnav =
            `<nav class="allNav">
                <nav class="fullSizeNav">
                    <a href="homePage.html" class="nav-item" >Home</a>
                    <a href="px-picker-tfpin.html" class="nav-item" >TransFemoral Pin</a>
                    <a href="px-picker-tfsuction.html" class="nav-item" id="">TransFemoral Suction</a>
                    <a href="px-picker-ttpin.html" class="nav-item" id="">TransTibial Pin</a>
                    <a href="px-picker-ttsuction.html" class="nav-item" id="">TransTibial Suction</a>
                    <a href="pdf.html" class="nav-item" id="">PDF</a>
                    <a href="virtual-care-document.html" class="nav-item" id="">Virtual Care</a>

                </nav>

                <button class="hamButton" id="hamNavButton"></button>

                <nav id="mobileNav" class="mobileNav">

                    <a href="../index.html" class="mobileNavigationBut" id="homeButt">Home</a>
                    <a href="px-picker-tfpin.html" class="mobileNavigationBut" id="TFPinBut">TransFemoral Pin</a>
                    <a href="px-picker-tfsuction.html" class="mobileNavigationBut" id="TFSucBut">TransFemoral Suction</a>
                    <a href="px-picker-ttpin.html" class="mobileNavigationBut" id="TTPinBut">TransTibial Pin</a>
                    <a href="px-picker-ttsuction.html" class="mobileNavigationBut" id="TTSucBut">TransTibial Suction</a>
                    <a href="pdf.html" class="mobileNavigationBut" id="PDFBut">PDF</a>
                    <a href="virtual-care-document.html" class="mobileNavigationBut" id="VCareBut">Virtual Care</a>
                </nav>
            </nav>`;
            document.getElementById("mainNavigation").innerHTML = hnav;

    }

    function dispMobileNav(){
        const clickNav = document.getElementById("hamNavButton");

        clickNav.addEventListener("click", ()=> dispNavChoices());

        function dispNavChoices(){
            console.log("Good Try 1");
            const showHome = document.getElementById("homeButt");
            const showTFPin = document.getElementById("TFPinBut");
            const showTFSuc = document.getElementById("TFSucBut");
            const showTTPin = document.getElementById("TTPinBut");
            const showTTSuc = document.getElementById("TTSucBut");
            const showPDF = document.getElementById("PDFBut");
            const showVCare = document.getElementById("VCareBut");

            showHome.classList.toggle('showMobNavItems');
            showTFPin.classList.toggle('showMobNavItems');
            showTFSuc.classList.toggle('showMobNavItems');
            showTTPin.classList.toggle('showMobNavItems');
            showTTSuc.classList.toggle('showMobNavItems');
            showPDF.classList.toggle('showMobNavItems');
            showVCare.classList.toggle('showMobNavItems');


            console.log("Good Try!");
        }


    }



    function deployNavigator(){
        mainNavComponent()
        dispMobileNav()
    }


export {deployNavigator};