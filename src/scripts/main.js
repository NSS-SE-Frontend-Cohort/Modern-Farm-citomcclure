import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlantsAndStore } from "./harvester.js";
import { Catalog } from "./catalog.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);
let storageBarn = harvestPlantsAndStore(usePlants());
console.log(storageBarn.storageBarn);

let i = 0;
while (!storageBarn.isEmpty()) {
    console.log(storageBarn.pop());
    if (i % 3 === 0) { console.log(storageBarn.peek()) };
    i++;
}