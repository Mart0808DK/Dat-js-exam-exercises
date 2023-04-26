"use strict";

window.addEventListener("load", main) 

function main() {
    console.log("det kører ")

    document.querySelector("#create-form").addEventListener("submit", btnSubmit)
}

const animalN = document.querySelector("#animal-name")
const animalT = document.querySelector("#animal-type")
const animalA = document.querySelector("#animal-age")

function btnSubmit(event) {
    event.preventDefault();
    console.log("Hello");
    showAnimal();
    
}


function showAnimal() {
const myhtml = /*html*/ `
<td>${animalN.vaule}</td>
<td>${animalT.value}</td>
<td>${animalA.value}</td>
`;

document.querySelector("#list-container").insertAdjacentHTML("beforeend", myhtml);;
}