import React from 'react';
import './App.css';
import Application from './components/application/Application';
import Counter from './components/counter/Counter';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skill={["java","terraform","react","next"]} />
      <Counter />
    </div>
  );
}

export default App;
