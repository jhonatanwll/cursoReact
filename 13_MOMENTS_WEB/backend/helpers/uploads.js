const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cd(null, path.join(__dirname, "../public/images/"));
  },
  fileName: function (req, file, cb) {
    cd(null, Date.now() + path.extname(file.originalname)); // teste.jpg -> extname(.jpg)
  },
});

const filterFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  filterFilter,
});

module.exports = upload;
