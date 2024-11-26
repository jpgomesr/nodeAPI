const express = require("express");
const axios = require("axios");
const image = require("./models/imagens");

const app = new express();

app.use(express.json());

const PORT = 3011;

app.post("/add_image", (req, res) => {
   try {
      const reference = req.body.reference;
      const title = req.body.title;

      image.create({
         referencia: reference,
         data_criacao: new Date(),
         titulo: title,
      });

      res.status(200).json({
         message: "Imagem adicionada com sucesso!",
      });
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.get("/get_image/:title", async (req, res) => {
   const title = req.params.title;

   try {
      const findImage = await image.findOne({ where: { titulo: title } });

      if (findImage) {
         res.status(200).json({
            image: findImage,
         });
      } else {
         res.status(404).json({
            message: "Image not found!",
         });
      }
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.get("/get_all_images", async (req, res) => {
   try {
      const findAllImages = await image.findAll();

      if (findAllImages) {
         res.status(200).json({
            images: findAllImages,
         });
      } else {
         res.status(404).json({
            message: "Images empty",
         });
      }
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.delete("/delete_image/:title", async (req, res) => {
   const title = req.params.title;

   try {
      const deleted = await image.destroy({ where: { titulo: title } });

      if (deleted) {
         res.status(200).json({
            message: "Imagem deletada com sucesso!",
         });
      } else {
         res.status(404).json({
            message: "Imagem não encontrado",
         });
      }
   } catch (error) {
      res.status(500).json({
         error: "Erro inesperado",
      });
   }
});

app.put("/update_image/:title", async (req, res) => {
   const title = req.params.title;

   try {
      const alterImage = await image.findOne({ where: { titulo: title } });

      if (alterImage) {
         const newTitle = req.body.title;
         const newReference = req.body.reference;

         if (newTitle != null) {
            alterImage.titulo = newTitle;
         }
         if (newReference != null) {
            alterImage.referencia = newReference;
         }

         await alterImage.save();

         res.status(200).json({
            message: "Imagem modificada com sucesso!",
         });
      } else {
         res.status(404).json({
            message: "Imagem não encontrado",
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
