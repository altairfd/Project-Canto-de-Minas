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
    let store_Cnpj = req.body.storeCNPJ;
    let store_Name = req.body.storeName;
    let store_Address = req.body.storeAddress;
    let store_Number = req.body.storeNunber;
    let store_Region = req.body.storeRegion;
    let manager_ID = req.body.menagerID;

    console.log(req.body.storeCNPJ);

    // Valide os dados de entrada, se necessário
    StoreSerivece.createStore(store_Cnpj, store_Name, store_Address, store_Number, store_Region, manager_ID);

    // Retorne uma resposta adequada, se necessário
    res.send("Loja registrada com sucesso!")
  },
}