const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3001;

app.get("/parameters/separados/:nome/:idade/:cidade", async (req, res) => {
   const nome = req.params.nome;
   const idade = req.params.idade;
   const cidade = req.params.cidade;
   try {
      res.status(200).json({
         nome,
         idade,
         cidade,
      });
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.get("/parameters/solo/:nome/:idade/:cidade", async (req, res) => {
   const nome = req.params.nome;
   const idade = req.params.idade; // Existe mas n é usado
   const cidade = req.params.cidade; // Existe mas n é usado
   try {
      res.status(200).json({
         nome,
      });
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.post("/parameters/juntos/", async (req, res) => {
   try {
      res.send(req.body);
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.listen(PORT, () => {
   console.log(`Online na porta: ${PORT}`);
});
app.use(express.json());
