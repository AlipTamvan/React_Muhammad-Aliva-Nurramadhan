import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ChatComponent from "./components/organisms/ChatComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChatComponent />
    </>
  );
}

export default App;
