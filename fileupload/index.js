// index.js

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

let imageData = [];

// Serve the user view directly at the root URL
app.get('/', (req, res) => {
  res.render('index', { imageData });
});

// Display admin dashboard or redirect based on authentication
app.get('/admin', (req, res) => {
  res.render('admin');
});

// Handle image upload from the admin dashboard
app.post('/upload', upload.single('image'), (req, res) => {
  const { filename } = req.file;
  const label = req.body.label;

  imageData.push({ filename, label });

  res.redirect('/admin');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
