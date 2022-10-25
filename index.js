const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.set("json spaces", 2);
//routes
app.use("/api/photos", require("./src/routes/photos"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
