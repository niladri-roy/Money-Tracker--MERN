const express = require ('express');
const cors = require ('cors');
require('dotenv').config();
const Transaction = require('./models/transaction.js');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/transaction', async(req, res) => {
    await mongoose.connect('mongodb+srv://money:wNM9Tz39199jz615@cluster0.ild8u5l.mongodb.net/?retryWrites=true&w=majority');
    const {
        price,
        name,
        description,
        datetime} = req.body;

    const transaction = await Transaction.create({
        price,
        name,
        description,
        datetime
    })
    res.json(transaction);
});

app.get('/api/transactions', async(req, res) => {
    await mongoose.connect('mongodb+srv://money:wNM9Tz39199jz615@cluster0.ild8u5l.mongodb.net/?retryWrites=true&w=majority');
    const transactions = await Transaction.find(); 
    res.json(transactions);
});


app.listen(4040);
