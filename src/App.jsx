import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";

function App() {
  const [category, setCategory] = useState("business");
  const [searchInput, setSearchInput] = useState("");

  const onSearchInput = (search) => {
    setSearchInput(search);
  };

  return (
    <>
      <Navbar setCategory={setCategory} onSearchInput={onSearchInput} />
      <NewsCard category={category} searchInput={searchInput} />
    </>
  );
}

export default App;
