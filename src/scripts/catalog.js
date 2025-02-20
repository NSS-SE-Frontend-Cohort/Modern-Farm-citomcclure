export const Catalog = (processed) => {
    const farmStoreElement = document.getElementById("farmStore");

    if (farmStoreElement) {
        processed.forEach(key => {
            let newRow = farmStoreElement.insertRow();

            let newCellCrop = newRow.insertCell(0);
            let newTextCrop = document.createTextNode(key);
            newCellCrop.appendChild(newTextCrop);

            let newCellProcessedGood = newRow.insertCell(1);
            let newTextProcessedGood = document.createTextNode(getProcessedGood(key));
            newCellProcessedGood.appendChild(newTextProcessedGood);
        })
    }
}

const getProcessedGood = (crop) => {
    switch (crop) {
        case "Asparagus":
            return "Pickled asparagus";
        case "Corn":
            return "Corn meal";
        case "Potato":
            return "Potato chips";
        case "Soybean":
            return "Bean paste";
        case "Sunflower":
            return "Sunflower oil";
        case "Wheat":
            return "Flour";
        default:
            console.log("Unable to handle this type of crop.")
    }
}