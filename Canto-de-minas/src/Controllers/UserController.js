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
    let user_name = req.body.user_name;
    let user_phone = req.body.user_phone; 
    let password = req.body.password;
    let access_level = req.body.access_level;


    console.log(req.body);
    // Valide os dados de entrada, se necessário

    UserService.createUser(user_name, user_phone, password, access_level);

    // Retorne uma resposta adequada, se necessário
    res.send("Usuário cadastrado com sucesso!");
  }
}