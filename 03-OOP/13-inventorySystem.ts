class Product {
  static productCount: number = 0;
  readonly id: number;
  private _name!: string;
  private _price!: number;

  constructor(name: string, price: number) {
    Product.productCount++;
    this.id = Product.productCount;
    this.name = name;
    this.price = price;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (!value || value.length < 1) {
      throw new Error("Product name must be at least 1 characters long");
    }
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(number: number) {
    if (number <= 0) {
      throw new Error("Price must be positive");
    }
    this._price = number;
  }

  public getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

class Inventory {
  private products: Product[] = [];

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public listProducts(): string {
    const info = this.products
      .map((product) => product.getDetails())
      .join("\n");

    return info + `\nTotal products created: ${Product.productCount}`;
  }
}

//// Tests
// Test 1
const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.listProducts());

// Test 2
// Product.productCount = 10;
// // const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// // product.id = 5;
