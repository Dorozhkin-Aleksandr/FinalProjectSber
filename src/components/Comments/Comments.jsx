import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import {
  // deleteCommentQuery,
  setPostCommentsQuery,
} from "../../redux/actions/commentAC";
// import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
// import Button from "@mui/material/Button";
// import { pink } from "@mui/material/colors";
import CardActions from "@mui/material/CardActions";

const Comments = () => {
  const person = useSelector((store) => store.person);
  const { _id } = useParams();
  const comments = useSelector((store) => store.comments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPostCommentsQuery(_id, person.token));
  }, [_id, dispatch, person.token]);

  // const deleteHandler = () => {
  //   dispatch(deleteCommentQuery(_id, , person.token));
  // };

  return (
    <>
      <CommentForm />

      {comments.map((comment, index) => (
        <CardActions key={index}>
          {comment.author.name}: {comment.text}{" "}
          {/* <Button
            size="medium"
            sx={{ color: pink[500], ml: 1 }}
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={deleteHandler}
          >
            {" "}
          </Button> */}
        </CardActions>
      ))}
    </>
  );
};
export default Comments;
