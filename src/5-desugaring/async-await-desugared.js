function __awaiter(generator) {
    return new Promise((resolve, reject) => {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            if (result.done) {
                resolve(result.value);
            } else {
                Promise.resolve(result.value).then(fulfilled, rejected);
            }
        }

        step((generator = generator()).next());
    });
}

import fs from "fs/promises";

function readAndWriteFile(fileName) {
    return __awaiter(function* () {
        const data = yield fs.readFile(fileName);
        const modified = data.toString() + "!";
        yield fs.writeFile(fileName, modified);
        return modified;
    });
}

function main() {
    return __awaiter(function* () {
        try {
            const result = yield readAndWriteFile("./local.txt");
            console.log("Done:", result.toString());
        } catch (error) {
            console.error("Oh no:", error);
        }
    });
}

main();
