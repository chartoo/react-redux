import logo from './logo.svg';
import './App.css';
import ShowData from "./components/showData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-body'>
        <ShowData/>
      </div>
    </div>
  );
}

export default App;
