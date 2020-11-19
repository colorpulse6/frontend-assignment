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
      <div>
        <img src={heroBackground} className="hero"></img>
      </div>

      <div className="page-content">
        <div>
          <img src={headshot} className="profile-image"></img>
        </div>
        <div className="page-text">
          <h1>A little about me</h1>
          <p>
            Erat ad volutpat dictumst imperdiet vehicula nostra gravida laoreet
            taciti ridiculus nunc. Fames vivamus, in montes. Vel non ullamcorper
            turpis ultrices sagittis. Ut sociosqu porttitor a sit adipiscing
            scelerisque nisl dignissim erat; turpis praesent? 
            <br></br>
            <br></br>
            Consectetur at vestibulum sagittis gravida venenatis accumsan hac.
            Ullamcorper conubia pulvinar accumsan facilisi! Sem sit dictumst
            lobortis at accumsan quis lacus congue auctor at. Condimentum nostra
            lobortis convallis hendrerit eget vitae faucibus. Pellentesque
            pretium inceptos mauris. 
            <br></br>
            <br></br>
            Integer magna ornare euismod penatibus dignissim in parturient.
            Magna elementum aliquam molestie eu litora himenaeos etiam massa
            nostra condimentum. Rhoncus donec nam class sodales at dictum
            primis? 
            <br></br>
            <br></br>
            Vitae tincidunt magnis torquent etiam consequat vitae, hac fusce.
            Eros nullam nascetur praesent platea lacus sem. Ut blandit torquent
            cras lacus interdum feugiat primis malesuada dis feugiat senectus
            iaculis. 
            <br></br>
            <br></br>
            Feugiat pulvinar parturient facilisi magnis felis consequat integer
            metus pretium dignissim ullamcorper vel. Magnis porttitor vel nostra
            nam cursus cras malesuada pretium euismod mollis cras sociis! 
            <br></br>
            <br></br>
            Rhoncus libero per dapibus torquent fames cum curae; turpis. Leo
            odio class adipiscing! Ridiculus nascetur dictumst lorem leo
            ultrices; fames fusce lorem venenatis ultrices senectus nibh.
            Fermentum ligula volutpat mauris ridiculus sed. Enim quis pharetra
            cras leo conubia maecenas ad imperdiet fames convallis non. 
          </p>
        </div>
      </div>
      <footer className="page-footer">
      <p>&copy; 2020 Travelize</p>
      <p>Privacy Poilic Terms and conditions</p>
      </footer>
    </div>
  );
}

export default App;
