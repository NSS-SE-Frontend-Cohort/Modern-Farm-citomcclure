import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";


// Requirements 1-3
const yearlyPlan = createPlan();

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// const cornSeed = createCorn()
// console.log(cornSeed)

// const potatoSeed = createPotato()
// console.log(potatoSeed)

// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

// const wheatSeed = createWheat()
// console.log(wheatSeed)


// addPlant(asparagusSeed);
// addPlant(cornSeed);
// addPlant(potatoSeed);
// addPlant(soybeanSeed);
// addPlant(sunflowerSeed);
// addPlant(wheatSeed);

// const usedPlants = usePlants();
// console.log(usedPlants);

// Requirements 4-6
plantSeeds(yearlyPlan);
const usedPlants = usePlants();

const harvestedPlants = harvestPlants(usedPlants);
console.log(harvestedPlants);

Catalog(harvestedPlants);