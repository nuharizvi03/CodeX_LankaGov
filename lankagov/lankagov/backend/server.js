const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lankagov'
});

app.get('/api/testimonials', (req, res) => {
  db.query('SELECT name, rating, comment FROM testimonials', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/appointment/:ref', (req, res) => {
  const ref = req.params.ref;
  db.query('SELECT status FROM appointments WHERE reference=?', [ref], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json({ status: results[0].status });
    } else {
      res.json({ status: 'Not found' });
    }
  });
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
