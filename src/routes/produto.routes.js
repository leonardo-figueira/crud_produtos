import produtoController from "../controller/produto.controller.js";
import {Router} from "express";

const produtoRouter = Router();

produtoRouter.post("/produtos", produtoController.createProdutoController);

export default produtoRouter;