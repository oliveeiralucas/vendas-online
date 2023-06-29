import './App.css';

import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyledLink isblue={count > 4}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className="text-5xl font-bold underline text-green-500">Helalo world!</div>
    </StyledLink>
  );
}

interface MyCustomButton {
  isblue?: boolean;
}

const StyledLink = styled.div<MyCustomButton>`
  color: ${(props) => (props.isblue ? 'blue' : 'pink')};
  font-weight: bold;
`;

export default App;
