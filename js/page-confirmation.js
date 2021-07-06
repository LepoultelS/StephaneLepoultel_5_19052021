let searchParams = new URLSearchParams(window.location.search); //use URLSearchParams constructor to get values of url parameters
let confirmationText = document.getElementById("confirmation__text");
let orderFirstName = searchParams.get("firstName");
let orderLastName = searchParams.get("lastName");
let orderId = searchParams.get("orderId");
let orderTotal = searchParams.get("total");
let orderProducts = searchParams.get("ids").split(","); // convert ids string to array
let summary = document.getElementById("summary");

confirmationText.innerHTML = `Merci <strong> ${orderFirstName} ${orderLastName} </strong>, votre commande n° <strong> ${orderId}
</strong> d'un montant de <strong> ${(orderTotal / 100).toFixed(2)} € 
</strong> a bien été prise en compte.`;
