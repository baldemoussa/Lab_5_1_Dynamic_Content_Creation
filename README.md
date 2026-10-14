# Dynamic Shopping Cart

A page for adding products to a cart and removing them. The name, price, and running total are built in the browser. Nothing is saved, so a refresh clears the cart.

## Screenshots

**Empty cart.** The total starts at $0.

![Empty shopping cart with a total of $0](docs/screenshots/empty-cart.png)

**Three products.** Each name is shown in uppercase. The total is the sum of the prices.

![Cart with coffee, muffin, and milk totaling $9.75](docs/screenshots/cart-items.png)

**After a removal.** Removing muffin subtracts $2 and leaves coffee and milk.

![Cart after muffin is removed, totaling $7.75](docs/screenshots/after-remove.png)

## How it works

- Type a product name and a price, then press **Add Product**
- The name is trimmed and stored in uppercase
- An empty name shows the message “Please the Product Name Can not be empty”
- A price of 0 or less shows the message “The Product price must be greater than 0”
- A blank price is left off the list
- **Remove** deletes that row and subtracts its price from the total
- After the first product is added, the total shows two decimal places

## Open it

Open `index.html` in a browser.

## Built with

- HTML
- CSS
- JavaScript
