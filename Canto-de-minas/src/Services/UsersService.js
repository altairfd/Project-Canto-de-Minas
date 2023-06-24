const mysql = require('../Connect');

module.exports = {
  selectAll: () => {
    return new Promise((acept, reject) => {
      mysql.query('SELECT * FROM users', (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        acept(results);
      });
    });
  },

  createUser: (userName, userPhone, password, accessLevel) => {
    // Realize a inserção na tabela users usando os valores fornecidos
    const query = "INSERT INTO users(user_name, user_phone, password, access_level) VALUES (?, ?, ?, ?)";
    const values = [userName, userPhone, password, accessLevel];

    // Execute a consulta e confirme as alterações no banco de dados
    mysql.query(query, values, (error, results) => {
      if (error) {
        console.error("Erro ao criar usuário:", error);
      } else {
        console.log("Usuário criado com sucesso!");
      }
    });
  }
}