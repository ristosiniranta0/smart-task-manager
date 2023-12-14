/* 
   Filename: advanced_application.js
   Content: A sophisticated application with multi-functionalities
*/

// Helper function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// User class representing a user in the system
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getProfile() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

// Product class representing a product in the system
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPriceWithTax(taxRate) {
    return this.price * (1 + taxRate);
  }
}

// Order class representing a user's order
class Order {
  constructor(user) {
    this.user = user;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice(taxRate) {
    let totalPrice = 0;
    this.products.forEach((product) => {
      totalPrice += product.getPriceWithTax(taxRate);
    });
    return totalPrice;
  }

  printOrder() {
    console.log(`Order for ${this.user.getProfile()}:`);
    this.products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name}: $${product.price}`);
    });
    console.log(`Total: $${this.getTotalPrice(0.1)}`);
  }
}

// Usage example
const user = new User("John Doe", "john.doe@example.com");
const order = new Order(user);
const product1 = new Product("Shirt", 25);
const product2 = new Product("Pants", 40);
const product3 = new Product("Shoes", 60);

order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);

order.printOrder();