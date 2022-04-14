import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App">DICTIONARY by</div>
        <img src={logo} className="logo img-fluid" alt="logo" />
        <div className="Dictionary">
          <Dictionary />
        </div>
      </div>
    </div>
  );
}
