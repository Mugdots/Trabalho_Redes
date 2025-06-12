# Projeto Full-Stack com Docker Compose, MongoDB e Redis

Este projeto demonstra uma aplicação web full-stack conteinerizada utilizando Docker Compose para orquestrar os serviços:
- Frontend (HTML/JS)
- Backend (Node.js/Express)
- Banco de Dados MongoDB
- Cache Redis

## Como usar

1. Inicialize ou clone o repositório Git:

```bash
git init
git remote add origin https://github.com/usuario/Trabalho_Redes.git
```
ou 

```bash
git clone https://github.com/usuario/Trabalho_Redes.git
```
2. Sicronizar com o Trabalho Remoto
  
```bash
git pull
```

4.  Crie a imagem e suba os contêineres:

```bash
docker-compose up --build
```

3. Acesse o frontend em [http://localhost:3000](http://localhost:3000) e a API backend em [http://localhost:5000](http://localhost:5000).

## Testando a aplicação

- Para criar um novo item, utilize o formulário no frontend ou envie um POST para a API:

```bash
curl -X POST http://localhost:5000/items -H "Content-Type: application/json" -d '{"name": "Exemplo"}'
```

- Para listar os itens cadastrados:

```bash
curl http://localhost:5000/items
```

- Os itens são persistidos no MongoDB e o endpoint GET utiliza cache Redis por 10 segundos.

## Estrutura
- `/frontend` — código do frontend
- `/backend` — código do backend
- `docker-compose.yml` — orquestração dos serviços
- `.gitignore` — para ignorar node_modules e arquivos desnecessários

## Repositório
[https://github.com/usuario/meu-projeto.git](https://github.com/usuario/meu-projeto.git)
