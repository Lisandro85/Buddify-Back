# Usa una imagen base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./
RUN npm install
COPY . .

# Expone el puerto para que el contenedor esté accesible
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
