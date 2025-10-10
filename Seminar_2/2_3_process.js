// transmitere argumente din linia de comanda
let hello4 = (name) => {
  return `Hello ${name}`;
};

console.log(hello4(process.argv[2]));
