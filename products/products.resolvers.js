const {
  getAllProducts,
  getProductsByPrice,
  getSingleProduct,
} = require("./products.model.js");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return getSingleProduct(args.id);
    },
  },
};
