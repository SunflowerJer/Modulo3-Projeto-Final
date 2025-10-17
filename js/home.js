checarAutenticacao();

document.addEventListener('DOMContentLoaded', function() {
  const saudacao = document.getElementById('usuario-saudacao');
  const usuario = localStorage.getItem('usuario');
  saudacao.innerText = usuario ? `Olá, ${usuario}!` : '';

  const lista = document.getElementById('lista-produtos');

  async function carregarProdutos() {
    try {
      const resp = await fetch('https://fakestoreapi.com/products');
      const produtos = await resp.json();
      lista.innerHTML = "";
      produtos.forEach(produto => {
        const trad = window.produtosTraduzidos && window.produtosTraduzidos[produto.title];
        const titulo = trad ? trad.titulo : produto.title;
        const descricao = trad ? trad.descricao : produto.description;
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-stretch';
        const card = document.createElement('div');
        card.className = 'card flex-fill p-3 mb-1 position-relative shadow-sm d-flex flex-column align-items-center justify-content-between';
        card.innerHTML = `
          <img src="${produto.image}" class="card-img-top mx-auto d-block rounded-3 my-2" alt="Imagem do produto">
          <div class="card-body p-2 d-flex flex-column justify-content-between align-items-center w-100">
            <div class="card-title">${titulo}</div>
            <div class="card-price">R$ ${produto.price.toFixed(2)}</div>
            <button class="btn btn-detalhes w-100 mt-2 rounded-3" data-id="${produto.id}">Ver Detalhes</button>
          </div>
        `;
        col.appendChild(card);
        lista.appendChild(col);
      });
    } catch {
      lista.innerHTML = "<p>Erro ao carregar produtos.</p>";
    }
  }

  lista.addEventListener('click', async function(e) {
    if (e.target.classList.contains('btn-detalhes')) {
      const id = e.target.getAttribute('data-id');
      try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
        const produto = await resp.json();
        const trad = window.produtosTraduzidos && window.produtosTraduzidos[produto.title];
        const titulo = trad ? trad.titulo : produto.title;
        const descricao = trad ? trad.descricao : produto.description;
        document.getElementById('modal-titulo').textContent = titulo;
        document.getElementById('detalhes-produto').innerHTML = `
          <img src="${produto.image}" class="img-fluid rounded-3 mb-3" alt="Imagem">
          <p><strong>Preço:</strong> R$ ${produto.price.toFixed(2)}</p>
          <p><strong>Descrição:</strong> ${descricao}</p>
        `;
        const detalheModal = new bootstrap.Modal(document.getElementById('modal-detalhe'));
        detalheModal.show();
      } catch {
        alert('Erro ao buscar detalhes do produto.');
      }
    }
  });

  carregarProdutos();
});