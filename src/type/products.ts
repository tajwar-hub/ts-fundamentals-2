type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
}

const products: Product[] = [{
    id: 1,
    name: "Laptop",
    price: 999.99,
    description: "High-performance laptop for professionals."
}, {
    id: 2,
    name: "Smartphone",
    price: 599.99,
    description: "Latest model smartphone with advanced features."
}]