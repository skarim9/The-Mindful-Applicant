import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

it("navbar renders without crashing", ()=>{
  const div = document.createElement("div");
  ReactDOM.render(<App/>,div);
});
