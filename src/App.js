import React from "react";
/**
 * UI Elements 
 */
import "./App.css";
import Header from "./Components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
/**
 * Components Import
 */
import Product from "./Components/Product";
import ProductsDisplay from "./Components/ProductsDisplay";
/**
 * react-router-dom to route the page
 */
import { BrowserRouter as Router, Route } from "react-router-dom";
/**
 * App function 
 */
function App() {
  return (
    <div className="App">
      <Header />
      <CssBaseline />
      <Router>
        <Route path="/" exact component={ProductsDisplay} />
        <Route path="/product/" component={Product} />
      </Router>
    </div>
  );
}

export default App;
