const postsData = require("../data/posts");

const index = (req, res) => {
    res.json({
        post: postsData,
        lunghezza: postsData.length,
    });
};

const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = postsData.find((curPost) => curPost.id === postId);
    res.json(post);
};

const create = (req, res) => {
    res.json("Creo un nuovo elemento!");
};

const update = (req, res) => {
    const postId = req.params.id;
    res.json("Modifico i dati dell'elemento " + postId);
};

const modify = (req, res) => {
    const postId = req.params.id;
    res.json("Modifico alcuni dati dell'elemento " + postId);
};

const destroy = (req, res) => {
    const postId = req.params.id;
    res.json("Cancello l'elemento " + postId);
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