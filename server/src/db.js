const Sequelize = require('sequelize');

const sequelize = new Sequelize.Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: function (str) {
    console.error(str);
  },
});

//timestamps not working in sqlite for some reason. Decided to manually create them
const timestamps = {
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
};

const User = sequelize.define(
  'user',
  {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    ...timestamps,
  },
  {
    timestamps: false,
  },
);

const Comment = sequelize.define(
  'comments',
  {
    commentText: Sequelize.TEXT,
    votes: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    ...timestamps,
  },
  {
    timestamps: false,
  },
);

Comment.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
});

Comment.belongsTo(Comment, {
  as: 'parentComment',
});

User.hasMany(Comment);

sequelize
  .sync()
  .then(() => {
    console.log('Tables created successfully');
  })
  .catch((err) => {
    console.error('Error creating tables:', err);
  });

module.exports = { sequelize, User, Comment, Op: Sequelize.Op };
