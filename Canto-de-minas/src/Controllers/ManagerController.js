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
    const {name} = req.params;

    try {
      console.log(req.params)
      await ManagerService.createManager(name);
      res.json({sucesse: true, });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  updateManager: async (req, res) => {
    const {name, id} = req.params;

    try {
      await ManagerService.updateManager(name, id);
      console.log(name, id)
      res.send('Representante atualizado com sucesso')
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o Representante.' });
    };
  },

  deleteManager: async (req, res) => {
    const {id} = req.params;

    try {
      await ManagerService.deleteManager(id);
      res.send('Representante deletado com sucesso')
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar Representante.', error});
    };
  }
}