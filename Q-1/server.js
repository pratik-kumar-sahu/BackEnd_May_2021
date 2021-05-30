const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://backendpro:12334455@@cluster-backend-attainu.6rqij.mongodb.net/signedUsers?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server connected at http://localhost:${PORT}/`);
});
