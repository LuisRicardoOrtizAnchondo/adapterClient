const multicapa = require('multicapaRichiModule');

constructor(libreria){
    return libreria = new multicapa(libreria);
}

obtenerProductos(req, res, next){
    return res.send(200).json(multicapa.getProducts());
}

obtenerUsuarios(req, res, next){
    return res.send(200).json(multicapa.getUsers());
}

postearProducto(req, res, next){
    return res.send(multicapa.postProduct());
}

module.exports = {
    obtenerProductos,
    obtenerUsuarios,
    postearProducto
};