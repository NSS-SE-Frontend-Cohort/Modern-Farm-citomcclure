import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlantsAndStore } from "./harvester.js";
import { processor } from "./processingFacility.js"
import { Catalog } from "./catalog.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

// Stack console logging
// const storageBarn = harvestPlantsAndStore(usePlants());
// console.log(storageBarn.stack);
// let i = 0;
// while (!storageBarn.isEmpty()) {
//     console.log(storageBarn.pop());
//     if (i % 3 === 0) { console.log(storageBarn.peek()) };
//     i++;
// }

// Farm algorithm
const storageBarn = harvestPlantsAndStore(usePlants());
const processingFacility = processor();

const processedCrops = new Set();
while (!storageBarn.isEmpty() || !processingFacility.isEmpty()) {
    // Fill conveyor belt initially and try to maximize number of crops on there
    while (!storageBarn.isEmpty() && processingFacility.size() < 3) {
        console.log(storageBarn.peek() + " is next to go on the conveyor belt!");
        processingFacility.enqueue(storageBarn.pop());
        console.log(processingFacility.last() + " has been added to the conveyor belt!");

        // If storageBarn is emptied on last crop addition, notify and break
        if (storageBarn.isEmpty()) {
            console.log("Storage Barn is ready for new crops.");
            break;
        }
    }

    console.log(processingFacility.next() + " is processed and coming off the conveyor belt!");
    processedCrops.add(processingFacility.dequeue().type);
}

if (processingFacility.isEmpty()) {
    console.log("Farm Store inventory is full and ready to open for business");
}

// Catalog
Catalog(processedCrops);