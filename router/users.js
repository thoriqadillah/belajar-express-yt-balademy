//akan sangat tidak clean kodingan kita jika kita menaruh setiap kode pada satu file. maka dari itu perlu kita
//mengimplementasi express route agar routing menjadi modular
const express = require("express");
const router = express();

const userController = require("../controllers/userController");

// app.get("/users", (req, res) => {
//   res.send("Get User");
// });

// app.post("/users", (req, res) => {
//   res.send("Post User");
// });

// app.put("/users", (req, res) => {
//   res.send("Put User");
// });

//mungkin akan kelamaan jika misal sama2 mengakses /users tapi beda method harus menuliskan hal yang sama
//maka dari itu kita bisa menggunakan route group

router
  .route("/users") //route group
  .get(userController.getUser)
  .post(userController.addUser);

//update user dengan parameter, biasanya id, tapi bisa saja yang lainnya
router.put("/users/:id", userController.editUser);

router.delete("/users/:id", userController.deleteUser);

module.exports = router; //export express routernya agar bisa digunakan diluar file users
