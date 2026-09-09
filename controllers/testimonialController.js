const testimonialModel = require("../model/testimonialModel");

const getTestimonials = (req, res) => {
    testimonialModel.getAllTestimonials((err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data testimonial",
                error: err.message,
            });
        }
        res.json({
            success: true,
            message: "Data testimonial berhasil diambil",
            data: results,
        });
    });
};

module.exports = {
    getTestimonials,
};