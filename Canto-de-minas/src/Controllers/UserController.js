const UserService = require('../Services/UsersService');

module.exports = {
  selectAll: async (req, res) => {
    let data = { erro: '', result: []};
    let users = await UserService.selectAll();

    for (let i in users) {
      data.result.push({
        userID: users[i].userID,
        userName: users[i].user_name,
        userPhone: users[i].user_phone,
      })
    }
    res.json(data);
  },

  
  registerUser: async (req, res) => {
    const { name, phone, password, acessLevel } = req.params;

    try {
      console.log(req.params)
      await UserService.createUser(name, phone, password, acessLevel);
      res.json({sucesse: true, });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}