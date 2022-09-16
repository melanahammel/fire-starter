import './App.css';
import Lottie from "lottie-react";
import firewoodAnimation from "./assets/firewood.json";
import githubLogo from "./assets/github-logo.png";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="body-column">
          <div className="animation">
            <Lottie animationData={firewoodAnimation}/>
          </div>
        </div>
        <div className="body-column">
          <div className="content">
            <div className="title">Fire Starter</div>
            <div className="body">Take a website running locally and deploy it
              to a production cloud environment
            </div>
            <div className="github-link">
              <a
                className="github-logo"
                href="https://github.com/melanahammel/fire-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Github Logo" src={githubLogo} width="100%"/>
              </a>
              <a
                className="App-link"
                href="https://github.com/melanahammel/fire-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started on Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
