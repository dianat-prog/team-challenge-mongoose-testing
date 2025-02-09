const request = require("supertest");
const app = require("../index"); // Asegúrate de importar correctamente el servidor
const Post = require("../models/Post"); // Importa el modelo


// Pruebas para el endpoint POST /create
describe("POST /create", () => {
    // Antes de cada prueba, limpia la base de datos
    beforeAll(() => {
        return Post.deleteMany();
    });

    const post ={
        title:"Nuevo Blog de Prueba",
        body: "Verificamos que se crea el Blog con el test"
    };

    test("Should create a new post and return code 201", async () => {
      let postCount =await Post.countDocuments({});

      expect (postCount).toBe(0);

      resPost = await request(app).post('/create').send(post).expect(201);
      postCount =await Post.countDocuments({});

      expect(postCount).toBe(1);
       /*  expect(resPost.post._id).toBeDefined();
        expect(resPost.body.createdAT).toBeDefined();
        expect(resPost.body.post.updatedAT).toBeDefined();*/
        });
  
});



// Pruebas para el endpoint GET /
describe("GET /", () => {
  
    beforeEach(async () => {
        await Post.deleteMany({}); // Limpia la BD

        // Agrega datos de prueba
        await Post.insertMany([
            { title: "Primer Post", body: "Contenido del primer post" },
            { title: "Segundo Post", body: "Contenido del segundo post" },
        ]);
    });

  

    test("Should get all posts and return code 200", async () => {
        const response = await request(app).get("/").expect(200);

        expect(Array.isArray(response.body)).toBe(true); // Debe devolver un array
        expect(response.body.length).toBe(2); // Debe devolver 2 posts
        expect(response.body[0]).toHaveProperty("_id");
        expect(response.body[0]).toHaveProperty("title");
        expect(response.body[0]).toHaveProperty("body");
    });
});