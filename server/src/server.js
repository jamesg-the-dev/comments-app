const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db');
const { body, validationResult } = require('express-validator');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/comments', async (req, res) => {
  try {
    let comments = await db.Comment.findAll({
      include: [db.User],
      limit: 20,
      where: {
        parentCommentId: null,
      },
    });
    let childComments = await db.Comment.findAll({
      include: [db.User],
      where: {
        parentCommentId: {
          [db.Op.not]: null,
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

  const notFound = () =>
    res.status(404).send({
      message: 'Comment not found',
    });

  try {
    comment = await db.Comment.findByPk(req.params.commentId);
  } catch (error) {
    return notFound();
  }

  if (!comment) return notFound();
  console.log('wersda');

  res.sendStatus(200, comment);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
