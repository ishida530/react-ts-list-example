import React, { useState } from 'react';
import './App.css';

import List from './components/List';
import AddToList from "./components/AddToList"
export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
  }[]
}

function App() {


  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://probasket.pl/wp-content/uploads/2020/10/maxresdefault-27.jpg",
      age: 36,
      note: "alegric somesdsds"
    }
  ])


  return (
    <div className="App">
      <h1>People invited yo my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
