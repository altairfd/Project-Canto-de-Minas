const ProductsService = require('../Services/ProductsService');

module.exports = {
  selectAll: async (req, res) => {
    let data = { erro: '', result: [] };
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
    const { productCode, productName, productDescription } = req.params;
    
    try {
      await ProductsService.createProduct(productCode, productName, productDescription);
      res.json({sucesse: true, });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  updateProduct: async (req, res) => {
    const {pCode, pName, pDisc, id} = req.params;

    try {
      await ProductsService.updateUser(pCode, pName, pDisc, id);
      res.send("Usuario atualizado com sucesso!")
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o Usuario.'});
    }
  },
  
  deleteProduct: async (req, res) => {
    const {id} = req.params;

    try {
      await ProductsService.deleteProduct(id);
      console.log(id);
      res.send('Produto deletado com sucesso')
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o produtos.' });
    }
  },

}