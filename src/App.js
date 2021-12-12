import "./App.css";
import TextCounter from "./components/TextCounter";

function App() {
  return (
    <div className="App">
      <TextCounter limit={10} />
      <TextCounter limit={4} />
    </div>
  );
}

export default App;
