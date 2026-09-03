const db = require("../config/db");

const createMessage = (data, callback) => {
    const query = "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
    db.query(query, [data.name, data.email, data.subject, data.message], (err, results) => {
        callback(err, results);
    });
};


const getAllMessages = (callback) => {
    const query = "SELECT * FROM messages ORDER BY created_at DESC";
    db.query(query, (err, results) => {
        callback(err, results);
    });
};

module.exports = {
    createMessage,
    getAllMessages
};