import './App.css';
import AdvForm from './components/AdvForm';
// import GrandParent from './components/GrandParent';
// import { ChannelProvider } from './components/channelContext';
// import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Nabendu">
        <ChannelProvider value="TWD">
          <GrandParent />
        </ChannelProvider>
      </UserProvider> */}
      <AdvForm />
    </div>
  );
}

export default App;
