function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate.toISOString().slice(0, 10);
}

console.log(addDays("2022-06-15", 10)); 
