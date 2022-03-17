const express = require("express");

// Controllers
const {
  getAllComments,
  getCommentById,
  createComment,
} = require("../controllers/comments.controller");

const router = express.Router();

router.get("/", getAllComments);

router.get("/:id", getCommentById);

router.post("/", createComment);

module.exports = {
  commentsRouter: router,
};
