import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import { routing } from "./routing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {Object.keys(routing).map((key) => {
          const rout = routing[key];
          if (rout.role === "all") {
            return <Route key={rout} path={rout.path} element={rout.element} />;
          }
          return null;
        })}
      </Routes>
    </div>
  );
}

export default App;
