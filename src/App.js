import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SinglePage from "./pages/SinglePage";
import { Search } from "./components/Search";

const App = () => {
  return (
    <main className="App dark:bg-darkbg">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/singleshow/:id" element={<SinglePage />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </main>
  );
};

export default App;
