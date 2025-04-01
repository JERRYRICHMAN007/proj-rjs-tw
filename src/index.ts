let age: number = 60;

if (age < 50) {
  console.log("You are young!");
} else if (age < 100) {
  console.log("You are old!");
} else {
  console.log("You are very old!");
}

function render(document: any) {
  document.getElementById("age").textContent = `Your age is: ${age}`;
}

let user: [number, string] = [1, "John Doe"];
user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Small;
