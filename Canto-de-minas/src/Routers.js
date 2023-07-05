const express = require('express');
const router = express.Router();

const ProductsController = require('./Controllers/ProductsController');
const StoresController = require('./Controllers/StoresController');
const UserController = require('./Controllers/UserController');
const ManagerController = require('./Controllers/ManagerController');

//Gets
router.get('/produtos', ProductsController.selectAll);
router.get('/lojas', StoresController.selectAll);
router.get('/usuarios', UserController.selectAll);
router.get('/representantes', ManagerController.selectAll);

//Posts
router.post('/registrarProduto/:productCode/:productName/:productDescription', ProductsController.registerProduct);
router.post('/registrarLoja/:cnpj/:name/:ad/:number/:region/:managerId',StoresController.registerStore);
router.post('/registrarCliente/:name/:phone/:password/:level', UserController.registerUser);
router.post('/registrarRepresentante/:name', ManagerController.registerManager);

//Updates
router.put('/attProduto/:pCode/:pName/:pDisc/:id', ProductsController.updateProduct);
router.put('/attLoja/:cnpj/:name/:ad/:number/:region/:id', StoresController.updateStore);
router.put('/attUser/:name/:phone/:pw/:al/:id', UserController.updateUder);
router.put('/attRepresentante/:name/:id', ManagerController.updateManager);

//Deletes
router.delete('/deletarProduto/:id', ProductsController.deleteProduct);
router.delete('/deletarLoja/:id', StoresController.deleteStore);
router.delete('/deletarUsuario/:id', UserController.deleteUser);
router.delete('/deletarRepresentante/:id', ManagerController.deleteManager);

module.exports = router;