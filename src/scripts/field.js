const field = [];

export const addPlant = (seed) => {
    Array.isArray(seed) ? seed.forEach(s => field.push(s)) : field.push(seed);
}

export const usePlants = () => {
    return structuredClone(field);
    // return JSON.parse(JSON.stringify(field)); // deep copy without using structuredClone()
}