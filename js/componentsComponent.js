function componentSection() {

    const componentItemNav = 
    `
    <nav>

              <a class=" secButtons  mpk"  id="#" > Socks  </a>
    
              <a class="secButtons   mpk"  id="#"> Sleeves and Sheaths </a>
    
              <a class=" secButtons  mpk"  id="#" > Build Components </a>
    
  </nav>
  `;
  document.getElementById("componentsSection").innerHTML = componentItemNav;

}

export {componentSection};