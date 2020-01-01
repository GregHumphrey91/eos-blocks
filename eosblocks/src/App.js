// Packages
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "semantic-ui-react";

// Components
import Home from "./components/Routes/Home";
import About from "./components/Routes/About";
import Header from "./components/Layout/Header";

// CSS
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Container>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/About" component={About} />
          <ToastContainer />
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
