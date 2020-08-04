import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Site from "./components/Site";
import SiteRegistration from "./components/SiteRegistration";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
				<Switch>
					<Route label="ホーム" exact path="/" component={Home} />
          <Route label="紹介サイト一覧" path="/site" component={Site} />
          <Route label="紹介サイト登録" path="/site-registration" component={SiteRegistration} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
