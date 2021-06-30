const User = require('../models/user');


module.exports = {
  getUser: (req, res) => {
    User.find((error, users) => { //parameter kedua adalah hasil datanya
      if (error) console.log(error);
      
      const data = {
        users, //sama saja dengan users: users, dimana value nya adalah callback (parameter kedua) dari find()
        title: "User"
      }
  
      res.render('user/users', data);
    });
  },

  getUserDetail: (req, res) => {
    const { id } = req.params;

    const data = {
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
    const { name, email } = req.body;

    //cara pertama
    // const user = new User({
    //   name, //sama dengan name: name
    //   email,
    // });

    //seharusnya bisa user.save() saja, tapi jika ingin mengembalikan pesan, ada 2 parameter tambahan, yaitu error dan hasil data yang dimasukkan (nama parameternya terserah)
    // user.save((error, inputedData) => {
    //   if (error) console.log(error);

    //   console.log(inputedData);
    // });

    //cara kedua
    User.create({
      name, //sama dengan name: name
      email,
    }, (error, inputedData) => { //seharusnya bisa User.create() saja, tapi jika ingin mengembalikan pesan, ada 2 parameter tambahan, yaitu error dan hasil data yang dimasukkan (nama parameternya terserah)
      if (error) console.log(error);
      console.log(inputedData);
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
