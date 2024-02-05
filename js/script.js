window.addEventListener("DOMContentLoaded", init);

const productsURL = "https://api.punkapi.com/v2/beers";

let productTemplate;
let produktListe;

function init() {
  console.log("init");

  productTemplate = document.querySelector(".productTemplate");
  console.log("productTemplate", productTemplate);

  produktListe = document.querySelector(".produktListe");
  console.log("produktListe", produktListe);

  fetch(productsURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProducts(json);
    });
}

function showProducts(productJSON) {
  let productClone;

  productJSON.forEach((product) => {
    console.log("product", product);
    productClone = productTemplate.cloneNode(true).content;
    productClone.querySelector("h3").textContent = product.name;
    produktListe.appendChild(productClone);
  });
}

