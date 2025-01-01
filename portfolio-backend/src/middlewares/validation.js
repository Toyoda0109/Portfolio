// src/middlewares/validation.js
exports.validateInput = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.error('必須フィールドが不足しています');
    return res.status(400).send('必須フィールドが不足しています');
  }

  next();
};
