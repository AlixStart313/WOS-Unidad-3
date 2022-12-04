const { query } = require('../../../utils/mysql');

const findAll = async () => {
    const sql = `SELECT * FROM usuarios`;
    return await query(sql,[]);
};


const findById = async (id) => {
    if(Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `SELECT * FROM usuarios where idusuario = ?`;
    return await query(sql,[id]);
};


const save = async (person) => {
    if(
        !person.username ||
        !person.nombre ||
        !person.apellidop||
        !person.apellidom ||
        !person.email ||
        !person.contrasenia||
        !person.fechanacimiento||
        !person.carrera||
        !person.genero
    ) throw Error ('Missing fields');

    const sql = `INSERT INTO usuarios (username,nombre,apellidop,apellidom,
        email,contrasenia,fechanacimiento,carrera,genero) VALUES (?,?,?,?,?,?,?,?,?)`;

    const { insertedId } = await query (sql,[
        person.user,
        person.nombre,
        person.apellidop,
        person.apellidom || null,
        person.email,
        person.contrasenia,
        person.fechanacimiento,
        person.carrera,
        person.genero,
    ]);
    return {...person,id: insertedId};
};

module.exports = {
    findAll,
    findById,
    save,
};