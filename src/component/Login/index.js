import React, { useEffect, useState } from "react";
import { Button, TextField, Theme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    paper: {
      height: 400,
      width: 500,
      borderRadius: "20px",
      backgroundColor: "#fff",
      textAlign: "center",
      margin: "60px auto",
      padding: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      marginBottom: "30px",
    },
  })
);

function Login() {
  const classes = useStyles();

  let [userName, setUsername] = useState("");
  let [passWord, setPassword] = useState("");
  let [login, setLogin] = useState([]);

  useEffect(() => {
    async function getAPI() {
      const api = await fetch("https://demo4757926.mockable.io/login")
        .then((response) => response.json())
        .then((json) => {
          // console.log("In Come Data From Api",json)
          setLogin(json);
        });
    }
    getAPI();
  }, []);

  const onHandle = (event) => {
    event.preventDefault();

    const varify = login.filter(
      (res) => res.username === userName && res.password === passWord
    );
    if (varify.length > 0) {
      console.log("Login Success Atiya");
    }
  };

  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.form} onSubmit={onHandle}>
          <TextField
            label="Username"
            variant="outlined"
            className={classes.input}
            value={userName}
            onChange={(ev) => setUsername(ev.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            className={classes.input}
            value={passWord}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Login;
