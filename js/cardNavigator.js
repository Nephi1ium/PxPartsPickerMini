import { feetCard } from "./feetComponent.js";
import {kneeCard} from "./kneesComponent.js"

const feetOne = document.querySelector("#feet1");

feetOne.addEventListener("click", () => displayFeetCard());


const KneesOne = document.getElementById("fric");


KneesOne.addEventListener("click", () => createKneeCard());

function displayFeetCard(){
    feetCard();
};

function createKneeCard (){
    kneeCard();
}