function checkDuplicates(classes) {
    const nameSet = new Set();
    for (const studentNames of classes) {
        for (const name of studentNames) {
            if (nameSet.has(name)) {
                return true; // Duplicate found
            }
            nameSet.add(name);
        }
    }
    return false; // No duplicates
}

const classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

console.log(checkDuplicates(classes)); 

