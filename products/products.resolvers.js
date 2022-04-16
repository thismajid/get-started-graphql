const { getAllProducts } = require("./products.model.js");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
  },
};
