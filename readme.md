# API Nodejs Minimal Crud Postgres
Este é um projeto básico de uma API REST para gerenciar vídeos, desenvolvido com Fastify e Postgres.js. Ele fornece operações CRUD para armazenar e manipular informações de vídeos em um banco de dados PostgreSQL ou em memória (para testes).

## 📦 Estrutura do Projeto
```bash
.
├── database-memory.js    # Implementação em memória (apenas para testes)
├── database-postgres.js  # Implementação com PostgreSQL
├── server.js             # Servidor principal
├── package.json          # Configurações do projeto
├── .env                  # Variáveis de ambiente (não incluído no repositório)
└── README.md             # Documentação do projeto
```

## 🚀 Funcionalidades
- Listar Vídeos: Filtra vídeos com base em um termo de busca.
- Criar Vídeo: Adiciona um novo vídeo ao banco de dados.
- Atualizar Vídeo: Atualiza informações de um vídeo existente.

## 🛠️ Tecnologias Utilizadas
- Fastify: Framework web rápido e eficiente.
- Postgres.js: Cliente PostgreSQL moderno para Node.js