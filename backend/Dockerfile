# Usar uma imagem base para Node.js
FROM node:18

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos do projeto para o contêiner
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código para o contêiner
COPY . .

# Expor a porta usada pelo backend
EXPOSE 3002

# Comando para iniciar o servidor
CMD ["npm", "run", "start"]