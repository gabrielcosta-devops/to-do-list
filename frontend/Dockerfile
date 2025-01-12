# Use a imagem oficial do Node.js
FROM node:18

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código fonte para o diretório de trabalho
COPY . .

# Exponha a porta para o frontend
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]