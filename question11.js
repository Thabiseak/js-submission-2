let inventory = new Map();

function addItem(itemName, quantity) {
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
    if (inventory.has(itemName)) {
        inventory.set(itemName, quantity);
    } else {
        console.log("Item not found");
    }
}

function checkItemQuantity(itemName) {
    return inventory.get(itemName);
}

addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple")); // Output: 150
console.log(checkItemQuantity("banana")); // Output: 150
