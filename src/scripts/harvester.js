import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const harvestPlants = (plants) => {
    let newSeeds = [];

    plants.forEach(plant => {
        switch (plant.type) {
            case "Asparagus":
                for (let i = 0; i < plant.output; i++) {
                    newSeeds.push(createAsparagus());
                };
                break;
            case "Corn":
                for (let i = 0; i < plant.output / 2; i++) {
                    newSeeds.push(createCorn()[0]);
                };
                break;
            case "Potato":
                for (let i = 0; i < plant.output; i++) {
                    newSeeds.push(createPotato());
                };
                break;
            case "Soybean":
                for (let i = 0; i < plant.output; i++) {
                    newSeeds.push(createSoybean());
                };
                break;
            case "Sunflower":
                for (let i = 0; i < plant.output; i++) {
                    newSeeds.push(createSunflower());
                };
                break;
            case "Wheat":
                for (let i = 0; i < plant.output; i++) {
                    newSeeds.push(createWheat());
                };
                break;
            default:
                console.log("Unable to handle this type of crop.")
        }
    })

    return newSeeds;
}