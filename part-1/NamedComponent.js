import React from 'react';

/**
 * NamedComponent: Greets
 *
 * @param {object} props - React component props
 * @param {string} props.name - Name to introduce self with
 * @returns {React.Element} - React component
 */
const NamedComponent = ({ name }) => {
  return <p>My name is {name}.</p>;
};

export default NamedComponent;