const ProductsSerivece = require('../Services/ProductsService');

module.exports = {
  selectAll: async (req, res) => {
    let data = { erro: '', result: []};
    let products = await ProductsSerivece.selectAll();

    for (let i in products) {
      data.result.push({
        productCode: products[i].producID,
        productName: products[i].productName,
        description: products[i].productDescription
      })
    }
    res.json(data);
  },

  registerProduct: async (req, res) => {
    let product_code = req.params;
    let product_name = req.params;
    let product_Descrip = req.params;

    console.log(req.params);

    // Valide os dados de entrada, se necessário   
    ProductsSerivece.createProduct(product_code, product_name, product_Descrip);

    // Retorne uma resposta adequada, se necessário
    res.send(`${req.params}`)
  }
}