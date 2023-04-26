"use strict";

window.addEventListener("load", main)

async function main() {
    const users = await getJson()

    users.forEach(showUsers)

    console.log(users)
}

async function getJson() {
    const response = await fetch("users.json")

    const data = await response.json()
    return data
}

function showUsers(users) {
   console.log(users)

   const myHtml = /*html*/ `
   <article>
   <li>${users.name} - active ${users.active}</li>
   </article>
   `
} 