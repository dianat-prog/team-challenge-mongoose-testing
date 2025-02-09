# CREACIÓN DE BD UTILIZANDO MONGOOSE Y TESTING

Téneis que crear una API en Node.js utilizando Express con mongoose que consistirá en una red social, donde podras crear, ver publicaciones, actulizar y borrarlas.

La estructura será la siguiente:
- config
  - config.js // Código de la conexión a la base de datos.
- env
  - .env // Aquí debe ir la MONGO_URI que nos da mongoDB Atlas
- models
  - Post.js // Aqui ira el modelo de la publicación con los campos title, body y los timestamps.
- routes 
  - posts.js // Aquí estarán todas las rutas
- index.js // Añadiremos nuestro servidor, conexión a la base de datos y uniremos el resto de la aplicación

## Endpoints de la API
- POST /create: Endpoint para crear una publicación.
- GET /: Endpoint para traer todas las publicaciones.
- GET /id/:_id: Endpoint para buscar publicación por id.
- GET /title/:title: Endpoint para buscar una publicación por su titulo.
- PUT /id/:_id: Endpoint para actualizar una publicación.
- DELETE /id/:_id: Endpoint para eliminar una publicación.

## Testing
- Testea el endpoint - POST /create: Endpoint para crear una publicación.
- Diapositivas de ayuda: https://docs.google.com/presentation/d/19YMjg7-9EGuMAnzIWk9SseAK9HlnfR1h/edit?usp=sharing&ouid=110594338309918268653&rtpof=true&sd=true

## EXTRA
- GET /postsWithPagination: Endpoint para traer todas las publicaciones de 10 en 10 (paginación). Es decir, si estoy en la pagina 1  me muestra las 10 primeras publicaciones y si estoy en la pagina 2 me muestra las 10 siguientes.
- Implementa validación a la hora de crear un post para que se rellene todos los campos y si no se hace que no deje crear la publicación.
- Testea el endpoint GET /: Endpoint para traer todas las publicaciones.

1. Configuración
- Lo primero es inicializar nuestro proyecto de node
- Lo segundo es hacer npm install para instalar las dependencias de package.json
- Crearemos un servidor http con express en index.js

2. Paso a paso 
- Comenzaremos a manejar los módulos y solo introduciremos lo necesario en cada uno de ellos. No se debe requerir nada que no se vaya a usar.

3. POSTMAN
- Cada endpoint debe ser probado en postman y ver que funcione.


# PISTAS:
- Investiga que es skip y limit: https://mongoosejs.com/docs/api/query.html#Query.prototype.skip()
- Investiga como implementar validaciones con mongoose: https://mongoosejs.com/docs/validation.html


instalamos
npm init -y

npm i -D supertest