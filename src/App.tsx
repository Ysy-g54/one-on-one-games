import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Site from "./components/Site";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
				<Switch>
					<Route label="ホーム" exact path="/" component={Home} />
          <Route label="紹介サイト一覧" path="/site" component={Site} />
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
