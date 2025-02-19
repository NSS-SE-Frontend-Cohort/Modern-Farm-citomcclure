import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
const usedPlants = usePlants();
const harvestedPlants = harvestPlants(usedPlants);


// Optional Challenge 1: Ordering the Harvest
// harvestedPlants.sort(function(a,b) {
//     return a.type < b.type ? -1 : 1;
// });

Catalog(harvestedPlants);