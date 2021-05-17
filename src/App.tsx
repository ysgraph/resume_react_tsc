import React from 'react';
import './reset.css';
import './App.css';
import  { Helmet } from 'react-helmet';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
        <title>ysgraph.github.io</title>
        <meta property="og:title" content="ysgraph.github.io"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://ysgraph.github.io"/>
        <meta property="og:image" content=""/>
        <meta property="og:site_name" content="ysgraph.github.io"/>
        <meta property="og:description" content="Resume by ysgraph"/>
      </Helmet>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
