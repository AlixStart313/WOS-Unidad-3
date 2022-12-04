const {Response,Router} = require('express');
const validateError = require ('../../../utils/mysql');
const {findAllCategories,
       findCategoryById,
       saveCategory,
       updateCategory,
       deleteCategory} = require ('./categorias.gateway.js');

const getAll = async (req,res =Response)=>{
    try {
        const categorias =await findAllCategories();
        res.status(200).json(categorias);
        
    } catch (error) {
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const getById = async(req,res =  Response)=>{
    try {
       const {id} =req.params;
       const category = await findCategoryById(id);
       res.status(200).json(category); 
    } catch (error) {
        console.log(error)
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const insert =async (req,res = Response)=>{
 try {
    const {nombre}=req.body;
    const category = await saveCategory({
       nombre,
    });
    res.status(200).json(category);
 } catch (error) {
    console.log(error);
    const message = validateError(error);
    res.status(400).json({message});
 }
};

const update = async (req,res = Response) =>{
    try {
        const{name}=req.body;
        const category = await updateCategory({
            name
        });
        res.status(200).json(category);
        
    } catch (error) {
        const message = validateError(error);
        res.status(400).json({message});
        
    }

};

 const drop = async (req,res = Response)=>{
    try {
         const {id} = req.params;
         const category = await deleteCategory(id);
         res.status(200).json(category); 
    } catch (error) {
        const message = validateError(error);
        res.status(400).json({message});
    }
 };

 const categoriasRouter = Router();

 categoriasRouter.get(`/`,[],getAll);
 categoriasRouter.get(`/:id`,[],getById);
 categoriasRouter.post(`/`,[],insert);
 categoriasRouter.put('/',[],update);
 categoriasRouter.delete(`/:id`,[],drop);

 module.exports={
    categoriasRouter,
 };
