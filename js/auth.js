function checarAutenticacao() {
  const usuario = localStorage.getItem('usuario');
  if (!usuario) {
    window.location.href = 'index.html';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const logout = document.getElementById('logout-link');
  if (logout) {
    logout.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.removeItem('usuario');
      window.location.href = 'index.html';
    });
  }
});