const express= require('express');
const router = express.Router();
const Post =require('../models/Post')

//POST /create: Endpoint para crear una publicación.
router.post('/create',async(req,res)=>{
    try{

    
        const { title, body } = req.body;

        // Validar que se envíen todos los campos requeridos
        if (!title) {
            return res.status(400).json({ error: "The 'title' field is required" });
        }

        if (!body) {
            return res.status(400).json({ error: "The 'body' field is required" });
        }

        const newPost = new Post({ title, body });

        await newPost.save();

        res.status(201).send(newPost);

    }catch (error){
        console.error(error);
        res
            .status(500)
            .send({message:'There was a problem trying to create a post'})

    }

});




//- GET /: Endpoint para traer todas las publicaciones.
router.get('/',async(req,res)=>{
    try{
       
        const posts = await Post.find();
        res.json(posts);
    }catch (error){
        console.error(error);
        res
            .status(500)
            .send({message:'Error getting posts'})

    }

});


//- GET /id/:_id: Endpoint para buscar publicación por id.
router.get("/id/:_id", async (req, res) => {
    try {
        const Post_id = await Post.findById(req.params._id);
        if (!Post_id) {
            return res.status(404).json({ error: "Post not found" });
        }
        res.status(200).json(Post_id);
    } catch (error) {
        res.status(500).json({ error: "Error searching for post" });
    }
});


//- GET /title/:title: Endpoint para buscar una publicación por su titulo.
router.get('/title/:title', async (req, res) => {
    try {
        const post = await Post.find({ title: req.params.title });

        if (!post) return res.status(404).json({ error: "Post not found" });
        
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



//- PUT /id/:_id: Endpoint para actualizar una publicación.
router.put("/id/:_id", async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params._id, req.body, 
            { new: true });

        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });

        res.status(200).json({ mensaje: "Title updated successfully", updatedPost });
    } catch (error) {
        res.status(500).json({ error: "Error updating task" });
    }
});


//- DELETE /id/:_id: Endpoint para eliminar una publicación.
router.delete("/id/:_id", async (req, res) => {
    try {
        const postDeleted = await Post.findByIdAndDelete(req.params._id);

        if (!postDeleted) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json({ mensaje: "Post deleted successfully", postDeleted });
    } catch (error) {
        res.status(500).json({ error: "Error deleting post" });
    }
});


// GET /postsWithPagination: Endpoint para traer todas las publicaciones de 10 en 10 (paginación).
//  Es decir, si estoy en la pagina 1  me muestra las 10 primeras publicaciones y si estoy en la pagina 2 me muestra las 10 siguientes.
router.get("/postsWithPagination", async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1; // Página por defecto: 1
        let limit = 10; // Número de publicaciones por página
        let skip = (page - 1) * limit; // Calcula cuántos documentos saltar

        const posts = await Post.find().skip(skip).limit(limit);

        res.json({
            pagina: page,
            total: posts.length,
            posts,
        });
    } catch (error) {
        res.status(500).json({ error: "Error getting posts" });
    }
});

module.exports = router;



