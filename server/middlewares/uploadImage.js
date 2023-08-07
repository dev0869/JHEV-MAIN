const multer = require("multer");
const sharp = require("sharp");
const path= require("path");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
console.log(req.file)
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 2000000 },
});

const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      
      await sharp(file.path.replace(/\/\/+/g, '/'))
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`./public/images/products/${file.filename.replace(/\/\/+/g,'/')}`);
      fs.unlinkSync(`./public/images/products/${file.filename.replace(/\/\/+/g,'/')}`);
    })
  );
  next();
};

const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename.replace(/\/\/+/g,'/')}`);
      fs.unlinkSync(`public/images/blogs/${file.filename.replace(/\/\/+/g,'/')}`);
    })
  );
  next();
};
module.exports = { uploadPhoto, productImgResize, blogImgResize };
