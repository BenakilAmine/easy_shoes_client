// import Router from './Router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Accueil from "./screens/Acceuil";
import Layout from "./components/Layout";
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
            {" "}
            <Accueil />
          </Route>
        </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
