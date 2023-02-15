const Producto = ({ nombre = "", precio = "", cantidad = "" }) => (
  <div>
    <span>Nombre: {nombre}</span>
    <span>Precio: {precio}</span>
    <span>Cantidad: {cantidad}</span>
  </div>
);

export default Producto;
