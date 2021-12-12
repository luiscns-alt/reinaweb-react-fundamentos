import { useState } from "react";
import "./App.css";
import TextCounter from "./components/TextCounter";

function App() {
  const [limit, setLimit] = useState(10);
  return (
    <div className="App">
      <TextCounter
        limit={limit}
        onLimit={() => console.log("Limit exceeded")}
      />
    </div>
  );
}

export default App;
