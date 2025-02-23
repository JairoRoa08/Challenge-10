// Task 1: Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    updateStock(quantity) {
        if (quantity > this.stock) {
            console.log("Not enough stock available.");
            return false; 
        } else {
            this.stock -= quantity;
            return true; 
        }
    }
}
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
prod1.updateStock(3);
console.log(prod1.getDetails()); 

// Task 2: Create the Order class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = this.product.price * this.quantity;
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
console.log(prod1.getDetails()); 

// Task 3: Creating an Inventory Class
class Inventory {
    constructor() {
        this.products = [];
        this.orders = [];  
    }
    addProduct(product) {
        if (product instanceof Product) {
            this.products.push(product);
        } else {
            console.log("Invalid product. Must be an instance of Product.");
        }
    }
    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }

// Task 4: Implementing Order Management
    placeOrder(orderId, product, quantity) {
        if (!(product instanceof Product)) {
            console.log("Invalid product. Must be an instance of Product.");
            return;
        }
        if (product.updateStock(quantity)) { 
            const newOrder = new Order(orderId, product, quantity); 
            this.orders.push(newOrder); 
            console.log(`Order placed: ${newOrder.getOrderDetails()}`);
        } else {
            console.log(`Order failed: Not enough stock for ${product.name}`);
        }
    }
    listOrders() {
        if (this.orders.length === 0) {
            console.log("No orders placed.");
        } else {
            this.orders.forEach(order => console.log(order.getOrderDetails()));
        }
    }

// Task 5: Implementing Product Restocking
    restockProduct(productId, quantity) {
        const product = this.products.find(p => p.id === productId); 
        if (product) {
            product.stock += quantity; 
            console.log(`Restocked ${quantity} of ${product.name}. New stock: ${product.stock}`);
        } else {
            console.log("Product not found.");
        }
    }
}
const inventory = new Inventory();
inventory.addProduct(prod1); 
inventory.placeOrder(601, prod1, 2); 
inventory.listOrders(); 
console.log(prod1.getDetails()); 
inventory.restockProduct(101, 5); 
console.log(prod1.getDetails()); 
