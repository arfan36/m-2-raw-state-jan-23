// Immutability

let player = [{ name: "Shakib" }, { name: "Tamim" }];

console.log(player);

player = [...player, { name: "Mashrafi" }]; // spreed operator

console.log(player);
