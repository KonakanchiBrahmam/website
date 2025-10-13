const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Define routes for other pages
app.get('/product1', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'product1.html'));
});

// Add routes for other pages (product2, product3, compare, prebook, about, contact, rentals)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
