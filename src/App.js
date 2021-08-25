import React from 'react';
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import ButtomButtons from './ButtomButtons';

function App() {
  return (
    <div className="app">
   
    <Header />
    <TinderCards />
  <ButtomButtons/>
    </div>
  );
}

export default App;
