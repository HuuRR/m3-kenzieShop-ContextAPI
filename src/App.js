import Header from "./components/Header";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes />
      </header>
    </div>
  );
}

export default App;
