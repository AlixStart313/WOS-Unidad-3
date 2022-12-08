const { lectoresRouter } = require('./lectores/lector.controller');
const {userRouter} = require ('./usuarios/usuarios.controller');
const { capitulosRouter } = require('./capitulos/capitulos.controller');


module.exports = {
    lectoresRouter,
    userRouter,
    capitulosRouter
};