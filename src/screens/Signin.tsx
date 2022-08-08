import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import "../styles/Signin.scss";
import Stack from "@mui/material/Stack";

const SIGNIN = gql`
    mutation signin($email: String!, $password: String!) {
        signin(email: $email, password: $password)
    }
`;

function SigninScreen(): JSX.Element {
    const { push, replace } = useHistory();
    const [email, setEmail] = useState('email1637854629639@gmail.com');
    const [password, setPassword] = useState('supersecret');
    const [failed, setFailed] = useState(false);
    const [doSignin, { data, loading, error }] = useMutation(SIGNIN);
    
    const onSubmit = async () => {
        setFailed(false);
        const result = await doSignin({
            variables: {
                email: email,
                password: password
            }
        });
        if (result.data.signin) {
            // success
            localStorage.setItem('token', result.data.signin);
            replace('/dashboard');
        } else {
            // failed
            setFailed(true);
        }
    };

    return (
        <>
          <div id="main_central_element">
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" }
                  }}
                  noValidate
                  autoComplete="off"
                />
    
                <Grid
                  container
                  direction="row"
                  spacing={10}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={3} style={{ marginRight: -50, marginTop: 25 }}>
                    <AlternateEmailIcon color="secondary" />
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      id="Email"
                      label="Email"
                      variant="standard"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ marginTop: 1 }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  spacing={10}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={3} style={{ marginRight: -50, marginTop: 25 }}>
                    <LockIcon color="secondary" />
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      id="Password"
                      label="Password"
                      variant="standard"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{ marginTop: 1 }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack spacing={3} direction="row" />
                  <Grid item xs={3} container direction="column" alignItems="center">
                    {error && <p>An error occured, please try again later</p>}
                    {error && <p className="error">{error}</p>}
                    <Button
                      onClick={onSubmit}
                      variant="contained"
                      sx={{ marginTop: 3, width: "25ch" }}
                    //   disabled={isLoading || !isFormCompleted}
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={() => {
                        push('/accueil');
                    }}
                      variant="contained"
                      sx={{ marginTop: 3, width: "25ch" }}
                    //   disabled={isLoading || !isFormCompleted}
                    >
                      Accueil
                    </Button>
                  </Grid>
    
                  <Grid item xs={2}>
                    <Link to="/inscription" style={{ color: "#027bce", textDecoration: "none" }}>
                      <p>No account yet ? Sign up here</p>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </>
      );
}

export default SigninScreen;