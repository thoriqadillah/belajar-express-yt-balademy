const express = require("express");
const userRouter = require("./router/users"); //import express routernya
const app = express();
const port = 3000;

app.use(express.json()); // untuk parsing data berbasis application/json
app.use(express.urlencoded({ extended: true })); // untuk parsing data berbasis form atau application/x-www-form-urlencoded

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/belajar', { useNewUrlParser: true, useUnifiedTopology: true }); //emnghubungkan ke mongodb dengan db belajar

const something = {
  a: "Thoriq",
  b: "Mas Awim",
};

var myLogger = (req, res, next) => {
  something.b = "Tya";
  next();
};

app.use(myLogger); //memanggil midleware agar bisa difungsikan

app.set('view engine', 'ejs'); //set template engine yang akan digunakan sebelum aplikasinya dijalankan

app.use('/assets', express.static('public')); //agar dapat mereferensi aset2 kita yang ada pada folder public

app.get("/", (req, res) => {
  const data = {
    title: 'Home'
  };
  
  //parameter pertama untuk nama file ejs yang ingin dirender/ditampilkan
  //parameter kedua untuk bagian data, dengan key adalah nama variable
  res.render('index', data);
  
});

app.get("/about", (req, res) => {
  const data = {
      title: 'About'
  };

  res.render('about', data);
  //res.redirect('/user'); //bisa juga mengarah ke external url, tinggal ganti '/user' dengan eksternal url
});

app.use(userRouter); //mengeksekusi express router, yang ditempatkan sebelum app.listen

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
