import React from "react";
import NavBar from "./NavBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Theme } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

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

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      {/* <Paper elevation={4} className={classes.paper}>
        <h1>Login</h1>

        <form className={classes.form} noValidate autoComplete="off">
          <TextField label="Username" variant="outlined" className={classes.input} />
          <TextField label="Password" variant="outlined" className={classes.input}/>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper> */}

      <BarChart />
      <PieChart />
    </div>
  );
}

export default App;
