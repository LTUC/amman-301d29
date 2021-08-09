import React from 'react';
import Parent from './components/Parent';

class App extends React.Component {
  render() {
    return (
      <>
        <h2>States and Props</h2>
        <p>welcome to main page</p>
        <Parent/>
      </>
    )
  }
}

export default App;