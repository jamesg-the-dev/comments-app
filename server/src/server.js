const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db');
const { object } = require('./lodash');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
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

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
