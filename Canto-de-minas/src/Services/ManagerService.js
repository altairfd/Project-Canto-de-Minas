const mysql = require('../Connect');

module.exports = {
  /**
   * Retorna todos os representantes registrados no banco de dados
   * @returns Json
   */
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

  /**
   * Os parametros que devem ser inseridos via url serão enviado para a base de dados local 
   */
  createManager: (managerName) => {
    const query = "INSERT INTO managers(managerName) VALUES (?)";
    const values = [managerName];

    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Erro ao registrado loja:", error);
      } else {
        console.log("Representante registrado com sucesso!");
      }
    });
  },
}