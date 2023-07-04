import { useState } from "react";
import header from "./components/hComps/header"
import main from "./components/hComps/main"
import footer from "./components/hComps/footer"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
