// Models
class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.cart = cart;
    this.parent.addEventListener("click", this);
  }

  // Add a product to the cart when the "Add to cart" button is clicked
  showProducts() {
    this.toShow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, qty);
    });
    this.calculateTotalPrice();
  }

  // Create the product info element with the given name, price, and add to cart button
  createCard(data, qty) {
    const cardElement = document.createElement("div");
    const imgElement = this.productImg(data);
    const infoElement = this.productInfo(data);
    cardElement.innerHTML = imgElement;
    cardElement.innerHTML += infoElement;
    if (this.constructor.name === "Cart") {
      const controlElement = this.productControl(data, qty);
      cardElement.innerHTML += controlElement;
    }
    this.parent.appendChild(cardElement);
  }

  // Create the product control element with the given quantity and buttons
  productImg(data) {
    const { image, alt } = data;
    const imgJSX = `<img src="${image}" alt="${alt}">`;
    return imgJSX;
  }
}
export default Display;
