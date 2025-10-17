# 🦉 Athenian Store

Bem-vindo ao **Athenian Store** – um projeto de e-commerce fictício desenvolvido para o Projeto Final do Módulo 3 - Front End Dinâmico (JS DOM) do curso ADA&Cognizant - DiversAbility.  

---

## ✨ Sobre o projeto

O **objetivo** principal foi construir uma aplicação de e-commerce simplificada, porém funcional, utilizando a [FakeStoreAPI](https://fakestoreapi.com/).  
A aplicação conta com um fluxo completo de autenticação, exibição e detalhamento de produtos, além de uma área administrativa para o gerenciamento de inventário (CRUD).

> **Por que “Athenian”?**  
> O nome é uma brincadeira histórica e cultural: na Antiguidade, as Amazonas e os Atenienses (Athenian) eram inimigos lendários – as Amazonas representavam força e guerra; Atenas, civilização e comércio. Assim, o projeto se posiciona como uma “concorrente” da Amazon, trazendo um toque de estratégia, cultura e humor à proposta!

---

## 🎯 Objetivos de aprendizagem

Este projeto foi pensado para consolidar e praticar habilidades essenciais de desenvolvimento web:

- **Manipulação avançada do DOM**  
  Criação dinâmica de elementos, atualização e remoção de conteúdo de forma interativa.
- **JavaScript Assíncrono**  
  Uso de `async/await` e `fetch` para comunicação eficiente com APIs externas.
- **Consumo de API REST**  
  Integração total com a FakeStoreAPI para operações de listagem, criação, atualização e exclusão de produtos.
- **Autenticação de usuário e persistência de sessão**  
  Validação de login e armazenamento seguro de dados usando `localStorage`.
- **Interfaces dinâmicas e modais**  
  Detalhamento de produtos e edição/criação no admin via modais Bootstrap.
- **Estrutura modular do projeto**  
  Organização dos arquivos em múltiplos HTML e JS, separando responsabilidades e facilitando a manutenção.

---

## ⚙️ Funcionalidades

- **Login com autenticação** (FakeStoreAPI).
- **Página Home:** exibe todos os produtos do marketplace (com títulos e descrições traduzidos para português).
- **Visualização de detalhes:** modal com informações completas do produto.
- **Administração:** CRUD de produtos, com controle de permissão para exclusão.
- **Tema visual personalizado:** verde oliva escuro & dourado, navbar com coroa de louros, fonte clássica inspirada na Grécia Antiga.
- **Responsividade:** grid de produtos centralizado e experiência agradável em diferentes dispositivos.
- **Tradução dinâmica:** produtos exibidos em português via dicionário JS.

---

## 📁 Estrutura de arquivos

```
📁 css/
   └── style.css
📁 js/
   ├── admin.js
   ├── auth.js
   ├── home.js
   ├── login.js
   └── produtos.js
├── admin.html
├── home.html
├── index.html
```

---

## 🚀 Como rodar

1. Clone este repositório.
2. Abra `index.html` no seu navegador.
3. Faça login com um usuário da FakeStoreAPI (exemplo: `johnd` / `m38rmF`).
4. Teste a navegação, visualização e administração de produtos.

---

## 🏛️ Referências históricas e técnicas

- [FakeStoreAPI](https://fakestoreapi.com/) – mock de API REST para e-commerce.
- [Mitologia: Amazonas vs Atenas](https://pt.wikipedia.org/wiki/Amazona_(mitologia)) – rivalidade lendária da antiguidade, inspiração para o nome e identidade visual do projeto.
- Este projeto foi desenvolvido com foco didático, para consolidar conceitos fundamentais de web.

---

## 🎓 Autor

- Projeto por Jerônimo Lucas **(@SunflowerJer)**.
-  Curso ADA Cognizant DiversAbility — Front End Dinâmico (JS DOM)
-Professor: Roosevelt Franklin
---
> **Aviso:**  
> Projeto didático. Todos os produtos, nomes e imagens são fictícios e usados apenas para fins de aprendizado.