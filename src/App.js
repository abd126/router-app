import './App.css';
import Router from './Config/Router'
import Nav from './Components/Navbar'
function App() {
  return (
    <div className="App">
      <Nav className="Navbar"/>
      <Router />
    </div>
  );
}

export default App;
