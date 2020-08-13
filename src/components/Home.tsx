import React from "react";
import welcomePng from "../public/welcome.png";
import { Box, Button, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    imgStyle: {
      width: "80%",
      height: "auto",
    },
    button: {
      height: 60,
    },
  })
);

function Home() {
  const classes = useStyles();
  return (
    <div className="Home">
      <Box m={4}>
        <Typography variant="h2">Teach Each Other Funding Routes</Typography>
      </Box>
      <Typography variant="h5">
        クラウドファンディング等のサイトを教え合うサイトです。
        <br />
        ここから新しい趣味・新しいことを見つけたり、助け合いましょう!
      </Typography>
      <Box m={4}>
        <Button
          variant="contained"
          disableElevation
          className={classes.button}
          color="inherit"
          size="large"
          component={Link}
          to="/site-registration"
        >
          サイトを登録する
        </Button>
      </Box>
      <img src={welcomePng} className={classes.imgStyle} />
    </div>
  );
}

export default Home;
