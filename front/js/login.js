const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const password = document.getElementById('password').value;

  // Para empezar, validamos usuario y pass hardcodeados:
  if (usuario === 'admin' && password === '1234') {
    // Guardamos algo en localStorage para simular sesión
    localStorage.setItem('loggedIn', 'true');
    // Redirigir al dashboard
    window.location.href = 'dashboard.html';
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});
