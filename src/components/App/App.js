import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Business from '../Business/Business';

function App() {
  return (
    <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div>
  );
}

export default App;
