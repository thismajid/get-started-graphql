const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
  },
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (min, max) => {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};

const getSingleProduct = (id) => {
  return products.find((product) => product.id === id);
};

module.exports = { getAllProducts, getProductsByPrice, getSingleProduct };
