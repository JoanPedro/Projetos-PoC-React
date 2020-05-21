import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './template/custom.css';

import Routes from './routes';
import Menu from './template/main';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
