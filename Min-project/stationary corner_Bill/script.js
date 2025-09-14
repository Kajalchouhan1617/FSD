function calculateAmount(item) {
    const rate = parseFloat(document.getElementById(item + "Rate").innerText);
    const qty = parseInt(document.getElementById(item + "Qty").value);
    const amount = rate * qty;
    document.getElementById(item + "Amt").innerText = amount.toFixed(2);
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    const items = ["pen", "pencil", "eraser", "notebook", "scale"];
    items.forEach(item => {
        if (document.getElementById(item + "Check").checked) {
            total += parseFloat(document.getElementById(item + "Amt").innerText);
        }
    });
    document.getElementById("totalAmount").innerText = total.toFixed(2);
}