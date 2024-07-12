const productList = () => {
    return fetch("http://localhost:3000/produto").then((res) => res.json()).catch((err) => console.log(err));
};

const criarProduto = (nome, valor, imagem) => {
    return fetch("http://localhost:3000/produto", {
        method: "POST",
        headers: {
            "content-type": "application/josn",
        },
        body: JSON.stringify({
            nome,
            valor,
            imagem,
        })
    })
    .then((res) => res.json()).catch((err) => console.log(err));
}

const deletarProduto = (id) => {
    return fetch("http://localhost:3000/produto/"+id, {
        method: "DELETE",
        headers: {
            "content-type": "application/josn",
        },
        body: JSON.stringify({
            id,
        })
    })
    .then((res) => res.json()).catch((err) => console.log(err));
}

export const servicesProducts = {
    productList,
    criarProduto,
    deletarProduto,
};
