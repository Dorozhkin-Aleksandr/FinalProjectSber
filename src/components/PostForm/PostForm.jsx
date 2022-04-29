import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryNewPost } from "../../redux/actions/postsAC";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LinkMUI from "@mui/material/Link";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <LinkMUI color="inherit" href="https://mui.com/">
        Your Website
      </LinkMUI>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const person = useSelector((store) => store.person);

  const submitHandler = () => {
    const preparedPostQuery = {
      title,
      text,
      image,
      tags: tags.split(",").map((el) => el.trim()),
    };

    const body = JSON.stringify(preparedPostQuery);

    dispatch(queryNewPost(body, person.token));
    setTitle("");
    setText("");
    setImage("");
    setTags("");
  };

  const isTitleError = title.length < 3;
  const isTextError = text.length < 3;
  const isImageError =
    !/https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i.test(image);
  const isTagsError = tags.length < 3;

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh", mt: 5 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                sx={{ ml: 5, mt: 3, mb: 1 }}
                multiline
                error={isTitleError}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={title}
                helperText={isTitleError && "Title must have min 3 symbols"}
                onChange={(e) => setTitle(e.target.value)}
              />

              <TextField
                sx={{ ml: 5, mb: 1 }}
                multiline
                error={isTextError}
                id="filled-basic"
                label="Text"
                variant="outlined"
                value={text}
                helperText={isTextError && "Text must have min 3 symbols"}
                onChange={(e) => setText(e.target.value)}
              />

              <TextField
                sx={{ ml: 5, mb: 1 }}
                multiline
                error={isImageError}
                id="standard-basic"
                label="Image"
                variant="outlined"
                value={image}
                helperText={isImageError && "insert image link"}
                onChange={(e) => setImage(e.target.value)}
              />

              <TextField
                sx={{ ml: 5, mb: 1 }}
                multiline
                error={isTagsError}
                id="standard-basic"
                label="Tags"
                variant="outlined"
                value={tags}
                helperText={isTagsError && "Tag must have min 3 symbols"}
                onChange={(e) => setTags(e.target.value)}
              />

              <Button
                onClick={() => navigate(-1)}
                variant="outlined"
                sx={{ ml: 1, mb: 3 }}
                color="success"
              >
                Come back
              </Button>

              <Button
                onClick={submitHandler}
                variant="outlined"
                sx={{ ml: 3, mb: 3 }}
                color="success"
              >
                <LinkMUI
                  color="inherit"
                  underline="none"
                  component={Link}
                  to={`/`}
                >
                  Create post
                </LinkMUI>
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default PostForm;
