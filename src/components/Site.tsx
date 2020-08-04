import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 420,
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 20,
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
      description: "面白いアイデアが毎日続々と登場する国内最大級のクラウドファンディングサービスです。",
      siteUrl: "https://www.makuake.com/",
    },
  ];

  return (
    <div>
      {datas.map((data: SiteDetail) => (
        <Grid container justify="center">
          <Box m={4}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  サイト名: {data.siteNm}
                </Typography>
                <Typography className={classes.subTitle} gutterBottom>
                  サイトについて: {data.description}
                </Typography>
                <Typography variant="body1" component="p">
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
          </Box>
        </Grid>
      ))}
    </div>
  );
}
