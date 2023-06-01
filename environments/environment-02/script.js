"use strict";

const products = [
    {
        name: "Cocio",
        price: 15,
        inStock: true,
    },
    {
        name: "Mælk",
        price: 10,
        inStock: true,
    },
    {
        name: "Pringels",
        price: 20,
        inStock: false,
    },
];


window.addEventListener("load", main) 

function main() {
    console.log("alt kører");

    displayProducts(products)
}

function sortListByISstock(product1, product2) {
    return sortListByISstock(())
}

function displayProducts(products) {
    for (const product of products) {
        showProducts(product)
    }
}

function showProducts(product) {
    const myHtml = `
    <tr>
    <td>${product.name}, ${product.price}, ${product.inStock}</td>
    </tr>
    `

    document.querySelector("tbody").insertAdjacentHTML("beforeend", myHtml)
}