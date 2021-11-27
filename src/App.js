import React from "react";
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage'
import countries from './assets/data/data.json';
import { HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <HashRouter>
          <MainPage data={countries}/>
        </HashRouter>
      </Layout>
    </div>
  );
}

export default App;
