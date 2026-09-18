import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  const path = window.location.pathname;

  if (path === "/movies") {
    return <Movies />;
  }

  return <Home />;
}

export default App;