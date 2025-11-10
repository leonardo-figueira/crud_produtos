import produtoService from "../services/produto.service.js";

async function createProdutoController(request, response) {
    const novoProduto = request.body;

    try {
        const produto = await produtoService.createProdutoService(novoProduto);
        response.status(201).send({produto});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

export default {
    createProdutoController
}