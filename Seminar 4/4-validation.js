const orderCoffee = (type) => {
  const types = {
    SPECIAL: "Special",
    REGULAR: "Regular",
  };

  if (Object.values(types).indexOf(type) === -1) {
    throw new Error("coffee error");
  } else {
    console.log(`preparing ${type} coffee...`);
  }
};

try {
  orderCoffee("Regular");
  orderCoffee("No_caffeine");
} catch (err) {
  console.warn(err);
}
