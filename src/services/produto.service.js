import produtoRepository from "../repositories/produto.repository.js";

async function createProdutoService(novoProduto) {
    const produto = await produtoRepository.createProdutoRepository(novoProduto);
    
    if (!produto) {
        throw new Error("Erro ao salvar criar novo produto.");
    }

    return produto;
}

async function findAllProdutoService() {
    const produtos = await produtoRepository.findAllProdutoRepository();
    return produtos;
}

async function findProdutoByIdService(id) {
    const produto = await produtoRepository.findProdutoByIdRepository(id);

    if (!produto) {
        throw new Error("Produto não encontrado");
    }
    
    return produto;
}

export default {
    createProdutoService,
    findAllProdutoService,
    findProdutoByIdService
}