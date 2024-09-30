// Get references to the DOM elements
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const productList = document.getElementById('product-list');

// Function to add a product to the list
function addProduct() {
    const name = productNameInput.value;
    const price = productPriceInput.value;

    // Validation: Check if the name and price are not empty
    if (name === '' || price === '') {
        alert('Please enter both product name and price');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `<span>${name}</span><span>$${parseFloat(price).toFixed(2)}</span>`;

    // Append the new product to the product list
    productList.appendChild(li);

    // Clear the input fields
    productNameInput.value = '';
    productPriceInput.value = '';
}

// Add event listener to the "Add Product" button
addProductButton.addEventListener('click', addProduct);
