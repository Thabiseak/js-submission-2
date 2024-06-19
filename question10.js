function mapEmployeeIdsToNames(employees) {
    const employeeMap = new Map();
    for (const employee of employees) {
        employeeMap.set(employee.id, employee.name);
    }
    return employeeMap;
}

let employees = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let employeeMap = mapEmployeeIdsToNames(employees);
console.log(employeeMap);
// Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }
