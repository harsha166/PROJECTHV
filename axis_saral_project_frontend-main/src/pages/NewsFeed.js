/*export default function NewsFeed() {
    return <h1>news</h1>
}*/



import React, { useState, useEffect } from 'react';
import { getHeadline } from './api';

function NewsFeed() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [headline, setHeadline] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  useEffect(() => {
    const fetchHeadline = async () => {
      const fetchedHeadline = await getHeadline();
      setHeadline(fetchedHeadline);
    };
    fetchHeadline();
  }, []);

  return (
    <div className="card" style={{ width: "50%", margin: "10px auto 0 auto" }}>
      <h3>{headline}</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}











export default NewsFeed;
