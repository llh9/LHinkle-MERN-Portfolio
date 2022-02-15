const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Message]!
  }

  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    comments(username: String): [Message]
    message(messageId: ID!): Message
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String, password: String!): Auth
    login(username: String!, password: String!): Auth
    addMessage(messageText: String!): Message
    addComment(messageId: ID!, messageText: String!): Message
    removeMessage(messageId: ID!): Message
    removeComment(messageId: ID!, commentId: ID!): Message
  }
`;

module.exports = typeDefs;
