const Plane = require('../modles/planes');

const getPlanes = async (req, res) => {
  try {
    const plane = await Plane.find();
    res.status(200).json(plane);
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось получить список самолетов, повторите попытку',
    });
  }
};

const getPlane = async (req, res) => {
  try {
    const plane = await Plane.find({ _id: req.params.id });
    res.status(200).json(plane);
  } catch (error) {
    res.status(500).json({
      message: 'Самолет не найден',
    });
  }
};
const createPlane = async (req, res) => {
  const errors = {};
  if (!req.body.name) {
    errors.name = { message: 'Пожалуйста, указите название' };
  }
  if (!req.body.price) {
    errors.price = { message: 'Пожалуйста, указите цену' };
  }
  if (!req.body.description) {
    errors.description = { message: 'Пожалуйста, указите описание' };
  }
  if (req.body.description && req.body.description.length > 700) {
    errors.description = { message: 'Слишком длиное описание' };
  }
  if (!req.body.capacity) {
    errors.capacity = { message: 'Пожалуйста, укажите вместимость' };
  }
  if (req.body.capacity && req.body.capacity.length > 2) {
    errors.capacity = { message: 'Вместимость не может быть больше 99' };
  }
  if (!req.file) {
    errors.planeImage = { message: 'Пожалуйста, добавьте фото на память' };
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }
  try {
    const { name, price, description, capacity } = req.body;
    const plane = await Plane.create({
      name,
      price,
      description,
      capacity,
      planeImage: `http://localhost:5000/static/${req.file.filename}`,
      // planeImage: `/assets/${req.file.originalname}`,
    });

    res.status(201).json(plane);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Не удалось создать, повторите попытку',
    });
  }
};
module.exports = {
  getPlanes,
  createPlane,
  getPlane,
};
