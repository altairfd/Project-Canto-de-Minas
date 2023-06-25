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
  }
}