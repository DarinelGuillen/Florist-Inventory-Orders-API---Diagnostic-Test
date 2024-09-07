const db = require('../config/db');

exports.createPedido = (req, res) => {
  const { id_inventario, cantidad } = req.body;

  // Verificar que el producto existe y hay stock suficiente
  db.query('SELECT * FROM inventario WHERE id = ? AND cantidad >= ?', [id_inventario, cantidad], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking inventory');
    }

    if (results.length === 0) {
      return res.status(400).send('Not enough stock or item does not exist');
    }

    // Crear el pedido
    db.query('INSERT INTO pedidos (id_inventario, cantidad) VALUES (?, ?)', [id_inventario, cantidad], (err, result) => {
      if (err) {
        return res.status(500).send('Error creating order');
      }

      // Reducir el stock en el inventario
      db.query('UPDATE inventario SET cantidad = cantidad - ? WHERE id = ?', [cantidad, id_inventario], (err, updateResult) => {
        if (err) {
          return res.status(500).send('Error updating inventory');
        }

        res.send('Order created successfully');
      });
    });
  });
};
