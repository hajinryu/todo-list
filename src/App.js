import React from "react";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import Button from './components/Button';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList>
          <Button>hi</Button>
        </TodoList>
        <TodoCreate />
      </TodoTemplate>

    </div>
  );
}

export default App;

