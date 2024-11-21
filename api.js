// Importa as dependências

const express = require("express");
const axios = require("axios");

const app = express(); // criando um servidor para rodar a API

const PORT = 3000;

app.get("/pessoa", async (req, res) => {
   try {
      res.status(200).json({
         message: "Paezão, deu boa, não deu erro nenhum!!!",
      });
   } catch (error) {
      res.status(500).json({
         error: "Paezão, tamo fudido pq nem eu sei oq aconteceu!",
      });
   }
});

app.listen(PORT, () => {
   console.log(`Tamo online na porta ${PORT}`);
});
