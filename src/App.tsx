import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import { PageFooter } from './components/PageFooter';
import { PageSider } from './components/PageSider';
import { Home } from './pages/Home';
import { Officers } from './pages/Officers';
import { Social } from './pages/Social';

function App() {
  return (
    <div className="App">
      <Layout>
        <PageSider />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/officers" element={<Officers />} />
            <Route path="/social" element={<Social />} />
            <Route
              path="*"
              element={
                <>
                  <p>There is nothing here!</p>
                  <Link to="/">Home</Link>
                </>
              }
            />
          </Routes>
          <PageFooter />
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
