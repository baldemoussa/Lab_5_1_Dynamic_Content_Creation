# Dynamic Shopping Cart

A page for adding products to a cart and removing them. The name, price, and running total are built in the browser.

## Description

Nothing is saved, so a refresh clears the cart.

* Type a product name and a price, then press **Add Product**
* The name is trimmed and stored in uppercase
* An empty name shows the message “Please the Product Name Can not be empty”
* A price of 0 or less shows the message “The Product price must be greater than 0”
* A blank price is left off the list
* **Remove** deletes that row and subtracts its price from the total
* After the first product is added, the total shows two decimal places

The empty cart total is $0. Coffee, muffin, and milk total $9.75. Removing muffin subtracts $2 and leaves coffee and milk at $7.75.

## Screenshots

### Empty cart

![Empty shopping cart with a total of $0](docs/screenshots/empty-cart.png)

### Three products

![Cart with coffee, muffin, and milk totaling $9.75](docs/screenshots/cart-items.png)

### After a removal

![Cart after muffin is removed, totaling $7.75](docs/screenshots/after-remove.png)

## Getting Started

### Dependencies

* A browser

### Installing

No install step.

### Executing program

Open `index.html` in a browser.

## Help

An empty name shows “Please the Product Name Can not be empty”. A price of 0 or less shows “The Product price must be greater than 0”. A blank price is left off the list. A refresh clears the cart.

## Authors

[Mamadou Moussa Balde](https://www.linkedin.com/in/2mb/)

## Version History

* Current page
    * Coffee, muffin, and milk totaled $9.75
    * Removing muffin left $7.75

## License

This folder does not include a `LICENSE.md` file.

## Acknowledgments

* [README template](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)
