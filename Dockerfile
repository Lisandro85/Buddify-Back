# Dockerfile
FROM node:20.14.0

WORKDIR /app

# Copiar dependencias y configurar
COPY package*.json ./
RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando de inicio
CMD ["node", "dist/main.js"]
