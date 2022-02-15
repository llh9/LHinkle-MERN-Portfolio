import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      comments {
        _id
        messageText
        createdAt
      }
    }
  }
`;

export const QUERY_MESSAGES = gql`
  query getMessages {
    comments {
      _id
      messageText
      messageAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_MESSAGE = gql`
  query getSingleMessage($messageId: ID!) {
    message(messageId: $messageId) {
      _id
      massageText
      massageAuthor
      createdAt
      comments {
        _id
        massageText
        massageAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      comments {
        _id
        messageText
        messageAuthor
        createdAt
      }
    }
  }
`;
