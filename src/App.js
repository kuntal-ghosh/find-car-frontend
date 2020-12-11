import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route,Switch } from 'react-router-dom';
import Layout from './Hoc/Layout'
import Button from 'react-bootstrap/Button';
import HomePage from './pages/Homepage/HomePage';
import SearchResult from './pages/SearchResult/SearchResult';
import AddCars from './pages/AddCars/AddCars';
import CarDetails from './pages/CarDetails/CarDetails';

function App() {
  return (
   
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/search_result/:name">
          <SearchResult></SearchResult>
        </Route>
        <Route exact path="/add-car">
          <AddCars />
        </Route>
        <Route exact path="/car-details/:id">
          <CarDetails />
        </Route>

      </Switch>
      
    </Layout>
  );
}

export default App;
