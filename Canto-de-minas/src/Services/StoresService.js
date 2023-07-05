const mysql = require('../Connect');

module.exports = {
  /**
   * Retorna todos as lojas no banco de dados
   * @returns Json
   */
  selectAll: () => {
    return new Promise((acept, reject) => {
      mysql.query('SELECT * FROM stores', (error, results) => {
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
  createStore: (storeCnpj, storeName, storeAddress, storeNumber, storeRegion, managerID) => {
    const query = "INSERT INTO stores(storeCNPJ, storeName, storeAddress, storeNumber, storeRegion, managerID) VALUES (?, ?, ? ,? , ?, ?)";
    const values = [storeCnpj, storeName, storeAddress, storeNumber, storeRegion, managerID];

    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Erro ao registrado loja:", error);
      } else {
        console.log("Loja registrado com sucesso!");
      }
    });
  },

  updateStore: async (storeCnpj, storeName, storeAddress, storeNumber, storeRegion, storeID) => {

    const query = `UPDATE mogoose.stores
    SET storeCNPJ = ?, storeName = ?, storeAddress = ?, storeNumber = ?, storeRegion = ?
    WHERE storeID = ?`;
    const values = [storeCnpj, storeName, storeAddress, storeNumber, storeRegion, storeID]

    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Error ao atualizar Loja", error)
      } else {
        console.log('Loja atualizada com sucesso!')
      }
    });
  },

  deleteStore: async (storeID) => {
    const query = `DELETE FROM mogoose.stores WHERE storeID = ?`
    const values = [storeID]

    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Erro ao deletar loja")
      } else {
        console.log("Loja deletada com sucesso!")
      }
    });
  }
}