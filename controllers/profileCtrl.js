var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Brett Caudill',
    pic: 'https://scontent-dfw1-1.xx.fbcdn.net/hprofile-xta1/v/t1.0-1/c0.0.320.320/p320x320/10665663_10152746280629529_5418299010763341245_n.jpg?oh=cae249367f6d35873a9466c210560b1e&oe=574E6772',
    status: 'My name is..NO! My sign is...NO!'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
  show: function(req, res, next) {
    var friendArr = req.session.currentUser.friends.map(function(friend) {
      for (var i = 0; i < profiles.length; i++) {
         if (profiles[i].name === friend) return profiles[i];
      }
    })

    var ans = {
      currentUser: req.session.currentUser,
      friends: friendArr
    }
    res.json(ans);
  },

  index: function(req,res,next) {
    var list = profiles.filter(function(profile) {
      return profile.name !== req.session.currentUser.name
    })
    res.json(list);
  },

  showUserProfile: function(req, res, next) {
    var ans = profiles.filter(function(profile) {
      return profile.name === req.session.currentUser.name;
    })

    res.json(ans[0]);
  },

  update: function(req, res, next) {
    var status = false;
    for (var i = 0; i < profiles.length; i++) {
      if (profiles[i].name === req.session.currentUser.name) {
        profiles[i] = req.body;
        status = true;
      }
    }
    res.json({userFound: status});
  }
}
