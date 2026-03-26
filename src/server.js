const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get(['/', '/bio'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bio.html'));
});

app.get('/photography', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'photography.html'));
});

app.listen(PORT, () => {
  console.log(`Bio page running at http://localhost:${PORT}`);
});
