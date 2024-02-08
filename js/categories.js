console.log("lets go!");

const bags = parameter.get("bags");
const bagURL = `https://kea-alt-del.dk/t7/api//products?subcategory=${bags}`;

let showProductlist;

// Fetcher dataen fra url'en
fetch(bagURL)
  .then((response) => response.json())
  .then(showProducts);

function showProducts(products) {
  // Looper og kalder funktionen showProduct
  products.forEach(showProduct);
}

console.log(bagURL);
