-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS prueba_d;
USE prueba_d;

-- Crear la tabla inventario
CREATE TABLE IF NOT EXISTS inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    cantidad INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    disponible BOOLEAN DEFAULT TRUE
);

-- Crear la tabla pedidos
CREATE TABLE IF NOT EXISTS pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_inventario INT,
    cantidad INT NOT NULL,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_inventario) REFERENCES inventario(id)
);

-- Insertar datos en la tabla inventario
INSERT INTO inventario (nombre, descripcion, cantidad, precio) VALUES 
('Rosa', 'Flor roja fresca', 100, 15.00),
('Tulipán', 'Flor color amarillo', 50, 20.00),
('Lirio', 'Flor blanca', 30, 25.00);
