import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Components/Header';
import Tinybanner from './Components/Tinybanner';

function App() {
  
  return (
    <div>
      
       <Routes>
        {/* <Route path="/" component={<Tinybanner></Tinybanner>} /> */}
        <Route path="/" element={<Header />} /> 
       <Route path="home" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
