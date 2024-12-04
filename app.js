const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts")

app.use(express.static("public"));

app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.json("Server del mio Blog");
});

app.listen(port, () => {
    console.log(`Server in esecuzione sulla porta ${port}`);
});