// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const getSumBtn = document.createElement("button");
    getSumBtn.textContent = "Get Total Price";
    document.body.appendChild(getSumBtn);

    const getSum = () => {
        // Step 1: Select all elements with class name "price"
        const prices = document.querySelectorAll(".price");

        // Step 2: Sum up the prices
        let totalPrice = 0;
        prices.forEach(priceElement => {
            totalPrice += parseInt(priceElement.textContent);
        });

        // Step 3: Create a new row with total price
        const newRow = document.createElement("tr");
        const totalCell = document.createElement("td");
        totalCell.setAttribute("colspan", "2"); // Set colspan attribute
        totalCell.textContent = "Total Price: Rs " + totalPrice;
        newRow.appendChild(totalCell);

        // Step 4: Append the new row to the table
        const table = document.querySelector("table");
        table.appendChild(newRow);
    };

    getSumBtn.addEventListener("click", getSum);
});
