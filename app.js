const express = require("express");
const userRoutes = require("./routes/users");
const paymentRoutes = require("./routes/payments");


const app = express();
app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);


app.listen(3000, () => {
console.log("acme-sec-test backend running on port 3000");
});