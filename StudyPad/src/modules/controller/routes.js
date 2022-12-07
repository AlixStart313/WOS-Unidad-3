const { lectoresRouter } = require('./lectores/lector.controller');
const {userRouter} = require ('./usuarios/usuarios.controller');
const {categoriasRouter} = require('./categorias/categorias.controller');

module.exports = {
    lectoresRouter,
    userRouter,
    categoriasRouter,
};