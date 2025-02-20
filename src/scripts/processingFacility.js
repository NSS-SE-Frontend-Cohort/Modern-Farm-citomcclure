const queue = [];

export const processor = () => {
    return {
        enqueue: (storedCrop) => {
            queue.push(storedCrop);
        },
        dequeue: () => {
            return queue.shift();
        },
        next: () => {
            return queue[0].type;
        },
        last: () => {
            return queue[queue.length - 1].type;
        },
        isEmpty: () => {
            return queue.length === 0;
        },
        size: () => {
            return queue.length;
        }
    }
}