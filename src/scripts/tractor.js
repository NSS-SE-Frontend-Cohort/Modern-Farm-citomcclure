import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js";

export const plantSeeds = (plan) => {
    plan.forEach(row => row.forEach(plot => {
        let seed;

        switch (plot) {
            case "Asparagus":
                seed = createAsparagus();
                break;
            case "Corn":
                seed = createCorn();
                break;
            case "Potato":
                seed = createPotato();
                break;
            case "Soybean":
                seed = createSoybean();
                break;
            case "Sunflower":
                seed = createSunflower();
                break;
            case "Wheat":
                seed = createWheat();
                break;
            default:
                console.log("Unable to handle this type of crop.")
        }

        addPlant(seed);
    }));
}