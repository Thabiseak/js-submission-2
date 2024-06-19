function getCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace("T", " ");
    return formattedDate;
}

console.log(getCurrentDateTime());

