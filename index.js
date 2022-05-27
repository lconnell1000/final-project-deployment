const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const authRoute = require("./routes/auth");
const stripeRoute = require("./routes/stripe");
const cors = require('cors')

mongoose.connect
(process.env.MONGO_URI || process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
);



app.use(cors())
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

if(process.env.NODE_ENV === 'production'){


    // const adminStatic = path.join(__dirname, '..', 'admin', 'build');
    // console.log(adminStatic);
    // app.use(express.static(adminStatic));
    // app.use(express.static(path.join(__dirname, 'build2')));
   

    // todo: load client static
    // const clientStatic = path.join(__dirname, 'build');
    app.use(express.static(path.join(__dirname, 'build')));


   
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'build/index.html'));
    });
    
}
// app.get('/admin', (req, res) => {
//     res.sendFile(filepath)
// });



app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running!");
});