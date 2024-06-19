let userPreferences = new Map();

function setPreference(key, value) {
    userPreferences.set(key, value);
}

function getPreference(key) {
    return userPreferences.get(key);
}

setPreference("theme", "dark");
setPreference("fontSize", "16px");

console.log(getPreference("theme")); // Output: "dark"
console.log(getPreference("fontSize")); // Output: "16px"
