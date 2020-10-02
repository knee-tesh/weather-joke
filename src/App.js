import React, {useState} from 'react';
import './App.css';
import Joke from './components/joke';
import Weather from './components/weather';

// export default App;
function App() {

  const [state, setState] = useState('joke');

  const handleEvent = (item) => {
    setState(item);
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar"> 
          <ul className="nav-list">
            <li className="nav-item" onClick={e => handleEvent('joke')}>
              Joke
            </li>
            <li className="nav-item" onClick={e => handleEvent('weather')}>
              Weather
            </li>
          </ul>
        </nav> 
      </header>
      <section className="App-Section">
        <div className="container">                
            {
              state === 'joke' ?
              <Joke /> :
              <Weather />

            }
        </div>
      </section>
    </div>
  );

}

export default App; 