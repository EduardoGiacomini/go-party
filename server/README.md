# Go Party - Backend
Backend para a aplicação Go Party, uma ferramenta web colaborativa para organização de festas.
<hr />

## Como executar?
Para executar o backend da aplicação, é necessário ter instalado e configurado as seguintes tecnologias na máquina:
- [NodeJS](https://nodejs.org/);
- [NPM](https://www.npmjs.com/) (_Normalmente já é instalado juntamente ao NodeJS_);
- [PostgreSQL](https://www.postgresql.org/).

Com as tecnologias instaladas e configuradas, certifique-se de acessar o diretório `server`:
```bash
cd server
```

Vamos começar instalando as dependências do projeto com o seguinte comando:
```bash
npm install
```

Após a instalação das dependências, vamos adicionar as configurações da aplicação nas variáveis de ambiente. Para isso, vamos criar um arquivo `.env` em `go-pary/server` e copiar o conteúdo de `.env.example` para `.env` recém criado . Você pode fazer isso por meio dos seguintes comandos:
```bash
touch .env
cat < .env.example >> .env
```

Agora, você pode editar o arquivo `.env` com as configurações de acesso de seu banco de dados.

Ótimo. Vamos criar o banco de dados por meio da CLI do Sequelize:

```bash
npx sequelize db:create
```

Após executar este comando, um banco de dados chamado `party` (ou outro nome caso você tenha alterado) será criado em seu PostgreSQL SGBD.

Com o banco de dados criado, podemos executar as migrations de criação das tabelas e triggers:
```bash
npx sequelize db:migrate
```

Após isso, finalmente vamos executar a aplicação por meio do seguinte comando:
```bash
npm run start
```

A aplicação estará executando em http://localhost:8080.

Caso você queira executar a aplicação em modo de desenvolvimento:
```bash
npm run dev
```

## Comandos úteis para o Sequelize

```bash
npx sequelize db:create
npx sequelize migration:create --name=nome-da-tabela
npx sequelize db:migrate
npx sequelize db:migrate:undo
```

© 2020 Copyright - Carlos Giacomini - Todos os direitos reservados.
