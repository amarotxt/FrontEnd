import React, { createContext ,Component } from 'react';
import { Router } from 'react-router-dom';
import Headers from './components/Headers';


require('dotenv').config();


function App (){
  
  return (<div>
    <Headers />
  </div>);    
}
// const App = () => <Routes />;

export default App;