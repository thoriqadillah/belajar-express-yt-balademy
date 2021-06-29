const express = require("express");
const userRouter = require("./router/users"); //import express routernya
const app = express();
const port = 3000;

//agar bisa menerima inputan dari user
//ini juga merupakan midleware
app.use(express.json()); // untuk parsing data berbasis application/json
app.use(express.urlencoded({ extended: true })); // untuk parsing data berbasis form atau application/x-www-form-urlencoded

const something = {
  a: "Thoriq",
  b: "Mas Awim",
};
//ini adalah midleware. midleware adalah perintah yang harus dilalui terlebih dahulu sebelum kode setelahnya
//jadi penempatan midleware ini sangat penting. ketika kita tempatkan dia pada paling atas, maka midleware akan
//dipanggil pada seluruh route. misal kita tempatkan setelah / dan sebelum mengakses /users, maka midleware hanya akan
// dipanggil pada saat mengakses setelahnya, yatu /users tadi
var myLogger = (req, res, next) => {
  something.b = "Tya";
  next();
};

app.use(myLogger); //memanggil midleware agar bisa difungsikan

app.set('view engine', 'ejs'); //set template engine yang akan digunakan sebelum aplikasinya dijalankan

app.use(express.static('public')); //agar dapat mereferensi aset2 kita yang ada pada folder public

//app.HttpMethod(path, handler);
app.get("/", (req, res) => {
  //handler berupa function yang mempunyai parameter untuk mengelola request dan response

  //parameter pertama untuk nama file ejs yang ingin dirender/ditampilkan
  //parameter kedua untuk bagian data, dengan key adalah nama variable
  res.render('index', { some: something });
  
});

app.get("/about", (req, res) => {
  res.render('about');

  //misal kita ingin redirect user jika mengunjungi rout /about, maka
  //res.redirect('/user'); //bisa juga mengarah ke external url, tinggal ganti '/user' dengan eksternal url
});

app.use(userRouter); //mengeksekusi express router, yang ditempatkan sebelum app.listen

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
