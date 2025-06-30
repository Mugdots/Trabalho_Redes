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

4.  Crie a Imagem:

```bash
docker-compose build
```

5. Suba o Container
```bash
docker-compose up
´´´

6. Acesse o Site em [http://localhost:8080], e por meio do proxy reverso, você entrará no site com o banco de dados

## Testando a aplicação

- Para criar um novo item, utilize o formulário no site ou envie o item pelo site do mongoDB

- Para listar os itens cadastrados:

```bash
curl http://localhost:5000/items
```

## Estrutura
- `/frontend` — diretório com os código do site (com script, html e css)
- `/server` — diretório aonde está o cache e o servidor do banco de dados, juntamente com o backend implementado
- `/nginx´ — diretório com a configuração com porxy reverso do nginx
- `docker-compose.yml` — 

## Repositório
[https://github.com/usuario/meu-projeto.git](https://github.com/usuario/meu-projeto.git)
