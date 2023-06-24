const ManagerService = require('../Services/ManagerService');

module.exports = {
  selectAll: async (req, res) => {
    let data = { erro: '', result: []};
    let managers = await ManagerService.selectAll();

    for (let i in managers) {
      data.result.push({
        managerCode: managers[i].managerID,
        managerName: managers[i].managerName
      })
    }
    res.json(data);
  },

  registerManager: async (req, res) => {
    let manager_name = req.body.managerName;

    console.log(req.body.managerName);

    // Valide os dados de entrada, se necessário
    ManagerService.createManager(manager_name);

    // Retorne uma resposta adequada, se necessário
    res.send("Representante registrada com sucesso!")
  },
}