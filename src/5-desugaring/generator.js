function* generateFruits() {
    yield "apple";
    yield "banana";
}

for (const fruit of generateFruits()) {
    console.log(fruit);
}
