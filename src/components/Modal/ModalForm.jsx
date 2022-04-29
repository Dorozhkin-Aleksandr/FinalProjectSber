import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { updatePostQuery } from "../../redux/actions/postAC";
import { useDispatch, useSelector } from "react-redux";
import { pink } from "@mui/material/colors";

function ModalForm({ title, image, text, _id }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newText, setNewText] = useState(text);

  const dispatch = useDispatch();

  const person = useSelector((store) => store.person);

  const createSubmit = (event) => {
    event.preventDefault();

    const preparedPostQuery = {
      title: newTitle,
      image: newImage,
      text: newText,
    };

    const body = JSON.stringify(preparedPostQuery);

    dispatch(updatePostQuery(body, person.token, _id));

    setNewTitle(newTitle);
    setNewImage(newImage);
    setNewText(newText);
  };

  return (
    <Stack component="div" direction="column" alignItems="center">
      <Paper elevation={3} sx={{ width: 350 }}>
        <Stack
          component="form"
          alignItems="center"
          spacing={2}
          noValidate
          sx={{ py: 5, px: 2 }}
          autoComplete="off"
        >
          <Typography component={"div"}>
            <TextField
              multiline
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Typography>
          <Typography component={"div"}>
            <TextField
              multiline
              id="filled-basic"
              label="Text"
              variant="outlined"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </Typography>
          <Typography component={"div"}>
            <TextField
              multiline
              id="standard-basic"
              label="Image"
              variant="outlined"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </Typography>

          <Button
            onClick={createSubmit}
            variant="outlined"
            sx={{ color: pink[500] }}
          >
           
              Save Post
         
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default ModalForm;
