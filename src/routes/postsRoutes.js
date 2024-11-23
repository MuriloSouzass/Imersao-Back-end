// Importar as bibliotecas necessárias:
// - express: para criar a aplicação web
// - multer: para lidar com uploads de arquivos
// - listarPosts, postarNovoPost, uploadImagem: funções do controlador para gerenciar posts e uploads
import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessesStatus: 200
}

// Configurar como os arquivos serão armazenados:
// - Criar uma pasta chamada 'uploads' para salvar os arquivos
// - Manter o nome original do arquivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Criar um objeto de upload usando a configuração de armazenamento
const upload = multer({ dest: "./uploads", storage });

// Criar uma função para definir as rotas da aplicação
const routes = (app) => {
  // Habilitar o processamento de dados em formato JSON
  app.use(express.json());
  app.use(cors(corsOptions));

  // Definir as rotas:
  // - GET /posts: Buscar todos os posts (implementado em listarPosts)
  app.get("/posts", listarPosts);
  // - POST /posts: Criar um novo post (implementado em postarNovoPost)
  app.post("/posts", postarNovoPost);
  // - POST /upload: Fazer upload de uma imagem (implementado em uploadImagem)
  //   - upload.single('imagem'): Configura o Multer para receber um único arquivo chamado 'imagem'
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost)
};

// Exportar a função de rotas para que possa ser usada em outros módulos
export default routes;