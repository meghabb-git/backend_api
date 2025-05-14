const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

require("./models/items"); // Register model
const itemsRoutes = require("./routes/itemRouters");

mongoose.connect("mongodb://localhost:27017/myItems", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use("/api/items", itemsRoutes); // Base route for items

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
