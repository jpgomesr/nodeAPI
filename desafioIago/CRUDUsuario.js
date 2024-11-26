const express = require("express");
const axios = require("axios");
const user = require("./models/usuario");

const app = new express();

app.use(express.json());

const PORT = 3010;

app.post("/add_user", (req, res) => {
   try {
      const name = req.body.name;

      user.create({
         nome: name,
         data_criacao: new Date(),
      });

      res.status(200).json({
         message: "Usuário criado com sucesso!",
      });
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.get("/get_user/:name", async (req, res) => {
   const name = req.params.name;

   try {
      const findUser = await user.findOne({ where: { nome: name } });

      if (findUser) {
         res.status(200).json({
            user: findUser,
         });
      } else {
         res.status(404).json({
            message: "User not found!",
         });
      }
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.get("/get_all_users", async (req, res) => {
   try {
      const findAllUsers = await user.findAll();

      if (findAllUsers) {
         res.status(200).json({
            users: findAllUsers,
         });
      } else {
         res.status(404).json({
            message: "Users empty",
         });
      }
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.delete("/delete_user/:name", async (req, res) => {
   const name = req.params.name;

   try {
      const deleted = await user.destroy({ where: { nome: name } });

      if (deleted) {
         res.status(200).json({
            message: "Usuário deletado com sucesso!",
         });
      } else {
         res.status(404).json({
            message: "Usuário não encontrado",
         });
      }
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.put("/update_user/:name", async (req, res) => {
   const name = req.params.name;

   try {
      const alterUser = await user.findOne({ where: { nome: name } });

      if (alterUser) {
         const newName = req.body.name;

         alterUser.nome = newName;

         await alterUser.save();

         res.status(200).json({
            message: "Usuário modificado com sucesso!",
         });
      } else {
         res.status(404).json({
            message: "Usuário não encontrado",
         });
      }
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.listen(PORT, () => {
   console.log(`Online na porta: ${PORT}`);
});
