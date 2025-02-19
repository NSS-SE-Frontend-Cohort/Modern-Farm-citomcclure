import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { barn } from "./storageBarn.js"

export const harvestPlantsAndStore = (plants) => {
    let storageBarn = barn();

    plants.forEach(plant => {
        switch (plant.type) {
            case "Asparagus":
                for (let i = 0; i < plant.output; i++) {
                    storageBarn.push(createAsparagus());
                };
                break;
            case "Corn":
                for (let i = 0; i < plant.output / 2; i++) {
                    storageBarn.push(createCorn()[0]);
                };
                break;
            case "Potato":
                for (let i = 0; i < plant.output; i++) {
                    storageBarn.push(createPotato());
                };
                break;
            case "Soybean":
                for (let i = 0; i < plant.output; i++) {
                    storageBarn.push(createSoybean());
                };
                break;
            case "Sunflower":
                for (let i = 0; i < plant.output; i++) {
                    storageBarn.push(createSunflower());
                };
                break;
            case "Wheat":
                for (let i = 0; i < plant.output; i++) {
                    storageBarn.push(createWheat());
                };
                break;
            default:
                console.log("Unable to handle this type of crop.")
        }
    })

    return storageBarn;
}