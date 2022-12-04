const {query} =  require  ('../../../utils/mysql');



const findAllCategories = async() =>{
 const  sql =`SELECT nombre, cantidaddelibros FROM categorias `
    return await query(sql,[]);
 };  

 const findCategoryById =async (id)=>{
    if(Number.isNaN(id)) throw Error('Wrong type');
    if(!id) throw Error('Missing fields');
    const  sql =`SELECT nombre, cantidaddelibros FROM categorias  WHERE idcategoria=?`;
    return await query(sql,[id]);
 };


 const saveCategory = async (categoria)=>{
    if (!categoria.nombre) throw Error ('Missing fields');
    const sql=`INSERT INTO categorias (nombre) VALUES (?)`;

    const {insertedId} = await  query (sql,[
      categoria.nombre
    ]);
    return{...categoria,id: insertedId}
 };

 const updateCategory =async(category,id) =>{
    if(Number.isNaN(id)) throw Error('Wrong type');
    if(!id ||
       !category.name) throw Error('Missing fields');
    const sql =`UPDATE categorias set nombre=? WHERE idcategoria=?`;

    const {insertedId} =await query (sql,[
        category.name
    ]);

    return {...category,id: insertedId};

 };

 const deleteCategory = async(id) =>{
     if (Number.isNaN(id))throw Error ('Wrong type');
     if (!id) throw Error ('Missing fields');
     const sql = 'DELETE FROM categorias WHERE idcategoria =?'; 
     return await query(sql,[id]);
 }

 module.exports ={
    findAllCategories,
    findCategoryById,
    saveCategory,
    updateCategory,
    deleteCategory,
 };