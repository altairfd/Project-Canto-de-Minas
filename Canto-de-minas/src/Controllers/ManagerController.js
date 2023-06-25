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
    const name = req.params;

    try {
      console.log(req.params)
      await ManagerService.createManager(name);
      res.json({sucesse: true, });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
}