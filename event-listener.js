// Simulating dynamic transaction IDs & products
function generateTransactionID() {
    return "TXN" + Math.floor(Math.random() * 100000);
}

// Sample JSON payload (CustomerLabs format)
function createPayload(productID, productName, price) {
    return {
        "event_name": "purchase",
        "event_data": {
            "transaction_id": generateTransactionID(),
            "currency": "USD",
            "total_value": price,
            "products": [
                {
                    "product_id": productID,
                    "product_name": productName,
                    "product_category": "Electronics",
                    "product_price": price,
                    "quantity": 1
                }
            ],
            "customer_info": {
                "customer_id": "CUST" + Math.floor(Math.random() * 10000),
                "email": "customer@example.com"
            }
        }
    };
}

// Add to Cart Function (Event-Listener)
function addToCart(productID) {
    let products = {
        1: { name: "Smartphone XYZ", price: 699 },
        2: { name: "Wireless Headphones", price: 129 },
        3: { name: "Gaming Laptop", price: 1199 }
    };

    let selectedProduct = products[productID];
    
    if (!selectedProduct) {
        console.error("Invalid Product ID");
        return;
    }

    let payload = createPayload(productID, selectedProduct.name, selectedProduct.price);

    console.log("Event Triggered:", payload);
}

