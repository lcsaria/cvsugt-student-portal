import './App.css';
import RouteTree from '../src/components/routes/RouteTree'
import "../src/assets/bootstrap/css/bootstrap.min.css"
import "../src/assets/fonts/fontawesome-all.min.css"
import "../src/assets/fonts/font-awesome.min.css"
import "../src/assets/fonts/fontawesome5-overrides.min.css"

import "../src/assets/css/sidebar.css"
import "../src/assets/css/content.css"

function App() {
  return (
    <div className="App" id="scroller">
      <RouteTree/>
    </div>
  );
}

export default App;
