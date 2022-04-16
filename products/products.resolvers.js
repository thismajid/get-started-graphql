const {
  getAllProducts,
  getProductsByPrice,
  getSingleProduct,
  addNewProduct,
  addNewProductReview,
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
  Mutation: {
    addNewProduct: (_, args) => {
      return addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return addNewProductReview(args.id, args.rating, args.comment);
    },
  },
};
