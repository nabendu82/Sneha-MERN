import './App.css';
import { Greet, ReactGreet } from './components/Greet';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Greet />
      <ReactGreet />
      <Greeting />
    </div>
  );
}

export default App;
