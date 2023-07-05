const mysql = require('../Connect');

module.exports = {
  /**
   * Retorna todos os produtos registrados no banco de dados
   * @returns Json
   */
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

  /**
   * Os parametros que devem ser inseridos via url serão enviado para a base de dados local 
   */
  createProduct: (Code, Name, Descp) => {
    const query = "INSERT INTO products(productCode, productName, productDescription) VALUES (?, ?, ?)";
    const values = [Code, Name, Descp]

    mysql.query(query, values, (error, result) => {
      if (error) {
        console.log("Error ao registrar produto", error)
      } else {
        console.log("Produto registrado com sucesso!")
      }
    });
  },

  updateUser: async (Code, Name, Descp, iD) => {
    const query = `UPDATE mogoose.products SET productCode = ?, productName = ?, productDescription = ? WHERE productID = ?`;
    const values = [Code, Name, Descp, iD]

    mysql.query(query, values, (error, result) => {
      if (error) {
        console.log("Error ao atualizar produto", error) 
      } else {
        console.log("Produto atualizado com sucesso!");
      }
    })
  },

  deleteProduct: async (id) => {
    const query = `DELETE FROM mogoose.products WHERE productID = ?`;
    const values = [id]

    mysql.query(query, values, (error, results) => {
      if (error) {
        console.log("Error ao deletar produto", error)
      } else {
        console.log("Produto deletado com sucesso!")
      }
    })
  }
  
}