function updateAttendance(newAttendance, overallAttendance) {
    for (const student of newAttendance) {
        overallAttendance.add(student);
    }
    return overallAttendance;
}

let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(todayAttendance, overallAttendance);
console.log([...overallAttendance]);
// Output: ["Alice", "Bob", "Charlie"]
