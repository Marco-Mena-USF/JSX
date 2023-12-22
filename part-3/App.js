import React from 'react';
import Person from './Person'; // Adjust the import path based on your project structure

const peopleData = [
  { name: "Homer", age: 38, hobbies: ["bowling", "watching tv", "drinking beer"] },
  { name: "Marge", age: 34, hobbies: ["painting", "gambling"] },
  { name: "Bart", age: 10, hobbies: ["skateboarding", "making prank calls"] },
  { name: "Lisa", age: 8, hobbies: ["reading", "saxophone", "eating vegetables"] },
];

const App = () => {
  return (
    <div>
      {peopleData.map((person, index) => (
        <Person
          key={index}
          name={person.name}
          age={person.age}
          hobbies={person.hobbies}
        />
      ))}
    </div>
  );
};

export default App;