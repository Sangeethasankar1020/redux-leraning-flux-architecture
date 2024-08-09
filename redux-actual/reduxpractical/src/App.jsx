import "./App.css";
import { useState } from "react";
import Counter from "./features/counter/Counter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Counter />
    </main>
  );
}

export default App;
