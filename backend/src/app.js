// create server 
const express = require('express');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.routes');
const foodRoutes = require('./routes/food.routes');

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth', authRouter);
app.use('/api/food', foodRoutes);

module.exports = app;