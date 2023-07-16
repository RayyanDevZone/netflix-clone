import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
