const mysql = require('../Connect');

module.exports = {
  selectAll: () => {
    return new Promise((acept, reject) => {
      mysql.query('SELECT * FROM products', (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        acept(results);
      });
    });
  },

  createProduct: (User) => {
    // Realize a inserção na tabela product usando os valores fornecidos
    const query = "INSERT INTO products(productCode, productName, productDescription) VALUES (?)";
    const values = {User};

    // Executando a consulta e confirme as alterações no banco de dados
    mysql.query(query, values, (error, result) => {
      if (error) {
        console.log("Error ao registrar produto", error)
      } else {
        console.log("Produto registrado com sucesso!")
      }
    });
  },
}