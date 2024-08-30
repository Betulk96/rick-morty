export const wait = (delay = 5) =>
    new Promise((resolve) => setTimeout(resolve, delay * 1000));