import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <nav className="nav-bar">
        <div className="nav-header">
          <h1>Travelize</h1>
          <h3>
            <em>My traveling experiences</em>
          </h3>
        </div>
        <div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Blog</li>
            <li className="active-nav">About</li>
          </ul>
        </div>
      </nav>
      
      
    </div>
  );
}

export default App;
