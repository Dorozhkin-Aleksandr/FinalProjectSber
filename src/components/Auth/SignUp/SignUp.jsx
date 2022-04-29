import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { useDispatch } from "react-redux";
// import { signInQuery } from "../../../redux/actions/personAC";
import { useLocation, useNavigate } from "react-router-dom";
import { signUpQuery } from "../../../redux/actions/newpersonAC";

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      signUpQuery({
        email: data.get("email"),
        password: data.get("password"),
        successCb: () => {
          navigate(from, { replace: true });
        },
        errorCb: (message) => {
          if (message === "Request failed with status code 400") {
            window.alert("Некорректно заполнено одно из полей!");
            //захардкодил ошибку с 400 статусом
          } else if (message === "Request failed with status code 409") {
            window.alert("Пользователь с указанным email уже существует");
            //захардкодил ошибку с 409 статусом
          } else {
            window.alert(message);
            // если ни одна из двух
          }
          //отправил сообщение об ошибке, в нашем случае в сообщение будет или 400 или 409
        },
      })
    );
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100%",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        my: "auto",
        mt: 10,
      }}
    >
      <Paper variant="outlined">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Account
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, px: 4 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create New Account
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

// добавить в типы signUp logout
// logout редюсер можно сделать аналогично signUp и обнулить объект персон с токеном
// создать новый AC на подобии SignIn а зачем????мы дальше регистрацию не используем нигде
