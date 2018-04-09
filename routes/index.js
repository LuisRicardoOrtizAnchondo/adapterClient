const express = require('express');
const router = express.Router();
const multicapa = require('multicapaRichiModule');
const multicapaAdapter = require('adapter');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Esto sería utilizando la librería de Richi directamente
router.get('/productos', multicapa.getProducts);
router.get('/usuarios', multicapa.getUsers);
router.post('/postearProducto', multicapa.postProduct);
//Esto sería utilizando un adapter
/*router.get('/productos', multicapaAdapter.obtenerProductos);
router.get('/usuarios', multicapaAdapter.obtenerUsuarios);
router.post('/postearProducto', multicapaAdapter.postearProducto);
*/
module.exports = router;
