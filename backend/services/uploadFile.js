const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "controllers/task"); // Save files in 'uploads/images'
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); // Save with unique timestamp-based name
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
  fileFilter: function (req, file, cb) {
    if (file.mimetype.includes("image")) {
      cb(null, true); // Accept file if it's an image
    } else {
      cb("Please enter an image", false); // Reject non-image files
    }
  },
});

module.exports = {
  upload,
};
