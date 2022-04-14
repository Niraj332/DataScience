import React from "react";
import { ROLL_NUMBER } from "./utils/constants";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage } from "./views";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
      height: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#6D7183",
      //   outline: '1px solid slategrey',
      borderRadius: 20,
    },
  },
  mainBackground: {
    top: "0vh",
    left: "0vh",
    width: "100vw",
    // width: pxToVh('1603.620px'),
    // width: pxto
    height: "100vh",
    // height: pxToVh('759.991px'),
    background:
      "transparent radial-gradient(closest-side at 100vh 50vh, #58687E 0vh, #39495E 100vh)",
  },
}));

const App = () => {
  const classes = useStyles();
  console.log(window.innerWidth, window.innerHeight);
  return (
    <div className={classes.mainBackground}>
      <Router basename={`/${ROLL_NUMBER}`}>
        <Route exact path="/" component={LandingPage} />
      </Router>
    </div>
  );
};

export default App;
