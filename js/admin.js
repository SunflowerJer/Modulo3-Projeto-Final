checarAutenticacao();

document.addEventListener('DOMContentLoaded', function() {
  const tabela = document.querySelector('#tabela-produtos tbody');
  const botaoNovo = document.getElementById('botao-novo-produto');
  const modalEl = document.getElementById('modal-produto');
  const form = document.getElementById('form-produto');
  const erroDiv = document.getElementById('produto-erro');
  let editandoId = null;
  let produtoModal;

  async function carregarTabela() {
    try {
      const resp = await fetch('https://fakestoreapi.com/products');
      const produtos = await resp.json();
      tabela.innerHTML = "";
      produtos.forEach(produto => {
        const trad = window.produtosTraduzidos && window.produtosTraduzidos[produto.title];
        const titulo = trad ? trad.titulo : produto.title;
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${produto.id}</td>
          <td>${titulo}</td>
          <td>R$ ${produto.price.toFixed(2)}</td>
          <td>
            <button class="btn btn-sm btn-primary botao-editar rounded-3 mb-1" data-id="${produto.id}">Editar</button>
            <button class="btn btn-sm btn-danger botao-deletar rounded-3" data-id="${produto.id}">Deletar</button>
          </td>
        `;
        tabela.appendChild(tr);
      });
    } catch {
      tabela.innerHTML = "<tr><td colspan='4'>Erro ao carregar produtos.</td></tr>";
    }
  }

  botaoNovo.onclick = function() {
    form.reset();
    editandoId = null;
    erroDiv.innerText = "";
    produtoModal = new bootstrap.Modal(modalEl);
    produtoModal.show();
  };

  modalEl.addEventListener('hidden.bs.modal', function() {
    form.reset();
    erroDiv.innerText = "";
    editandoId = null;
  });

  tabela.onclick = async function(e) {
    if (e.target.classList.contains('botao-editar')) {
      const id = e.target.getAttribute('data-id');
      try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
        const produto = await resp.json();
        document.getElementById('produto-id').value = produto.id;
        document.getElementById('produto-titulo').value = produto.title;
        document.getElementById('produto-preco').value = produto.price;
        document.getElementById('produto-descricao').value = produto.description;
        document.getElementById('produto-imagem').value = produto.image;
        editandoId = produto.id;
        erroDiv.innerText = "";
        produtoModal = new bootstrap.Modal(modalEl);
        produtoModal.show();
      } catch {
        alert('Erro ao buscar produto para edição.');
      }
    }

    if (e.target.classList.contains('botao-deletar')) {
      const usuario = localStorage.getItem('usuario');
      if (usuario !== 'johnd') {
        alert('Você não tem permissão para deletar produtos.');
        return;
      }
      if (!confirm('Tem certeza que deseja deletar este produto?')) return;
      const id = e.target.getAttribute('data-id');
      try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: 'DELETE'
        });
        if (resp.ok) {
          carregarTabela();
        } else {
          alert('Erro ao deletar produto.');
        }
      } catch {
        alert('Erro ao deletar produto.');
      }
    }
  };

  form.onsubmit = async function(e) {
    e.preventDefault();
    erroDiv.innerText = "";
    const titulo = document.getElementById('produto-titulo').value.trim();
    const preco = parseFloat(document.getElementById('produto-preco').value);
    const descricao = document.getElementById('produto-descricao').value.trim();
    const imagem = document.getElementById('produto-imagem').value.trim();

    if (!titulo || !descricao || !imagem || isNaN(preco) || preco <= 0) {
      erroDiv.innerText = "Preencha todos os campos corretamente.";
      return;
    }

    const produto = {
      title: titulo,
      price: preco,
      description: descricao,
      image: imagem,
      category: "others"
    };

    try {
      if (editandoId) {
        const resp = await fetch(`https://fakestoreapi.com/products/${editandoId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(produto)
        });
        if (!resp.ok) throw new Error();
      } else {
        const resp = await fetch('https://fakestoreapi.com/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(produto)
        });
        if (!resp.ok) throw new Error();
      }
      bootstrap.Modal.getInstance(modalEl).hide();
      carregarTabela();
    } catch {
      erroDiv.innerText = "Erro ao salvar produto.";
    }
  };

  carregarTabela();
});