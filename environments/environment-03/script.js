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

window.addEventListener("load", main);

function main() {
    console.log("alt kører");
    document.querySelector("#create-form").addEventListener("submit", createNewProduct);

    displayProducts(products);
    console.log(products);
}

function displayProducts(products) {
    document.querySelector("#list-container").innerHTML = "";
    for (const product of products) {
        showProducts(product);
    }
}

function showProducts(product) {
    if (product.inStock) {
        const myHtml = `
    <ul>
    <li>${product.name}, ${product.price}, ${product.inStock}</li>
    </ul>
    `;

        document.querySelector("#list-container").insertAdjacentHTML("beforeend", myHtml);
    }
}

function createNewProduct(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = Number(form.price.value);
    const inStock = Boolean(form.inStock.checked);

    const newProduct = {name, price, inStock};

    products.push(newProduct);
    console.log(products);
    console.log(newProduct);    
}