var users = [
  {
    name: 'Jeremy Nolan',
    password: 'password1',
    friends: ['Chase Reid', 'Joseph Nolan']
  },
  {
    name: 'Alyson Reid',
    password: 'p',
    friends: ['Chase Reid', 'Jeremy Nolan']
  },
  {
    name: 'Chase Reid',
    password: 'hehehe',
    friends: ['Alyson Reid']
  },
  {
    name: 'Joseph Nolan',
    password: 'hohoho',
    friends: ['Brittney Nolan', 'Chase Reid']
  },
  {
    name: 'Brittney Nolan',
    password: 'heyheyhey',
    friends: ['Joseph Nolan', 'Chase Reid', 'Alyson Reid']
  }
];

module.exports = {
  login: function(req, res, next) {
    var userFound = false;
    users.forEach(function(user) {
      if (req.body.name === user.name && req.body.password === user.password) {
        req.session.currentUser = user;
        userFound = true;
      }
    })
    res.send({userFound: userFound});
  },

  addFriend: function(req, res, next) {
    req.session.currentUser.friends.push(req.body.name)
    res.send();
  },

  update: function(req, res, next) {
    var updateSuccess = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === req.session.currentUser.name) {
        users[i] = req.body;
        updateSuccess = true;
        req.session.currentUser = users[i]
      }
    }
    res.json({updateSuccess: updateSuccess});
  }
}
