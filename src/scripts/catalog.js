// Alt implementation from assessment feedback
export const Catalog = (harvested) => {
    document.getElementById("harvestedPlants").innerHTML =
    createSelections(harvested);
 }
 const createSelections = (harvested) =>
    harvested
        .map(({type}) =>
            `<section class="plant">${type}</section>`)
        .join('');


// Original implementation
// export const Catalog = (harvested) => {
//     const harvestedPlantsElement = document.getElementById("harvestedPlants");

//     if (harvestedPlantsElement) {
//         harvested.forEach(plant => {
//             harvestedPlantsElement.innerHTML += `<section class="plant">${plant.type}</section>`
//         });
//     }
// }