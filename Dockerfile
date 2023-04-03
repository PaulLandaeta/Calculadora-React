# Utiliza la imagen oficial de Node.js como base
FROM node:lts AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Compila la aplicación
RUN npm run build

# Cambia a la imagen oficial de Nginx para servir la aplicación
FROM nginx:stable-alpine

# Copia los archivos de la aplicación compilada al directorio predeterminado de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
