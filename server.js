const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:3000", // your frontend URL
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
// app.use('/api/orders', require('./routes/orders'));

app.use("/api/tshirts", require("./routes/tshirtRoutes"));
app.use("/api/shirts", require("./routes/shirtRoutes"));
app.use("/api/trousers", require("./routes/trouserRoutes"));  
app.use("/api/jeans", require("./routes/jeansRoutes"));
app.use("/api/shoes", require("./routes/shoesRoutes"));
app.use("/api/innerwear", require("./routes/innerwearRoutes"));
app.use("/api/features", require("./routes/featureRoutes"));

app.use("/api/addresses", require("./routes/addressRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
