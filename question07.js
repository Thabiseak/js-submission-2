function dateDifference(date1, date2) {
    const diffInMilliseconds = new Date(date2) - new Date(date1);
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    return diffInDays;
}

console.log(dateDifference("2022-06-15", "2023-06-15")); 
