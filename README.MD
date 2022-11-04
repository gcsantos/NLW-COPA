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
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p // Arquivo de configuração
npm i axios


Mobile
npx create-expo-app mobile
npm install native-base
npx expo install react-native-svg@12.1.1
expo install react-native-safe-area-context@3.3.2
npm i react-native-svg-transformer // https://github.com/kristerkari/react-native-svg-transformer
npx expo install expo-auth-session expo-random
npx expo install expo-web-browser



EXTENÇÃO VSCODE
Prisma.prisma