const getPosts = (req, res) => {
    res.status(200).send(`Get All posts filtered by ${req.query.title}`);
}

const getPost = (req, res) => {
    res.status(200).send("Save post");
}

const createPost = (req, res) => {
    res.status(201).send("Save post");
}

const updatePost = (req, res) => {
    res.status(200).send("Update post");
}

const deletePost = (req, res) => {
    res.status(200).send(`Post with ID ${req.params.postId} has been deleted due to violation of server regulations`);
}


module.exports = {
createPost,
deletePost,
getPost,
getPosts,
updatePost
}