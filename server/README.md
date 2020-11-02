npx sequelize db:create
npx sequelize migration:create --name=create-party-table
npx sequelize db:migrate
npx sequelize db:migrate:undo Desfaz a última migration