import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Site from "./components/Site";
import SiteRegistration from "./components/SiteRegistration";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  mixins: {
    toolbar: {
      minHeight: 45,
    },
  },
  palette: {
    primary: {
      main: "#ef6c00",
    },
    secondary: {
      main: "#ffab40",
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiRadio: {
      color: "primary",
    },
    MuiSwitch: {
      color: "primary",
    },
    MuiTextField: {
      variant: "outlined",
    },
  },
  typography: {
    // fontFamily: "Indie Flower",
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={customTheme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route label="ホーム" exact path="/" component={Home} />
            <Route label="紹介サイト一覧" path="/site" component={Site} />
            <Route
              label="紹介サイト登録"
              path="/site-registration"
              component={SiteRegistration}
            />
            <Route
              label="フィードバック"
              path="/send-feedback"
              component={Feedback}
            />
            <Route label="検索結果" path="/search" component={Search} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
