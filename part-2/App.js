import React from 'react';
import Tweet from './Tweet'; // Adjust the import path based on your project structure

const App = () => {
  const tweetsData = [
    {
      name: "Matt Lane",
      username: "mmmaaatttttt",
      date: new Date().toDateString(),
      message: "This app will disrupt everything!!",
    },
    {
      name: "Elie Schoppik",
      username: "eschoppik",
      date: new Date().toDateString(),
      message: "#Ilovehashtags",
    },
    {
      name: "Tim Garcia",
      username: "TimGarcia0",
      date: new Date().toDateString(),
      message: "Follow me on Twitter!",
    },
  ];

  return (
    <div>
      {tweetsData.map((tweet, index) => (
        <Tweet
          key={index}
          name={tweet.name}
          username={tweet.username}
          date={tweet.date}
          message={tweet.message}
        />
      ))}
    </div>
  );
};

export default App;
