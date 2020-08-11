import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  CircularProgress,
  Snackbar,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
  })
);

export interface SnackbarMessage {
  message: string;
  key: number;
}

export interface State {
  open: boolean;
  snackPack: SnackbarMessage[];
  messageInfo?: SnackbarMessage;
  form: {
    mail: string;
    content: string;
  };
}

export default function SiteRegistration() {
  const [snackPack, setSnackPack] = React.useState<SnackbarMessage[]>([]);
  const [open, setOpen] = React.useState(false);
  const [form, setItem] = React.useState({ mail: "", content: "" });
  const [loading, setLoading] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState<
    SnackbarMessage | undefined
  >(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const registerSite = () => {
    let message: string = "";
    if (!Object.values(form).some((e) => e === "")) {
      setLoading(true);
      const params = new FormData();
      params.append("entry.1202268148", form.mail);
      params.append("entry.1449707604", form.content);
      // CORSエラー対策
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      // Googleフォームのaction属性値
      const GOOGLE_FORM_ACTION =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZVDhNAqy9jOYhYBU8HVhDBgykNk2ACsw46vcys4ARiEVIXw/formResponse";
      axios
        .post(CORS_PROXY + GOOGLE_FORM_ACTION, params)
        .then(() => {
          message = "フィードバックを送信しました!";
          setSnackPack((prev) => [
            ...prev,
            { message, key: new Date().getTime() },
          ]);
          setLoading(false);
        })
        .catch(() => {
          message =
            "送信に失敗しました。再度お試しいただくか、メールにてお問い合わせください。";
          setSnackPack((prev) => [
            ...prev,
            { message, key: new Date().getTime() },
          ]);
          setLoading(false);
        })
        .finally(() => {
          setItem({ mail: "", content: "" });
        });
    } else {
      message = "必須入力の部分を入力してください。";
      setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    }
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const handleClose = (
    event: React.SyntheticEvent | MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const updateItem = (e: any) => {
    setItem({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const classes = useStyles();
  return (
    <div>
      <Box mt={2}>
        <Typography variant="h5">
          ご協力ください。サイトへの質問、メッセージ、要望等をお待ちしております。
        </Typography>
        <br />
        <Typography variant="h6">*必須</Typography>
      </Box>
      <Box m={4}>
        <TextField
          label="あなたのメールアドレス*"
          name="mail"
          variant="outlined"
          fullWidth
          value={form.mail}
          onChange={updateItem}
        />
      </Box>
      <Box m={4}>
        <TextField
          label="質問やメッセージ*"
          name="content"
          multiline
          fullWidth
          rows={6}
          variant="outlined"
          value={form.content}
          onChange={updateItem}
        />
      </Box>
      <Box mt={4} mb={4}>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={registerSite}
          >
            送信する
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </Box>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
