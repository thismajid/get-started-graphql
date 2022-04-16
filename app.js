import express from "express";
import path from "path";
import { graphqlHTTP } from "express-graphql";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";

import productsModel from "./products/products.model.js";
import ordersModel from "./orders/orders.model.js";

const typesArray = loadFilesSync(path.join(".", "**/*.graphql"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
});

const root = {
  products: productsModel,
  orders: ordersModel,
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
  })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on localhost:${port} ...`);
});
