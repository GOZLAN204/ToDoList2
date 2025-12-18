function validValues(req, res, next) {
    console.log('BODY:', req.body);

    const { CategoryID } = req.body;
    if (!CategoryID) {
        return res.status(400).json({ message: "חסרים נתונים" });
    }
    next();
}
async function getOne(taskId,User_Id) {
    let sql =  `SELECT * FROM tasks WHERE id = ? AND UserID= ?`
    let[result] = await db.query(sql,[taskId,User_Id]);
    return result[0];
}
async function add({ UserID, CategoryID }) {
    let sql = `INSERT INTO tasks (IsDone, UserID, CategoryID) VALUES (0, ?, ?)`;
    let [result] = await db.query(sql, [UserID, CategoryID]);
    return result.insertId;
}

module.exports = {
    validValues,
    getOne,
    add,
};