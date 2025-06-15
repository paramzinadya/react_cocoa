import React from 'react';
import './styles.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Menu />
      <Navigation />
      <Header />
      <div className="container">
        <PostList />
        <Pagination />
      </div>
      <Footer />
    </div>
  );
}


export default App;