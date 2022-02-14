const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export default function handler(req, res) {
  const imageShot = cloudinary.image(req.body.url, {
    type: 'url2png',
    sign_url: true,
  });

  res.status(200).json({ name: imageShot });
}
