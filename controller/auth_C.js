async function addUser(req,res) {
    try{

    }catch(err){
        res.status(500).json({message:"Server error"})
    }
}
const pool = require("../db_config/db_config");

async function register(req, res) {
    try {
        const { name, email, userName } = req.body;
        const pass = req.pass; // הסיסמה שכבר מוצפנת מה־middleware

        const sql = `
            INSERT INTO users (name, email, userName, pass)
            VALUES (?, ?, ?, ?)
        `;

        await pool.execute(sql, [name, email, userName, pass]);

        res.json({ message: "User registered successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "DB Error" });
    }
}


module.exports ={
    addUser,
    register
}