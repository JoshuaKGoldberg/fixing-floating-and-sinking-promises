function generateFruits() {
    let timeCalled = -1;

    return {
        next() {
            switch ((timeCalled += 1)) {
                case 0:
                    return { done: false, value: "apple" };
                case 1:
                    return { done: false, value: "banana" };
                default:
                    return { done: true, value: undefined };
            }
        },
    };
}

const generator = generateFruits();

while (true) {
    const { done, value: fruit } = generator.next();
    if (done) break;

    console.log(fruit);
}
