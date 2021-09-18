import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About'
import Howto from './components/Howto'
import Profile from './components/Profile'

function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={ About } />
      <Route path="/howto" component={ Howto } />
      <Route path="/profile" component={ Profile } />
      <Route exact path="/" component={ Home } />
    </BrowserRouter>
  );
}

export default App;
