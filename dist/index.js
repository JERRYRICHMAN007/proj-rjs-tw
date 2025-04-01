"use strict";
let age = 60;
if (age < 50) {
    console.log("You are young!");
}
else if (age < 100) {
    console.log("You are old!");
}
else {
    console.log("You are very old!");
}
function render(document) {
    document.getElementById("age").textContent = `Your age is: ${age}`;
}
//# sourceMappingURL=index.js.map