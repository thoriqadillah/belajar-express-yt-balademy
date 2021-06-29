//akan sangat tidak clean kodingan kita jika kita menaruh setiap kode pada satu file. maka dari itu perlu kita
//mengimplementasi express route agar routing menjadi modular
const express = require("express");
const router = express();

const userController = require("../controllers/userController");

router.route('/users')
  .get(userController.getUser)
  .post(userController.store);

router.get("/addUser", userController.addUser);

router.get("/users/:id", userController.getUserDetail);

//update user dengan parameter, biasanya id, tapi bisa saja yang lainnya
router.put("/users/:id", userController.editUser);

router.delete("/users/:id", userController.deleteUser);

module.exports = router; //export express routernya agar bisa digunakan diluar file users
