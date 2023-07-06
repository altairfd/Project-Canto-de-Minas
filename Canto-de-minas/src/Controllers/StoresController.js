const StoresService = require('../Services/StoresService');

module.exports = {
  selectAll: async (req, res) => {
    let data = { erro: '', result: []};
    let stores = await StoresService.selectAll();

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
      await StoresService.createStore(cnpj, name, ad, number, region, nanagerID);
      res.json({sucesse: true, });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  updateStore: async (req, res) => {
    const {cnpj, name, ad, number, region, id} = req.params;

    try {
      await StoresService.updateStore(cnpj, name, ad, number, region, id);
      console.log(cnpj, name, ad, number, region, id)
      res.send('Loja atualizada com sucesso!');
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o Loja.'});
    }
  },

  deleteStore: async (req, res) => {
    const {id} = req.params;

    try {
      await StoreSerivece.deleteStore(id);
      res.send('Loja deletada com sucesso');
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar a Loja.' });
    }
  }
}