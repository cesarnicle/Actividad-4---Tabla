
const tablaUsuarios = document.getElementById('tabla-usuarios');

function crearFila(usuario) {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${usuario.id}</td>
    <td>${usuario.name}</td>
    <td>${usuario.username}</td>
    <td>${usuario.email}</td>
  `;
  tablaUsuarios.appendChild(fila);
}

function crearTabla() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usuarios => {
      usuarios.forEach(usuario => {
        crearFila(usuario);
      });
    })
}

crearTabla();