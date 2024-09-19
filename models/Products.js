import Display from "./Display.js";

// Models
class Products extends Display {
  //  Construct a new Product object with the given parent
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }

  // For show the product
  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }

  // Create the product info element with the given name, price, and add to cart button
  productInfo(data) {
    const { id, name, price } = data;

    const infoJSX = `
        <div id="product-info">
            <h3>${name}</h3>
            <div>
                <span>${price}</span>
                <button data-id=${id}>+</button>
            </div>
        </div>
    `;
    return infoJSX;
  }

  // Event listener for the parent element
  handleEvent(event) {
    const element = event.target;
    if (element.tagName === "BUTTON") {
      this.addToCart(element.dataset.id);
    }
  }

  // Function to add a product to the cart when the "Add to cart" button is clicked
  addToCart(id) {
    const product = this.products.find((product) => product.id === +id);
    this.cart.products.push(product);
    this.cart.showProducts();
  }
}

export default Products;
