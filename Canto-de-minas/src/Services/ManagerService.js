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
    const query = "INSERT INTO mogoose.managers(managerName) VALUES (?)";
    const values = [managerName];

    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Erro ao registrado loja:", error);
      } else {
        console.log("Representante registrado com sucesso!");
      }
    });
  },

  /**
   * Atualizando a tabela manager
   * @param {MysqlID} managerId 
   * @param {String} mewManagerName 
   * @returns JSON
   */
  updateManager: async (managerName, managerID) => {

    const query = `UPDATE mogoose.managers SET managerName = ? WHERE managerID = ?`;
    const values = [managerName, managerID];
 
    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Erro ao atualizar representante:", error);
      } else {
        console.log("Representante atualizado com sucesso!", values);
      }
    });
  },

  deleteManager: async (managerID) => {
    const query = `DELETE FROM mogoose.managers WHERE managerID = ?`;
    const values = [managerID]
    
    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Erro ao deletar representante:", error);
      } else {
        console.log("Representante deletado com sucesso!", values);
      }
    });
  }
}