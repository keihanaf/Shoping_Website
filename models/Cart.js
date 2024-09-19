import Display from "./Display.js";

// Models
class Cart extends Display {
  //  Construct a new Cart object with the given parent and price node
  constructor(parent, price) {
    super(parent);
    this.price = price;
    this.products = [];
    this.toShow = [];
  }

  // Create the product info element with the given name, price, and quantity
  productInfo(data) {
    const { name, price } = data;
    const infoJSX = `
        <div id="cart-info">
            <h4>${name}</h4>
            <p>${price}</p>
        </div>
    `;
    return infoJSX;
  }

  // Create the product control element with the given quantity and buttons
  productControl(data, qty) {
    const { id } = data;
    const controlJSX = `
        <div id="cart-control">
            <div>
                <button data-id=${id}>-</button>
                <span>${qty}</span>
                <button data-id=${id}>+</button>
            </div>
            <button data-id=${id}>Remove</button>
        </div>
    `;
    return controlJSX;
  }

  // Event listener for the parent element
  handleEvent(event) {
    const tagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.innerText;

    if (tagName !== "BUTTON") return;
    switch (type) {
      case "+":
        this.increase(id);
        break;
      case "-":
        this.decrease(id);
        break;
      case "Remove":
        this.remove(id);
        break;
    }
  }

  // Function to add a product to the cart when the "Add to cart" button is clicked
  increase(id) {
    const product = this.products.find((p) => p.id === +id);
    this.products.push(product);
    this.showProducts();
  }

  // Function to remove a product from the cart when the "Remove" button is clicked
  decrease(id) {
    const index = this.products.findIndex((p) => p.id === +id);
    this.products.splice(index, 1);
    this.showProducts();
  }

  // Function to remove a product from the cart when the "Remove" button is clicked
  remove(id) {
    const newProducts = this.products.filter((p) => p.id !== +id);
    this.products = newProducts;
    this.showProducts();
  }

  // Function to calculate and update the total price of the cart every time a product is added or removed
  calculateTotalPrice() {
    const total = this.products.reduce((acc, cur) => (acc += cur.price), 0);
    this.price.innerText = "$" + total;
  }
}
export default Cart;
