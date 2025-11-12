import { Router } from "express";

const router = Router();


let produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 }
];


router.get("/", (req, res) => {
  res.json(produtos);
});


router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  res.json(produto);
});


router.post("/", (req, res) => {
  const { id, nome, preco } = req.body;

  if (!id || !nome || !preco) {
    return res.status(400).json({ erro: "Campos id, nome e preco são obrigatórios" });
  }

  const novoProduto = { id, nome, preco };
  produtos.push(novoProduto);

  res.status(200).json(novoProduto);
});

export default router;
