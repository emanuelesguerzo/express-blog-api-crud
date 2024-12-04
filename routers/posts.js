const express = require("express");
const router = express.Router();
const postsData = require("../data/posts");

// Index
router.get("/", (req, res) => {
    res.json({
        post: postsData,
        lunghezza: postsData.length,
    });
});

// Show
router.get("/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = postsData.find((curPost) => curPost.id === postId);
    res.json(post);
});

// Create
router.post("/", (req, res) => {
    res.json("Creo un nuovo elemento!");
});

// Update
router.put("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("Modifico i dati dell'elemento " + postId);
});

// Modify
router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("Modifico alcuni dati dell'elemento " + postId);
});

// Destroy
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("Cancello l'elemento " + postId)
})

module.exports = router;