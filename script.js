const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// Event listener for adding a product
addProductButton.addEventListener('click', () => {
  const name = productNameInput.value.trim().toUpperCase();
  const price = parseFloat(productPriceInput.value);

  if (name === "" ) {
    alert(`Please the Product Name Can not be empty`);
  }
  if (price <= 0 || price === "") {
    alert(`The Product price must be greater than 0`);
  }

  if (name !== "" && price > 0) {
    const li = document.createElement('li');
    li.innerHTML = ` Item: <strong>${name}</strong> Price: <strong>$${price}</strong> `;
    li.dataset.price = price;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('item-btn')

    li.prepend(removeBtn);
    cart.appendChild(li);
    updateTotalPrice(price);

    productNameInput.value = '';
    productPriceInput.value = '';
  }
});

// event delegation on the cart for removing items
cart.addEventListener('click', (event) => {
  if (event.target.classList.contains('item-btn')) {
    removeItem(event);
  }
});