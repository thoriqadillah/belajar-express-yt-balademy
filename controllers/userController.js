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
let id = 2;
module.exports = {
  getUser: (req, res) => {
    const data = {
      users, //jika nama key dan value nya sama, maka bisa menggunakan destructuring seperti itu, aslinya users: users
      title: 'Users'
    };

    res.render('user/users', data); 
  },

  getUserDetail: (req, res) => {
    const { id } = req.params;

    const user = users.filter(user => user.id == id);
    const data = {
      users: user, 
      title: 'User Detail'
    };

    res.render('user/detail', data); 
  },

  addUser: (req, res) => {
    const data = {
      title: 'Add User'
    };

    res.render('user/addUser', data);
  },

  store: (req, res) => {
    //cara menangkap input dari form adalah dengan menggunakan req.body
    // hasilnya akan menjadi object dengan key adalah name attribute dari input form nya dan value nya adalah isian dari user
    users.push({
      id: ++id,
      name: req.body.name,
      email: req.body.email
    });

    res.redirect('/users');
  },

  editUser: (req, res) => {
    const data = {
      title: 'Edit User'
    };

  },

  deleteUser: (req, res) => {
    const data = {
      title: 'Users'
    };

  },
};
