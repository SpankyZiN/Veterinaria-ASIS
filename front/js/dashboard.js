// Verificamos si está logueado
if (localStorage.getItem('loggedIn') !== 'true') {
  alert('Debes iniciar sesión primero');
  window.location.href = 'login.html';
}

const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
});

const form = document.getElementById('mascota-form');
const lista = document.getElementById('lista-mascotas');

const mascotas = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre-mascota').value;
  const raza = document.getElementById('raza').value;
  const edad = document.getElementById('edad').value;

  const nuevaMascota = { nombre, raza, edad };
  mascotas.push(nuevaMascota);

  form.reset();
  mostrarMascotas();
});

function mostrarMascotas() {
  lista.innerHTML = '';
  mascotas.forEach((m, i) => {
    const li = document.createElement('li');
    li.textContent = `${m.nombre} - ${m.raza} - ${m.edad} años`;
    lista.appendChild(li);
  });
}
