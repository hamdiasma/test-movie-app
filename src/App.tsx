import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderPage from "./RenderPage";
import NotFoundPage from "./components/globals/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RenderPage />} />
          <Route path=":page" element={<RenderPage />} />
          <Route path=":page/:slug" element={<RenderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
