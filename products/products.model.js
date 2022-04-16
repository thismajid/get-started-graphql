const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
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

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getSingleProduct(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };
    matchedProduct.reviews.push(newProductReview);

    return newProductReview;
  }
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getSingleProduct,
  addNewProduct,
  addNewProductReview,
};
