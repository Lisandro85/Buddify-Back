# Usamos la imagen oficial de Node.js
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos package.json y package-lock.json (o yarn.lock) para instalar las dependencias
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todo el código fuente al contenedor
COPY . .

# Construimos el proyecto (especifica el directorio de salida para los archivos compilados)
RUN npm run build

# Exponemos el puerto en el que la aplicación se ejecutará (puede variar según la configuración)
EXPOSE 3001

# El comando para ejecutar la aplicación
CMD ["node", "dist/main.js"]
