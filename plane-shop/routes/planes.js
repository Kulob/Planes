const express = require('express');
const router = express.Router();
const path = require('path');
const { getPlanes, createPlane, getPlane } = require('../controlles/planes');
const multer = require('multer');

// Показываем где хранить загружаемые файлы
const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
// const storage = multer.diskStorage({
//   destination: (_, __, cb) => {
//     cb(null, 'assets');
//   },
//   filename: (_, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
const upload = multer({ storage });
// @des Получит все самолёты
router.get('/', getPlanes);
// @des Получить самолёт по Id
router.get('/:id', getPlane);
// Создать самолёт
router.post('/', upload.single('planeImage'), createPlane);

module.exports = router;
