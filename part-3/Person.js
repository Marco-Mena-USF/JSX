import React from 'react';

const MAX_NAME_LENGTH_TO_SHOW = 6;

/**
 * Info on a single person.
 *
 * @param {object} props - React component props
 * @param {string} props.name - Name of the person
 * @param {number} props.age - Age of the person
 * @param {string[]} props.hobbies - Hobbies of the person
 * @returns {React.Element} - React component
 */
function Person({ age, hobbies, name }) {
  const voteText = age >= 18
    ? "Go vote!"
    : "Go study!";

  const truncatedName = name.slice(0, MAX_NAME_LENGTH_TO_SHOW);

  const hobbiesLIs = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {truncatedName}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbiesLIs}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}

export default Person;
