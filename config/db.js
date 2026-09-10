const mysql = require("mysql2");

// Konfigurasi langsung Laragon (Tanpa .env)
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "portofolio_db"
};

const db = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password
});

const createTablesIfNeeded = (callback) => {
    const tableQueries = [
        `CREATE TABLE IF NOT EXISTS projects (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            category VARCHAR(100),
            description TEXT,
            image_url VARCHAR(255),
            github_url VARCHAR(255),
            live_url VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        `CREATE TABLE IF NOT EXISTS messages (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            subject VARCHAR(255),
            message TEXT NOT NULL,
            is_read BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        `CREATE TABLE IF NOT EXISTS skills_groups (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            icon VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        `CREATE TABLE IF NOT EXISTS skills (
            id INT AUTO_INCREMENT PRIMARY KEY,
            skill_group_id INT NOT NULL,
            name VARCHAR(255) NOT NULL,
            level VARCHAR(100) NOT NULL,
            percentage INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (skill_group_id) REFERENCES skills_groups(id) ON DELETE CASCADE
        )`,
        `CREATE TABLE IF NOT EXISTS certificates (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            issuer VARCHAR(255) NOT NULL,
            date VARCHAR(100),
            credential_id VARCHAR(255),
            verification_url VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        `CREATE TABLE IF NOT EXISTS testimonials (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            role VARCHAR(255),
            company VARCHAR(255),
            avatar VARCHAR(255),
            stars DECIMAL(2,1) DEFAULT 5.0,
            quote TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
    ];

    const createNextTable = (index) => {
        if (index >= tableQueries.length) return callback();

        db.query(tableQueries[index], (err) => {
            if (err) {
                console.error("Table creation failed:", err.message);
            }
            createNextTable(index + 1);
        });
    };

    createNextTable(0);
};

const removeDuplicateSkills = (callback) => {
    const deleteQuery = `
        DELETE duplicate
        FROM skills AS duplicate
        INNER JOIN skills AS original
            ON duplicate.skill_group_id = original.skill_group_id
           AND duplicate.name = original.name
           AND duplicate.level = original.level
           AND duplicate.percentage = original.percentage
           AND duplicate.id > original.id
    `;

    db.query(deleteQuery, (err) => {
        if (err) {
            console.error("Failed to remove duplicate skills:", err.message);
            return callback();
        }

        db.query(
            `ALTER TABLE skills ADD UNIQUE KEY unique_skill (skill_group_id, name, level, percentage)`,
            (indexErr) => {
                if (indexErr && indexErr.code !== "ER_DUP_KEYNAME") {
                    console.error("Failed to protect skills from duplicates:", indexErr.message);
                }
                callback();
            }
        );
    });
};

const seedInitialData = () => {
    const queries = [
        {
            table: "projects",
            countQuery: "SELECT COUNT(*) AS total FROM projects",
            insertQuery: `
                INSERT INTO projects (title, category, description, image_url, github_url, live_url)
                VALUES
                    ('SmpAlarafBone', 'Web Dev', 'Project grup sekolah beda jurusan pertama.', '', 'https://github.com/AliciaJoiceIrawan/SmpAlarafBone', 'http://localhost:3000')
            `
        },
        {
            table: "messages",
            countQuery: "SELECT COUNT(*) AS total FROM messages",
            insertQuery: `
                INSERT INTO messages (name, email, subject, message)
                VALUES
                    ('John Doe', 'john@example.com', 'Tawaran Project', 'Halo Alicia, saya tertarik untuk bekerja sama dalam pembuatan website.'),
                    ('Jane Smith', 'jane@example.com', 'Tanya Portfolio', 'Halo, portofolionya keren sekali!')
            `
        },
        {
            table: "skills_groups",
            countQuery: "SELECT COUNT(*) AS total FROM skills_groups",
            insertQuery: `
                INSERT INTO skills_groups (title, icon)
                VALUES
                    ('Frontend Development', '🌐'),
                    ('Backend & Database', '⚙️'),
                    ('Tools & Platforms', '🛠️'),
                    ('Design & Animation', '🎨')
            `
        },
        {
            table: "skills",
            countQuery: "SELECT COUNT(*) AS total FROM skills",
            insertQuery: `
                INSERT INTO skills (skill_group_id, name, level, percentage)
                VALUES
                    (1, 'HTML5 / CSS3', 'Beginner', 60),
                    (1, 'JavaScript', 'Beginner', 65),
                    (1, 'React.js', 'Beginner', 50),
                    (1, 'Next.js (App Router)', 'Advanced', 76),
                    (1, 'Tailwind CSS', 'Advanced', 90),
                    (2, 'Node.js', 'Intermediate', 70),
                    (2, 'Express.js', 'Intermediate', 75),
                    (2, 'MySQL', 'Intermediate', 80),
                    (2, 'RESTful API Development', 'Intermediate', 80),
                    (3, 'Git & GitHub', 'Advanced', 85),
                    (3, '3D ART', 'Intermediate', 95),
                    (3, 'Postman', 'Advanced', 80),
                    (3, 'VS Code', 'Advanced', 75),
                    (4, 'UI/UX Design', 'Intermediate', 75),
                    (4, 'Figma', 'Intermediate', 70),
                    (4, 'Adobe XD', 'Beginner', 55),
                    (4, 'Sektch', 'Intermediate', 80)
            `
        },
        {
            table: "certificates",
            countQuery: "SELECT COUNT(*) AS total FROM certificates",
            insertQuery: `
                INSERT INTO certificates (title, issuer, date, credential_id, verification_url)
                VALUES
                    ('AIClassASEAN.org', 'Dicoding Indonesia', '2025-07-25', 'DICODING-109283', 'https://www.aiclassasean.org/')
            `
        },
        {
            table: "testimonials",
            countQuery: "SELECT COUNT(*) AS total FROM testimonials",
            insertQuery: `
                INSERT INTO testimonials (name, role, company, avatar, stars, quote)
                VALUES
                    ('Muhammad Saad, S.Pd.,M.Pd', 'Kepala Sekolah', 'SMK TELKOM MAKASSAR', '👨‍🏫', 5, 'Alicia menunjukkan performa luar biasa dalam setiap tugas dan proyek sekolah. Dia selalu menjadi leader dalam team project karena inisiatif dan skill'),
                    ('Farid mawardi', 'Kepala Prodi RPL', 'SMK TELKOM MAKASSAR', '👨‍🏫', 4.5, 'Belajar kelompok bareng ananda Alicia selalu asik. Dia pintar menjelaskan konsep gambarnya')
            `
        }
    ];

    const runSeed = (index) => {
        if (index >= queries.length) return;

        const { table, countQuery, insertQuery } = queries[index];

        db.query(countQuery, (countErr, countResults) => {
            if (countErr) {
                console.error(`Failed to check ${table}:`, countErr.message);
                return runSeed(index + 1);
            }

            const total = Number(countResults[0]?.total || 0);

            if (total > 0) {
                return runSeed(index + 1);
            }

            db.query(insertQuery, (insertErr) => {
                if (insertErr) {
                    console.error(`Failed to seed ${table}:`, insertErr.message);
                } else {
                    console.log(`Seeded default data for ${table}`);
                }
                runSeed(index + 1);
            });
        });
    };

    runSeed(0);
};


const initializeDatabase = () => {
    db.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``, (err) => {
        if (err) {
            console.error("Failed to create database:", err.message);
            return;
        }

        db.changeUser({ database: dbConfig.database }, (changeErr) => {
            if (changeErr) {
                console.error("Failed to select database:", changeErr.message);
                return;
            }

            console.log(`Connected to MySQL database: ${dbConfig.database}`);
            createTablesIfNeeded(() => {
                removeDuplicateSkills(() => {
                    seedInitialData();
                });
            });
        });
    });
};

db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err.message);
        return;
    }

    initializeDatabase();
});

module.exports = db;