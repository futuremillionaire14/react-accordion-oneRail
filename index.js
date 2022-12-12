import React, { Component } from 'react';
import { render } from 'react-dom';
import { Accordion, Toggle } from './Accordion';
import './style.css';

const App = () => (
  <Accordion>
    <Toggle title="Why do Java programmers have to wear glasses?">
     Because they don’t C#.
    </Toggle>
    <Toggle title="Why did the programmer quit his job?">
      Because he couldn't get arrays.
    </Toggle>
    <Toggle title="How many programmers does it take to change a light bulb?">
   None. It’s a hardware problem.
    </Toggle>
  </Accordion>
)

render(<App />, document.getElementById('root'));
