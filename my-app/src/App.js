import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greeting name="JavaScript" />
      <Greeting name="Golang" />
      <Greeting name="Swift">Language of iOS apps</Greeting>
      <hr />
      <Welcome name="Flutter">Language of cross-mobile development</Welcome>
      <Welcome name="React" />
      <Welcome name="React Native" />
    </div>
  );
}

export default App;
