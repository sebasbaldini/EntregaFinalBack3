# Proyecto NodeJS - Gestión de Usuarios y Adopciones

Este proyecto es una API REST desarrollada en NodeJS para gestionar usuarios y adopciones, con autenticación JWT y documentación Swagger. Está preparado para ser ejecutado localmente o mediante Docker.

---

## Contenido

- [Requisitos](#requisitos)  
- [Ejecución local](#ejecución-local)  
- [Uso con Docker](#uso-con-docker)  
- [Tests](#tests)  
- [Documentación API (Swagger)](#documentación-api-swagger)  



## Requisitos

- Node.js v16 o superior  
- npm  
- Docker (opcional, si se desea usar contenedores)  



## Ejecución local

1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/tuusuario/tu-repo.git // PONER MI GIT CUANDO LO TENGA
   cd tu-repo

# INSTALAR DEPENDECIAS

npm install

# EJECUTAR LA APLICACION

npm start

La API estará disponible en http://localhost:8080

# USANDO EL DOCKER
docker pull sebasbaldini/mi-proyeto-web
docker run -p 3000:3000 tuusuario/mi-proyeto-web

# TEST
npm test


# DOCUMENTACION DEL SWAGGER 
http://localhost:8080/api-doc



