document.getElementById('login-form').onsubmit = async function(event) {
  event.preventDefault();
  const usuario = document.getElementById('username').value.trim();
  const senha = document.getElementById('password').value;
  const erroDiv = document.getElementById('login-erro');
  erroDiv.innerText = "";

  try {
    const resp = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: usuario, password: senha })
    });
    const dados = await resp.json();

    if (resp.ok && dados.token) {
      localStorage.setItem('usuario', usuario);
      window.location.href = 'home.html';
    } else {
      erroDiv.innerText = "Usuário ou senha inválidos.";
    }
  } catch {
    erroDiv.innerText = "Erro ao tentar logar. Tente novamente.";
  }
};