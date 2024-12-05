// Data
const postsData = require("../data/posts");

// Index
const index = (req, res) => {
    const queryString = req.query.tags;

    if(queryString === undefined) {
        res.json({
            data: postsData,
            count: postsData.length,
        })
    } else {
        const result = postsData.filter((curPost) =>  curPost.tags.includes(queryString)); 
        res.json({
            data: result,
            count: result.length
        })
    };
};

// Show
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = postsData.find((curPost) => curPost.id === postId);

    if (post === undefined) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato."
        });
    } else {
        res.json(post);
    }
};

// Store
const store = (req, res) => {
    console.log(req.body);

    const id = postsData[postsData.length -1].id + 1;

    const newPost = {
        id: id,
        ...req.body
    }

    postsData.push(newPost)
    res.statusCode = 201;
    res.json(newPost)
};

// Update
const update = (req, res) => {
    const postId = parseInt(req.params.id);

    const postUpdate = {
        id: postId,
        ...req.body
    }

    const indexToUpdate = postsData.findIndex((curPost) => curPost.id === postId);

    if(indexToUpdate === -1) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post da aggiornare non trovato."
        })
    } else {
        postsData[indexToUpdate] = postUpdate;
        res.json(postUpdate);
    }
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
            message: "Post non trovato.",
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
    store,
    update,
    modify,
    destroy,
}