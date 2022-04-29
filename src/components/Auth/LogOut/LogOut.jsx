import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../../redux/types/personType";
import { pink } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";

export default function LogOut() {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch({ type: LOG_OUT, payload: "" });
  };

  return (
    <>
      <div>
        <Button
          onClick={logOutHandler}
          sx={{ mx: 37, mt: 10, color: pink[500] }}
        >
          Выйти из учетной записи
        </Button>
      </div>

      <CardMedia
        component="img"
        height="600"
        image="https://images.pexels.com/photos/2929910/pexels-photo-2929910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
    </>
  );
}
