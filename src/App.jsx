import React from 'react';
import Header from "./components/header";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import { routing } from "./routing";

function App() {
    const location = useLocation();

    const HeaderRoutes = [

        "/chat",

    ];

    const showHeader = HeaderRoutes.includes(location.pathname);

  return (
    <div className="App">
        {!showHeader &&       <Header />}

      <Routes>
        {Object.keys(routing).map((key) => {
          const rout = routing[key];
          if (rout.role === "all") {
            return <Route key={rout} path={rout.path} element={rout.element} />;
          }
          return null;
        })}
          <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </div>
  );
}

export default App;
