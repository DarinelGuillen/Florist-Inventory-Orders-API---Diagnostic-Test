const express = require('express');
const app = express();
const inventarioRoutes = require('./routes/inventario');
const pedidosRoutes = require('./routes/pedidos');

app.use(express.json());

// Rutas
app.use('/inventario', inventarioRoutes);
app.use('/pedidos', pedidosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
