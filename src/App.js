import logo from './logo.svg';
import './App.css';
import Firstcomp from './component/Firstcomp';
import Input from './component/Input';

import Counter from './component/counter/count';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Learning react
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     <Firstcomp>
      <Input placeholder="Enter First Name" />
      <Input placeholder="Enter Last Name" />
    </Firstcomp>
   
     

    </div>
  );
}

export default App;
