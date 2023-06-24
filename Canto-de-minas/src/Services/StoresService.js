const mysql = require('../Connect');

module.exports = {
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

  createStore: (storeCnpj, storeName, storeAddress, storeNumber, storeRegion, managerID) => {
    // Realize a inserção na tabela store usando os valores fornecidos
    const query = "INSERT INTO stores(storeCNPJ, storeName, storeAddress, storeNumber, storeRegion, managerID) VALUES (?, ?, ? ,? , ?, ?)";
    const values = [storeCnpj, storeName, storeAddress, storeNumber, storeRegion, managerID];

    // Executando a consulta e confirme as alterações no banco de dados
    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Erro ao registrado loja:", error);
      } else {
        console.log("Loja registrado com sucesso!");
      }
    });
  },
}