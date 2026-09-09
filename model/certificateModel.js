const db = require("../config/db");

const getAllCertificates = (callback) => {
    const query = `
        SELECT
            MIN(id) AS id,
            title,
            issuer,
            date,
            credential_id,
            verification_url,
            MAX(created_at) AS created_at
        FROM certificates
        GROUP BY title, issuer, date, credential_id, verification_url
        ORDER BY created_at DESC
    `;
    db.query(query, (err, results) => {
        callback(err, results);
    });
};

module.exports = {
    getAllCertificates,
};