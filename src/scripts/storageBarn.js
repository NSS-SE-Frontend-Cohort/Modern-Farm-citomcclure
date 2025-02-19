let stack = [];

export const barn = () => {
    return {
        stack: stack,
        push: (crop) => {
            stack.push(crop);
        },
        pop: () => {
            return stack.pop();
        },
        peek: () => {
            return stack[stack.length - 1].type;
        },
        isEmpty: () => {
            return stack.length === 0;
        }
    }
}