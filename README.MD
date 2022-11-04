Back End
npm init -y
npm i typescritp -D
npx tsc --init
npm i fastify
npm i tsx -D
npm i prisma -D // Criação de tabelas
npm i @prisma/client // Comunicação com o banco
npx prisma init --datasource-provider SQLite // Banco padrao do prisma postgresql
npx prisma migrate dev // Executar quando criar uma tabela
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D // Criar Diagramas
npx prisma generate
npm i @fastify/cors
npm i zod // Validação
npm i short-unique-id // Criação de chave unica

Front End
npx create-next-app@latest --use-npm


Mobile
npx create-expo-app mobile


EXTENÇÃO VSCODE
Prisma.prisma