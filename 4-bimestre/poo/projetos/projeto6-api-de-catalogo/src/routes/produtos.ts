import express from "express"

const router = express.Router()



router.get("/", (req, res) =>{
  console.log(req.params) 
  res.json([
  { "id": 1, "nome": "Mouse Gamer", "preco": 120 },
  { "id": 2, "nome": "Teclado Mecânico", "preco": 350 },
  { "id": 3, "nome": "Monitor Full HD", "preco": 900 }
] )
})
router.get("/:id", (req, res) =>{
  console.log(req.params) 
  res.json([
     { "id": 1, "nome": "Mouse Gamer", "preco": 120 }
  ])
})

router.get("/:id2", (req, res) =>{
  console.log(req.params) 
  res.json([
    { "id": 2, "nome": "Teclado Mecânico", "preco": 350 }
  ])
})

router.get("/:id3", (req, res) =>{
  console.log(req.params) 
  res.json([
    { "id": 3, "nome": "Monitor Full HD", "preco": 900 }
  ])
})

router.post("/", (req, res) => { 
  res.json({ produtos: [
    { "id": 4, "nome": "Headset RGB", "preco": 200 }
]})
})

router.post("/", (req, res) => { 
  res.json({ produtos: []})
})

export default router