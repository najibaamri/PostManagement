const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: "dojrd5swn",
  api_key: 613853226658441,
  api_secret: "uTQXnffSwrfbX48gm_PBHIeuXCw",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "posts",
    public_id: (req, file) => file.filename,
  },
});

const parser = multer({ storage: storage });
module.exports = parser;
