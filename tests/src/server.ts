import type { Request, Response } from 'express';
import express from "express";

const app = express();

// Middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Rota principal de teste
app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ 
    message: 'Servidor Express com TSX rodando com sucesso! 🚀' 
  });
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`\n✅ Server is running!`);
  console.log(`🔗 Local: http://localhost:${PORT}`);
});
