import { servicesProducts } from "../servicos/produtos-servicos.js";

const produtoCard = document.querySelector("[data-produto]");
const form = document.querySelector("[data-form]");

function criarElemento(nome, valor, imagem, id){
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card">
            <img class="card__img" src="${imagem}" alt="${nome}">

        <div class="card__nome">
            <p>${nome}</p>
            </div>

            <div class="card__valor">
            <p>R$ ${valor}</p>
            <button type="reset" class="card__lixo" data-id="${id}">
                            <img src="./imagens/icons8-lixeira-24.png" alt="Lixeira">
                        </button>
            </div>
        </div>
    `
    produtoCard.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProduct = await servicesProducts.productList();

        listProduct.forEach(produto => {
            produtoCard.appendChild(
                criarElemento(produto.nome, produto.valor, produto.imagem, produto.id)
            );
        });
    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (even) => {
    even.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    servicesProducts.criarProduto(nome, valor, imagem).then((res) => console.log(res)).catch((err) => console.log(err));
});

render();

    const deletar = document.querySelectorAll("[data-id]");
    
    for (let i = 0; i < deletar.length; i ++) {
        deletar[i].addEventListener("click", (even) => {
            even.preventDefault();
            alert("Tem certeza que deseja excluir este produto?");
            // this.servicesProducts.deletarProduto(produto.id);
            // deletarProduto(produto.id)
        console.log(deletar[i]);
    })
    };

