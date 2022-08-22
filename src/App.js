import './App.css';
import Header from './Components/Header';
import Tinybanner from './Components/Tinybanner';
import Logo from './Components/Logo';
import Banner from './Components/Banner';

function App() {
  return (
    <div>
      <Tinybanner></Tinybanner>
      <Logo></Logo>
      <Header>
         <Banner></Banner>
      </Header>
      
    </div>
  );
}

export default App;
