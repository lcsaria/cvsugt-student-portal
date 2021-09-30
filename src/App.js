import './App.css';
import RouteTree from './components/routes/RouteTree'
import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/css/sidebar.css"
import "./assets/css/content.css"

function App() {
  return (
    <div className="App" id="scroller">
      <RouteTree/>
    </div>
  );
}

export default App;
