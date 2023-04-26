"use strict";

window.addEventListener("load", main)

// del 1 
async function main() {
    const users = await getUsers() 

    const admin = getAdmin(users)

    admin.forEach(showUsers);

    // users.forEach(showUsers());


    console.log(users)
}

async function getUsers() {
    const response = await fetch("users.json");

    const data = await response.json();

    return data;
}

// del 2
function showUsers(users) {
    const myHtml = /*html*/ `
    <article>
    <li>${users.name} active : ${users.active}</li>
    </article>
    `;

    document.querySelector("#userlist").insertAdjacentHTML("beforeend", myHtml)

}

// del 3 ¨

function getAdmin(users) {
    const response = users.filter(filterAdmin)
    function filterAdmin(user) {
        return user.role === "admin";
    }

    return response;
}

