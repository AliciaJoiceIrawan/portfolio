const projectModel = require("../model/projectModel");

const getProjects = (req, res) => {
projectModel.getAllProjects ((err, results) => {
       if (err) {
     return res.status(500).json({
      success: false,
      message: "Gagal mengambil data proyek",
      error: err.message,
   });
}
res.json({
      success: true,
      message: "Data proyek berhasil diambil",
      data: results,
      });
    });
};

const getProjectDetail = (req, res) => {
    const { id } = req.params;
    projectModel.getProjectById(id, (err, result) =>{
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil detail proyek",
                error: err.message,
            });
        }
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "project tidak temukan",
                data: result,
            });
        }
        res.json({
            success: true,
            message: "Detail project berhasil diambil",
            data: result,
        });
    });
};

module.exports = {
    getProjects,
    getProjectDetail,
};