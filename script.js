const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	
//Add your code here
	const prices = document.querySelectorAll(".price");

    // Step 2: Sum up the prices
    let totalPrice = 0;
    prices.forEach(priceElement => {
        totalPrice += parseInt(priceElement.textContent);
    });

    // Step 3: Create a new row with total price
    const newRow = document.createElement("tr");
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2; // Span across both columns
    totalCell.textContent = "Total Price: Rs " + totalPrice;
    newRow.appendChild(totalCell);
	newRow.Id = "ans";

    // Step 4: Append the new row to the table
    const table = document.querySelector("table");
    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

