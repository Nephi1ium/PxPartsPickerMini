
    function mainNavComponent(){
        const hnav =
            `<nav class="allNav">
                <nav class="fullSizeNav">
                    <a href="homePage.html" class="nav-item" >Home</a>
                    <a href="px-picker-kitselection.html" class="nav-item" id="">Kit Selection</a>
                    <a href="pdf.html" class="nav-item" id="">PDF</a>
                    <a href="virtual-care-document.html" class="nav-item" id="">Virtual Care</a>
                    <a href="notes-guide.html" class="nav-item" id="">Notes Guide and Templates</a>


                </nav>

                <button class="hamButton" id="hamNavButton"></button>

                <nav id="mobileNav" class="mobileNav">
                <ul class="mobileNavList">
                        <li class="navListItem">
                            <a href="../index.html" class="mobileNavigationBut" id="homeButt">Home</a>
                        </li>
                        <li class="navListItem">
                            <a href="px-picker-kitselection.html" class="mobileNavigationBut" id="kitSeleBut">Kit Selection</a>
                        </li>
                        <li class="navListItem">
                            <a href="pdf.html" class="mobileNavigationBut" id="PDFBut">PDF</a>
                        </li>
                        <li class="navListItem">
                            <a href="virtual-care-document.html" class="mobileNavigationBut" id="VCareBut">Virtual Care</a>
                        </li>
                        <li class="navListItem">
                        <a href="notes-guide.html" class="mobileNavigationBut" id="notesTemplateBut">Notes Guide and Templates</a>
                        </li>

                </ul>
            </nav>`;
            document.getElementById("mainNavigation").innerHTML = hnav;

    }

    function dispMobileNav(){
        const clickNav = document.getElementById("hamNavButton");

        clickNav.addEventListener("click", ()=> dispNavChoices());

        function dispNavChoices(){
            console.log("Displaying Main Navigator");
            const showHome = document.getElementById("homeButt");
            const showKitSelect = document.getElementById("kitSeleBut");
            const showPDF = document.getElementById("PDFBut");
            const showVCare = document.getElementById("VCareBut");
            const showNotes = document.getElementById("notesTemplateBut");


            showHome.classList.toggle('showMobNavItems');
            showKitSelect.classList.toggle('showMobNavItems');
            showPDF.classList.toggle('showMobNavItems');
            showVCare.classList.toggle('showMobNavItems');
            showNotes.classList.toggle('showMobNavItems');


            console.log("Navigator Displayed");
        }


    }



    function deployNavigator(){
        mainNavComponent()
        dispMobileNav()
    }


export {deployNavigator};









