import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCommentQuery } from "../../redux/actions/commentAC";
import CardActions from "@mui/material/CardActions";
const CommentForm = () => {
  const person = useSelector((store) => store.person);

  const { _id } = useParams();
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const createSubmit = () => {
    const preparedPostQuery = {
      text: text,
    };

    const body = JSON.stringify(preparedPostQuery);

    dispatch(addCommentQuery(_id, person.token, body));
    setText("");
  };

  return (
    <CardActions>
      <TextField
        multiline
        placeholder="Text comment..."
        id="outlined-basic"
        label="Comment"
        variant="outlined"
        // sx={{ ml: 7 }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={createSubmit}
        variant="outlined"
        sx={{ color: pink[500], ml: 2 }}
        size="small"
      >
        Send comment
      </Button>
    </CardActions>
  );
};
export default CommentForm;
