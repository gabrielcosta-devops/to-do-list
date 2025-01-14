# Usar uma imagem Node.js como base
FROM node:18 AS build

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos do projeto
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Build do projeto
RUN npm run build

# Servir os arquivos estáticos
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta do container
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]