const mysql = require('../Connect');

module.exports = {
  selectAll: () => {
    return new Promise((acept, reject) => {
      mysql.query('SELECT * FROM managers', (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        acept(results);
      });
    });
  },

  createManager: (managerName) => {
    // Realize a inserção na tabela manager usando os valores fornecidos
    const query = "INSERT INTO managers(managerName) VALUES (?)";
    const values = [managerName];

    // Executando a consulta e confirme as alterações no banco de dados
    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Erro ao registrado loja:", error);
      } else {
        console.log("Representante registrado com sucesso!");
      }
    });
  },
}