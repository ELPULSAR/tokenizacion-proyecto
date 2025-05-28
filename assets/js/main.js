document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('productos-container');
  if (productos && productos.length > 0) {
    container.innerHTML = '';
    productos.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${p.nombre}</h3><p>${p.descripcion}</p><hr/>`;
      container.appendChild(div);
    });
  } else {
    container.innerHTML = '<p>No hay productos disponibles.</p>';
  }
});

