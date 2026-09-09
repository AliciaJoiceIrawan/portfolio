const db = require("../config/db");

const getSkills = (callback) => {
    const query = `
        SELECT
            MIN(skills.id) AS id,
         skills.name,
         skills.level,
         skills.percentage,
         skills_groups.title AS group_title,
         skills_groups.icon AS group_icon
         FROM skills
         JOIN skills_groups ON skills.skill_group_id = skills_groups.id
            GROUP BY skills_groups.id, skills_groups.title, skills_groups.icon,
                   skills.name, skills.level, skills.percentage
            ORDER BY skills_groups.id ASC, MIN(skills.id) ASC
    `;
    db.query(query, (err, results) => {
        callback(err, results);
    });
};

module.exports = {
    getSkills,
};