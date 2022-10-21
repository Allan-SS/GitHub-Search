import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalState from "./global/GlobalState";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
};

export default App;
