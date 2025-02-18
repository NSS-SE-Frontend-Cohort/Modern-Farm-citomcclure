import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const harvestPlants = (plants) => {
    // Optional Challenge: Display Once With Quantity
    let newSeedsMap = new Map();

    plants.forEach(plant => {
        if (!newSeedsMap.has(plant.type)) {
            newSeedsMap.set(plant.type, 0);
        }

        let numToAdd = plant.type == "corn" ? plant.output / 2 : plant.output;
        newSeedsMap.set(plant.type, newSeedsMap.get(plant.type) + numToAdd);
    })

    return newSeedsMap;
}