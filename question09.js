function countOccurrences(arr) {
    const occurrencesMap = new Map();
    for (const item of arr) {
        occurrencesMap.set(item, (occurrencesMap.get(item) || 0) + 1);
    }
    return occurrencesMap;
}

let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));
// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
