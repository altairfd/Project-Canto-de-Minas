const StoreSerivece = require('../Services/StoresService');

module.exports = {
  selectAll: async (req, res) => {
    let data = { erro: '', result: []};
    let stores = await StoreSerivece.selectAll();

    for (let i in stores) {
      data.result.push({
        storeCNPJ: stores[i].storeCNPJ,
        storeName: stores[i].storeName,
        storeAdress: stores[i].storeAdress
      })
    }
    res.json(data);
  },

  registerStore: async (req, res) => {
    const {cnpj, name, ad, number, region, nanagerID} = req.params;
    console.log(req.params);
    try {
      console.log(req.params)
      await StoreSerivece.createStore(cnpj, name, ad, number, region, nanagerID);
      res.json({sucesse: true, });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
}