//mari kita buat data statis untuk users
//anggap aja dari model
let users = [
  {
    id: 1,
    name: "Thoriq",
    email: "thoriqadillah59@gmail.com",
  },
  {
    id: 2,
    name: "Mas Awim",
    email: "masawim@gmail.com",
  },
];

//======INGAT!!========
//API DI BAWAH INI TANPA ADANYA PENGKONDISIAN TERTENTU, JADI SEGALA CARA UNTUK CRUD API DAPAT DIJALANKAN

module.exports = {
  getUser: (req, res) => {
    res.render('user/users', {users}); //jika nama key dan value nya sama, maka bisa menggunakan destructuring seperti itu
  },
  addUser: (req, res) => {
    users.push(req.body);
    res
      .json({
        status: "success",
        message: "Data user berhasil disimpan",
        method: res.method,
        url: res.url,
        data: users,
      })
      .status(201);
  },
  editUser: (req, res) => {
    //req.param berguna untuk menangkap route parameternya

    //bisa update dengan cara ini
    // const userId = req.params.id;
    // users.filter((user) => {
    //   if (user.id == userId) {
    //     user.id = userId;
    //     user.name = req.body.name;
    //     user.email = req.body.email;
    //   }
    // });

    //atau bisa update dengan lebih simple dan clean
    //deconstruct dan ambil req.body
    const { id, name, email } = req.body;

    const index = users.findIndex((user) => user.id == id); //cari index dari aray users yang sama dengan id yang di deconstruct
    users[index] = { id, name, email }; //update data berdasarkan data yang di deconstruct tadi pada users[index]

    //contoh http://localhost:3000/users/34
    //hasilnya menjadi req.params : { "id": 34, "name": namaDariArrayUsers, "email": emailDariArrayUsers}
    //atau bisa langsung dispesifikkan, yaitu req.params.userId, yang mana akan mengembalikan 34

    res
      .json({
        status: "success",
        message: "Data berhasil diperbarui",
        data: users,
      })
      .status(200);
  },
  deleteUser: (req, res) => {
    const { id } = req.body;

    //update/ganti array users yang id != userId, sehingga seolah2 kita menghapus data tersebut
    users = users.filter((user) => user.id != id);

    res
      .json({
        status: "success",
        message: "Data berhasil dihapus",
        data: users,
      })
      .status(200);
  },
};
