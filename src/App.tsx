// import Router from './Router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Accueil from "./screens/Accueil";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import SigninScreen from "./screens/Signin";
import SignupScreen from "./screens/Signup";
import { useQuery } from "@apollo/client";
import "./styles/global.scss";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ef798a",
    },
    secondary: {
      main: "#613F75",
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Accueil />
            </Route>
            <Route exact path="/signin">
              <SigninScreen></SigninScreen>
            </Route>
            <Route exact path="/signup">
              <SignupScreen></SignupScreen>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
