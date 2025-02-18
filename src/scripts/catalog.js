export const Catalog = (harvested) => {
    const harvestedPlantsElement = document.getElementById("harvestedPlants");

    if (harvestedPlantsElement) {
        harvested.forEach(plant => {
            harvestedPlantsElement.innerHTML += `<section class="plant">${plant.type}</section>`
        });
    }
}