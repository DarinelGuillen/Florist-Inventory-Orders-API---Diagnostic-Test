const db = require('../config/db');

exports.getAllInventario = (req, res) => {
  db.query('SELECT * FROM inventario WHERE disponible = TRUE', (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving inventory');
    }
    res.json(results);
  });
};
