# Go Party
Aplicação Go Party, uma ferramenta web colaborativa para organização de festas.
<hr />

## Objetivo
O objetivo desta aplicação é introduzir o uso de frameworks ORM (Mapeamento objeto-relacional) para a utilização em conjunto de banco de dados relacionais. Este projeto foi criado para o trabalho prático da disciplina de `Laboratório de Banco de Dados` ofertada pela `UFMS`.

## Como executar?
Para executar a API você irá precisar ter instalado e configurado em sua máquina:
- [NodeJS](https://nodejs.org/);
- [NPM](https://www.npmjs.com/) (_Normalmente já é instalado juntamente ao NodeJS_);
- [PostgreSQL](https://www.postgresql.org/).

Com as tecnologias instaladas e configuradas, vamos começar instalando as dependências do projeto:

```bash
npm install
```

Após a instalação das dependências, vamos adicionar as configurações para o banco de dados. Para isso, vamos criar um arquivo `.env` em `go-pary/server` e copiar o conteúdo de `.env.example` para `.env` recém criado . Você pode fazer isso por meio dos seguintes comandos:

```bash
touch .env
cat < .env.example >> .env
```

Agora, você pode editar o aquivo `.env` com as configurações de acesso de seu banco de dados.

Ótimo. Vamos criar o banco de dados por meio da CLI do Sequelize:

```bash
npx sequelize db:create
```

Com o banco de dados criado, podemos executar as migrations de criação das tabelas:
```bash
npx sequelize db:migrate
```

Após isso, finalmente vamos executar a aplicação por meio do seguinte comando:
```bash
npm run start
```

A aplicação estará executando em http://localhost:8080.

## Comandos do Sequelize

```bash
npx sequelize db:create
npx sequelize migration:create --name=create-party-table
npx sequelize db:migrate
npx sequelize db:migrate:undo Desfaz a última migration
```

<p style="text-align: center;">© 2020 Copyright - Carlos Giacomini - Todos os direitos reservados.</p>
