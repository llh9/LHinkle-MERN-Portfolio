import React from 'react';
import { useQuery } from '@apollo/client';

import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';

import { QUERY_MESSAGES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MESSAGES);
  const comments = data?.comments || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <MessageForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MessageList
              comments={comments}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;