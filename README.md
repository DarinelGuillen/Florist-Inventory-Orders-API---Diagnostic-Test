
# API Florista

Esta API permite gestionar el catálogo de flores de un vivero y realizar pedidos de manera eficiente.

## Funcionalidades principales:

1. **Consultar inventario de flores**: 
   Los usuarios pueden obtener una lista de todas las flores disponibles en el inventario, incluyendo nombre, descripción, cantidad disponible, precio y estado de disponibilidad.

2. **Realizar pedidos**: 
   Los usuarios pueden crear pedidos especificando el ID del producto en inventario y la cantidad deseada. La API valida si hay suficiente stock y confirma el pedido.

## Endpoints

### 1. Obtener el inventario
- **GET** `/inventario`
- Retorna todas las flores disponibles en stock.
- **Response** (ejemplo):
    ```json
    [
        {
            "id": 1,
            "nombre": "Rosa",
            "descripcion": "Flor roja fresca",
            "cantidad": 100,
            "precio": "15.00",
            "disponible": 1
        }
    ]
    ```

### 2. Crear un pedido
- **POST** `/pedidos`
- Permite crear un pedido para un producto en inventario.
- **Request** (ejemplo):
    ```json
    {
        "id_inventario": 1,
        "cantidad": 5
    }
    ```
- **Response** (ejemplo):
    ```json
    {
        "message": "Order created successfully"
    }
    ```

## Requisitos
- **Node.js** y **Express** para el servidor.
- **MySQL** como base de datos.
- **Dependencias**:
    - `express`
    - `mysql2`

## Instalación

1. Clonar el repositorio.
    ```bash
    git clone https://github.com/DarinelGuillen/Florist-Inventory-Orders-API---Diagnostic-Test.git
    ```
2. Instalar las dependencias.
    ```bash
    npm install
    ```
3. Configurar la base de datos MySQL y ejecutar el script `prueba_d.sql` para crear las tablas necesarias.
4. Iniciar el servidor.
    ```bash
    pip install -r requirements.txt
    node src/index.js
    ```

## Documentación

La documentación completa está disponible en [Postman](https://documenter.getpostman.com/view/25622754/2sAXjRW9kB).

