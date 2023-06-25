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
router.post('/registrarCliente/:name/:phone/:password/:level', UserController.registerUser);
router.post('/registrarLoja/:cnpj/:name/:ad/:number/:region/:managerId',StoresController.registerStore);
router.post('/registrarProduto/:productCode/:productName/:productDescription', ProductsController.registerProduct);
router.post('/registrarRepresentante/:name', ManagerController.registerManager);

module.exports = router;