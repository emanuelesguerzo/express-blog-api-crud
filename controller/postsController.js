// Data
const postsData = require("../data/posts");

// Index
const index = (req, res) => {
    res.json({
        post: postsData,
        lunghezza: postsData.length,
    });
};

// Show
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = postsData.find((curPost) => curPost.id === postId);

    if (post === undefined) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato!"
        });
    } else {
        res.json(post);
    }
};

// Create
const create = (req, res) => {
    res.json("Creo un nuovo elemento!");
};

// Update
const update = (req, res) => {
    const postId = req.params.id;
    res.json("Modifico i dati dell'elemento " + postId);
};

// Modify
const modify = (req, res) => {
    const postId = req.params.id;
    res.json("Modifico alcuni dati dell'elemento " + postId);
};

// Destroy
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = postsData.findIndex((curPost) => curPost.id === postId);

    if(postIndex === -1) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato!",
        });
    } else {
        postsData.splice(postIndex, 1);
        console.log(postsData);
        res.sendStatus(204);
    }
};

// Export
module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy,
}