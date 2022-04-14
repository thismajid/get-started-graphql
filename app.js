import express from "express";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

const schema = buildSchema(`
type Query {
    description: String
    price: Float
}
`);

const root = {
  description: "red shoe",
  price: 42.12,
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
