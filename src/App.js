import React from "react";
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage'
import countries from './assets/data/data.json';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <MainPage data={countries}/>
      </Layout>
    </div>
  );
}

export default App;
