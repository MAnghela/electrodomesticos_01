import { useState } from "react";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  if (!isLogged) {
    return <Login setIsLogged={setIsLogged} />;
  }

  return <Sidebar setIsLogged={setIsLogged} />;
}

export default App;
