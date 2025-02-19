let storageBarn = [];

export const barn = (plants) => {
    return {
        storageBarn: storageBarn,
        push: (crop) => {
            storageBarn.push(crop);
        },
        pop: () => {
            return storageBarn.pop();
        },
        peek: () => {
            return storageBarn[storageBarn.length - 1].type;
        },
        isEmpty: () => {
            return storageBarn.length === 0;
        }
    }
}