import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_Message = gql`
  mutation addMessage($messageText: String!) {
    addMessage(messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
      comments {
        _id
        messageText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($messageId: ID!, $messageText: String!) {
    addComment(messageId: $messageId, messageText: $messageText) {
      _id
      messageText
      messageAuthor
      createdAt
      comments {
        _id
        messageText
        createdAt
      }
    }
  }
`;
