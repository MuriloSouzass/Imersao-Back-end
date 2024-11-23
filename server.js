import express from "express"; 
import routes from "./src/routes/postsRoutes.js";
// Importa o framework Express, que será utilizado para criar o servidor web.

const app = express(); 
// Cria uma instância do Express, que será o nosso servidor.

app.use(express.static("uploads"))

routes(app)

app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 
// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver pronto.

// **Observação:** A partir daqui, temos um array de posts hardcoded, 
// o que geralmente não é recomendado em aplicações reais.
// É preferível buscar os dados do banco de dados.

const posts = [
    // ... (seus posts)
    {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150"
    },
        
    {
    id: 2,
    descricao: "Um gato muito fofo",
    imagem: "https://placekitten.com/400/300"
    },
         
    {
    id: 3,   
    descricao: "Gato preto e branco",
    imagem: "https://placekitten.com/200/200"
    },
];