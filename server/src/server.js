const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('../models/index');
const { body, validationResult } = require('express-validator');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
const notFound = (res, message) => res.status(404).send({ message });
const commentNotFound = 'Comment not found';

app.get('/comments', async (req, res) => {
  try {
    let comments = await db.Comment.findAll({
      include: [
        {
          model: db.User,
          as: 'user',
        },
      ],
      limit: 20,
      where: {
        parentCommentId: null,
      },
    });
    let childComments = await db.Comment.findAll({
      include: [
        {
          model: db.User,
          as: 'user',
        },
      ],
      where: {
        parentCommentId: {
          [db.Sequelize.Op.not]: null,
        },
      },
    });
    const values = childComments.reduce((acc, comment) => {
      if (typeof acc[comment.parentCommentId] === 'undefined') {
        acc[comment.parentCommentId] = [comment];
      } else {
        acc[comment.parentCommentId].push(comment);
      }
      return acc;
    }, {});

    comments = comments.map((comment) => {
      const returnValue = {
        ...comment.toJSON(),
        children: [],
      };

      if (values[comment.id]?.length > 0) {
        returnValue.children = values[comment.id];
      }

      return returnValue;
    });
    res.json(comments);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * @param {import('express/lib/request')}
 */
app.post(
  '/users/:userId/comment',
  body('comment').notEmpty(),
  async (req, res) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
      return res.status(400).json({ errors: validation.array() });
    }
    try {
      const insertObj = {
        commentText: req.body.comment,
        userId: req.params.userId,
      };

      if (req.body.parentCommentId) {
        insertObj.parentCommentId = req.body.parentCommentId;
      }

      await db.Comment.create(insertObj);
      res.status(200).json({ message: 'Comment created' });
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).send('Internal Server Error');
    }
  },
);

/**
 * @param {import('express/lib/request')}
 */
app.put('/comments/:commentId', async (req, res) => {
  let comment;

  try {
    comment = await db.Comment.findByPk(req.params.commentId);
  } catch (error) {
    return notFound(res, commentNotFound);
  }

  if (!comment) return notFound(res);

  const update = await comment.update({
    commentText: req.body.comment,
    votes: req.body.votes,
  });

  return res.json({
    message: 'Comment updated',
    comment: update,
  });
});

/**
 * @param {import('express/lib/request')}
 */
app.delete('/comments/:commentId', async (req, res) => {
  let comment;

  try {
    comment = await db.Comment.findByPk(req.params.commentId);
  } catch (error) {
    return notFound(res, commentNotFound);
  }

  if (!comment) return notFound(res, commentNotFound);

  try {
    await comment.destroy();
    return res.status(200).json({
      message: 'Comment deleted',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting comment',
    });
  }
});

/**
 * @param {import('express/lib/request')}
 */
app.get('/users/:userId', async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.userId);
    return res.json({
      message: 'User found',
      user,
    });
  } catch (error) {
    return notFound(res, 'User not found');
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
