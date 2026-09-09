const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.json({
        name: "Alicia Joice Irawan Rarun Rompas",
        peran: "Fullstack Web Developer",
        deskripsi: "Saya adalah siswa XII RPL 1 yang sedang belajar membuat aplikasi web mengunakan Express.js dan Next.js"
    });
});

module.exports = router;