import React from 'react';
// import './App.css';
import Greetings from './components/Greetings';
import Greetings2 from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import CounterReducer from './CounterReducer';
import ReducerSample from './components/ReducerSample';

function App() {

  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  }

  const onSubmit = (form: {name: string, description: string}) => {
    console.log(form);
  }

  return (
    <div className="App">
      <Greetings2 name="dd" onClick={onClick} />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
      <hr />
      <CounterReducer />
      <hr />
      <ReducerSample />
    </div>
  );
}

export default App;
