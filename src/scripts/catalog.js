export const Catalog = (harvested) => {
    const forSaleTableElement = document.getElementById("forSaleTable");

    if (forSaleTableElement) {
        // Optional Challenge: Display Once With Quantity
        harvested.forEach((value, key) => {
            let newRow = forSaleTableElement.insertRow();

            let newCellFood = newRow.insertCell(0);
            let newTextFood = document.createTextNode(key);
            newCellFood.appendChild(newTextFood);

            let newCellQuantity = newRow.insertCell(1);
            let newTextQuantity = document.createTextNode(value);
            newCellQuantity.appendChild(newTextQuantity);
        })
    }
}