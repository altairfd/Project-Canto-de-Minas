const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();

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
router.post('/registrarCliente', upload.array(), UserController.registerUser);
router.post('/registrarLoja', upload.array(), StoresController.registerStore);
router.post('/registrarProduto/:productCode/:productName/:productDescription', upload.array(), ProductsController.registerProduct);
router.post('/registrarRepresentante', upload.array(), ManagerController.registerManager);

module.exports = router;