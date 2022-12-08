import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-600">
      <div className="btn">hello, world</div>
    </div>
  );
}

export default App;
