const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
// connect to mlab
mongoose.connect("mongodb://localhost:27017/graphqltest");
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.log("App running on 4000");
});
