import React from "react";
import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage";
import countries from "./assets/data/data.json";
import "./App.css";
import { ChristmasDialog } from "./components/Dialog/Dialog";

function App() {
  return (
    <div className="App">
      <Layout>
        <MainPage />
      </Layout>
      <ChristmasDialog />
    </div>
  );
}

export default App;
