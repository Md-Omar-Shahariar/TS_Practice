const product = {
  name: "aa",
  quantity: 20,
  amount: 100,
};
function getProductProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getProductProp(product, "amount"));
