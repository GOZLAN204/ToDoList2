const db = require('../config/db_config');

async function getAll(){
    let sql = `SELECT name FROM categories`;
    let [rows] = await db.query(sql);    
    return rows;
}
async function add({id,CategoryName,users_id}){
    let sql = `INSERT INTO Categoryies (CategoryName) VALUES (?)`;//לפי שם העמודות שנמצאים בטבלה 
    let [result] = await db.query(sql,[name,CategoryName,users_id]); 
    return result.insertId;
}


module.exports ={
    getAll,
    addCategory  
}