import React from 'react';

/**
 * Tweet: Represents a single tweet.
 *
 * @param {object} props - React component props
 * @param {string} props.date - Date of the tweet
 * @param {string} props.message - Tweet message
 * @param {string} props.name - Name of the tweet author
 * @param {string} props.username - Username of the tweet author
 * @returns {React.Element} - React component
 */
const Tweet = ({ date, message, name, username }) => {
  return (
    <div className="tweet">
      <span>{name}</span>
      <span className="username">{username}</span>
      <span className="date">{date}</span>
      <p>{message}</p>
    </div>
  );
};

export default Tweet;
