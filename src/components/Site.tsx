import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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

export interface SiteDetail {
  siteNm: string;
  description: string;
  siteUrl: string;
}

export default function SimpleCard() {
  const classes = useStyles();
  const datas: SiteDetail[] = [
    {
      siteNm: "CAMPFIRE",
      description: "クラウドファンディング",
      siteUrl: "https://camp-fire.jp/",
    },
    {
      siteNm: "Makuake（マクアケ）",
      description: "クラウドファンディング",
      siteUrl: "https://www.makuake.com/",
    },
  ];

  return (
    <div>
      {datas.map((data: SiteDetail) => (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              サイト名: {data.siteNm}
            </Typography>
            <Typography className={classes.subTitle} gutterBottom>
              サイトについて: {data.description}
            </Typography>
            <Typography variant="body2" component="p">
              サイトURL: {data.siteUrl}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href={data.siteUrl}
              target="_blank"
              rel="noopener"
            >
              サイトへジャンプする
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
