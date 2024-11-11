const productInput = document.querySelector('#productName');
const pricePerKgInput = document.querySelector('#productPricePerKg');
const pricePerQuantityInput = document.querySelector('#productPricePerQuantity');
const quantityWithUnitInput = document.querySelector('#quantityWithUnit');
const addToCartButton = document.querySelector('#addToCart');
const cartItemsTable = document.querySelector('#cartItems tbody');
const totalAmountDiv = document.querySelector('#totalAmount');
const generatePDFButton = document.querySelector('#generatePDF');

let totalAmount = 0;

// Function to log current input values
const logCurrentValues = () => {
    const product = productInput.value;
    const pricePerKg = parseFloat(pricePerKgInput.value) || 0;
    const pricePerQuantity = parseFloat(pricePerQuantityInput.value) || 0;
    const quantityWithUnit = quantityWithUnitInput.value;

    console.log('Product:', product);
    console.log('Price per Kg:', pricePerKg);
    console.log('Price per Quantity:', pricePerQuantity);
    console.log('Quantity with Unit:', quantityWithUnit);
};

// Function to add the item to the cart
const addToCart = () => {
    const product = productInput.value;
    const pricePerKg = parseFloat(pricePerKgInput.value) || 0;
    const pricePerQuantity = parseFloat(pricePerQuantityInput.value) || 0;
    const quantityWithUnit = quantityWithUnitInput.value;

    // Validate input
    if (!product || (!pricePerKg && !pricePerQuantity) || !quantityWithUnit) {
        alert("Please enter valid product details.");
        return;
    }

    // Calculate the total price for this item based on unit
    let totalPrice = 0;
    if (quantityWithUnit.toLowerCase().includes("kg")) {
        const quantity = parseFloat(quantityWithUnit) || 0;
        totalPrice = pricePerKg * quantity;
    } else if (quantityWithUnit.toLowerCase().includes("g")) {
        const quantity = parseFloat(quantityWithUnit) / 1000 || 0;
        totalPrice = pricePerKg * quantity;
    } else {
        totalPrice = pricePerQuantity;
    }

    // Add to cart display
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${product}</td>
        <td>₹${pricePerKg.toFixed(2)}</td>
        <td>₹${pricePerQuantity.toFixed(2)}</td>
        <td>${quantityWithUnit}</td>
        <td>₹${totalPrice.toFixed(2)}</td>
    `;
    cartItemsTable.appendChild(row);

    // Update total amount
    totalAmount += totalPrice;
    totalAmountDiv.textContent = `Total: ₹${totalAmount.toFixed(2)}`;

    // Clear input fields
    productInput.value = '';
    pricePerKgInput.value = '';
    pricePerQuantityInput.value = '';
    quantityWithUnitInput.value = '';
};

// Function to generate PDF
const generatePDF = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("General Store Billing System", 10, 10);
    doc.text("Invoice", 10, 20);

    let yPosition = 30;
    doc.text("Product", 10, yPosition);
    doc.text("Price per Kg", 50, yPosition);
    doc.text("Price per Quantity", 90, yPosition);
    doc.text("Quantity", 130, yPosition);
    doc.text("Total", 170, yPosition);

    yPosition += 10;

    // Add each cart item to PDF
    cartItemsTable.querySelectorAll('tr').forEach(row => {
        const cells = row.querySelectorAll('td');
        doc.text(cells[0].textContent, 10, yPosition);
        doc.text(cells[1].textContent, 50, yPosition);
        doc.text(cells[2].textContent, 90, yPosition);
        doc.text(cells[3].textContent, 130, yPosition);
        doc.text(cells[4].textContent, 170, yPosition);
        yPosition += 10;
    });

    // Add total amount to PDF
    doc.text(`Total: ₹${totalAmount.toFixed(2)}`, 10, yPosition + 10);
    doc.save("invoice.pdf");
};

// Event listeners for input logging and cart functions
productInput.addEventListener('input', logCurrentValues);
pricePerKgInput.addEventListener('input', logCurrentValues);
pricePerQuantityInput.addEventListener('input', logCurrentValues);
quantityWithUnitInput.addEventListener('input', logCurrentValues);

addToCartButton.addEventListener('click', () => {
    console.log('Adding to Cart with current values:');
    logCurrentValues();
    addToCart();
});

generatePDFButton.addEventListener('click', generatePDF);
