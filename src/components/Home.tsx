import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import welcomePng from "../public/welcome.png";
import {
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
	createStyles({
		imgStyle: {
			width: "100%",
			height: "auto"
	}
	})
	);

function Home() {
	const classes = useStyles();
  return (
		<div className="Home">
			<Box mb={10}>
			<Typography variant="h2">
					Teach Each Other Funding Routes
      </Typography>
			</Box>
			<Typography variant="h5">
				クラウドファンディングを運営しているサイトを教え合って、新しい趣味・新しいことを見つけたり、助け合いましょう！
      </Typography>
			<img src={welcomePng} className={classes.imgStyle} />
	  </div>
  );
}

export default Home;
