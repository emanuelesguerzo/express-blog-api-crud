const postsData = require("../data/posts");

const checkId = (req, res, next) => {
    const postId = parseInt(req.params.id);

    const post = postsData.find((curPost) => curPost.id === postId);

    if(post) {
        next();
    } else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato. Riprova con un altro Id."
        });
    };
};

// Exports
module.exports = checkId;
