import { createPost, deletePost, findPost, findPostById, updatePost } from "../models/Post.js";

export const addPost = async (req, res) => {
    try {
        const { userId, title, subtitle, body } = req.body;
        const pst = await createPost(userId, title, subtitle, body);
        res.status(201).json({ pst });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to add Post", message: error.message });
    }
};

export const findAllPost = async (req, res) => {
    try {
        const posts = await findPost();
        res.status(200).json({ posts });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find Posts", message: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const post = await findPostById(req.params.id);
        res.status(200).json({ post });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to find post by id", message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, userId, subtitle, body } = req.body;
        const post = await updatePost(parseInt(id), title, userId, subtitle, body);
        res.status(200).json({ post });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to update Post", message: error.message });
    }
};

export const delPost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await deletePost(parseInt(id));
        res.status(200).json({ post });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to delete Post", message: error.message });
    }
};
