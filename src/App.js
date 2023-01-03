import logo from "./logo.svg";
import "./App.css";
import SeoHelmet from "./views/components/seo";

function App() {
  return (
    <div className="App">
      <SeoHelmet title={"App"} metaContent="App" linkHelmet="/app" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
