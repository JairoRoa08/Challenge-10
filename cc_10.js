// Task 1: Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Stock: ${this.stock}`;
    }
    updateStock(quantity) {
        if (quantity > 0 && this.stock >= quantity) {
            this.stock -= quantity;
            console.log(`Stock updated. Remaining stock: ${this.stock}`);
        } else {
            console.log(`Insufficient stock or invalid quantity.`);
        }
    }
}
const product1 = new Product("Laptop", 101, 899.99, 50);
console.log(product1.getDetails());
product1.updateStock(5);
console.log(product1.getDetails());


