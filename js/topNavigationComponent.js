
    function mainNavComponent(){
        const hnav =
            `<nav class="allNav">
                <nav class="fullSizeNav">
                    <a href="homePage.html" class="nav-item" >Home</a>
                    <a href="px-picker-kitselection.html" class="nav-item" id="">Parts</a>
                    <a href="legbuild.html" class="nav-item" >Leg Builder</a>


                </nav>

                <button class="hamButton" id="hamNavButton"></button>

                <nav id="mobileNav" class="mobileNav">
                <ul class="mobileNavList">
                        <li class="navListItem">
                            <a href="../index.html" class="mobileNavigationBut" id="homeButt">Home</a>
                        </li>
                        <li class="navListItem">
                            <a href="px-picker-kitselection.html" class="mobileNavigationBut" id="kitSeleBut">Parts</a>
                        </li>

                        <li class="navListItem">
                        <a href="legbuild.html" class="mobileNavigationBut" id="legBuildBut">Leg Builder</a>
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
            const showLegBuild = document.getElementById("legBuildBut");


            showHome.classList.toggle('showMobNavItems');
            showKitSelect.classList.toggle('showMobNavItems');
            showNotes.classList.toggle('showMobNavItems');
            showLegBuild.classList.toggle('showMobNavItems');


            console.log("Navigator Displayed");
        }


    }



    function deployNavigator(){
        mainNavComponent()
        dispMobileNav()
    }


export {deployNavigator};


{/* <a href="notes-guide.html" class="nav-item" id="">Notes Guide and Templates</a> */}



// <li class="navListItem">
// <a href="notes-guide.html" class="mobileNavigationBut" id="notesTemplateBut">Notes Guide and Templates</a>
// </li>

// const showNotes = document.getElementById("notesTemplateBut");




