import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  subTitle: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            サイト名: CAMPFIRE
          </Typography>
          <Typography className={classes.subTitle} gutterBottom>
            サイトについて: クラウドファンディング
          </Typography>
          <Typography variant="body2" component="p">
            サイトURL: https://camp-fire.jp/
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="https://camp-fire.jp/"
            target="_blank"
            rel="noopener"
          >
            サイトへジャンプする
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            サイト名: Makuake（マクアケ）
          </Typography>
          <Typography className={classes.subTitle} gutterBottom>
            サイトについて: クラウドファンディング
          </Typography>
          <Typography variant="body2" component="p">
            サイトURL: https://www.makuake.com/
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="https://www.makuake.com/"
            target="_blank"
            rel="noopener"
          >
            サイトへジャンプする
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
