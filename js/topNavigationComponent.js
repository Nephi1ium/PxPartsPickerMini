
    function mainNavComponent(){
        const hnav =
            `<nav class="allNav">
                <nav class="fullSizeNav">
                    <a href="homePage.html" class="nav-item" >Home</a>
                    <a href="px-picker-kitselection.html" class="nav-item" id="">Kit Selection</a>
                    <a href="pdf.html" class="nav-item" id="">PDF</a>
                    <a href="virtual-care-document.html" class="nav-item" id="">Virtual Care</a>

                </nav>

                <button class="hamButton" id="hamNavButton"></button>

                <nav id="mobileNav" class="mobileNav">
                <ul class="mobileNavList">
                        <li class="navListItem">
                            <a href="../index.html" class="mobileNavigationBut" id="homeButt">Home</a>
                        </li>
                        <li class="navListItem">
                            <a href="px-picker-kitselection.html" class="mobileNavigationBut" id="TTSucBut">Kit Selection</a>
                        </li>
                        <li class="navListItem">
                            <a href="pdf.html" class="mobileNavigationBut" id="PDFBut">PDF</a>
                        </li>
                        <li class="navListItem">
                            <a href="virtual-care-document.html" class="mobileNavigationBut" id="VCareBut">Virtual Care</a>
                        </li>
                </ul>
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









