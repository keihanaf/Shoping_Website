import Products from "./models/Products.js";
import Cart from "./models/Cart.js";
import { fetchData } from "./utils/httpReq.js";

// Selectors
const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

// Function to render data to the DOM
async function render() {
  const productsData = await fetchData();
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );
  productsInstance.showProducts();
}
// Call the render function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", render);
