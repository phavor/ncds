const User = require('../model/user')

module.exports = {
  login: (req, res) => {
    res.render('login')
  },

  dashboard: async (req, res) => { 
    try {
      let user = await User.findOne({ username: req.user.username })
      res.render('dashboard', { user })
    } catch (error) {
      req.flash('error', 'Could not find user with requested username')
      console.log(error)
    }
  },
  
  profile: async (req, res) => {
    try {
      let user = await User.find({ username: req.params.username })
      res.render('users/profile', { user })
    } catch (error) {
      req.flash('error', 'Could not find user with requested username')
      console.log(error)
    }
  },
}