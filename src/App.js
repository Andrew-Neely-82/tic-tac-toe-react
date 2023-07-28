import { Layout, RulesModal } from "./components/export";
import "./App.scss";
import { useState, useEffect } from "react";

function App() {


  return (
    <div className="App">
      <RulesModal />
      <Layout />
    </div>
  );
}

export default App;
