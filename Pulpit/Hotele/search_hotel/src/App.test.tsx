// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from "react";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;