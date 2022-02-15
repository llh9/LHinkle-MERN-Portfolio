const { AuthenticationError } = require('apollo-server-express');
const { User, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('comments');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('comments');
    },
    comments
    : async (parent, { username }) => {
      const params = username ? { username } : {};
      return Message.find(params).sort({ createdAt: -1 });
    },
    message: async (parent, { messageId }) => {
      return Message.findOne({ _id: messageId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('comments');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, { messageText }, context) => {
      if (context.user) {
        const message = await Message.create({
          messageText,
          messageAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { comments
            : message._id } }
        );

        return message;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { messageId, commentText }, context) => {
      if (context.user) {
        return Message.findOneAndUpdate(
          { _id: messageId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeThought: async (parent, { messageId }, context) => {
      if (context.user) {
        const message = await Message.findOneAndDelete({
          _id: messageId,
          messageAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { comments
            : message._id } }
        );

        return message;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { messageId, commentId }, context) => {
      if (context.user) {
        return Message.findOneAndUpdate(
          { _id: messageId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
