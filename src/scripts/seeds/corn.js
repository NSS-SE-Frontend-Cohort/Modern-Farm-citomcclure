export const createCorn = () => {
    const corn = {
        type: "Corn",
        height: 180,
        output: 6,
        icon: "🌽"
    }

    return [corn, structuredClone(corn)];
}