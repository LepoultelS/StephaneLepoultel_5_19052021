import { convertToFloatNumber } from "./fonction-float.js";

let cardsList = document.getElementById("cards__list");

fetch("http://localhost:3000/api/teddies/")
    .then(response => response.json()) // Retourne un object JSON
    .then(products => {
        for (let product of products) { // Pour tout les oursons contenue dans le JSON
            let newDiv = document.createElement("div");
            newDiv.classList.add("card", "col-lg-5", "col-sm-9", "mx-auto", "my-4");
            newDiv.innerHTML =
                `
                <a href="product.html?id=${product._id}"row class="card__link">
                    <img src="${product.imageUrl}" class="card__image border"/>
                    <div class="text-center px-2 my-3 card__description">
                        <span class="card__name">${product.name}</span>
                        <span class="card__price">${convertToFloatNumber(product.price)}€</span>
                    </div>
                </a>
                `
            cardsList.appendChild(newDiv);
        }
    })
    .catch(error => {
        console.log(error);
        alert("Erreur de serveur, tentative de reconnnexion...");
        setTimeout(function(){document.location.reload()}, 1000);
    });