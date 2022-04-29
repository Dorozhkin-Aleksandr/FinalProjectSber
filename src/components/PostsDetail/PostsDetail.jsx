import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../Comments/Comments";
import BasicModal from "../Modal/Modal";
import ModalForm from "../Modal/ModalForm";
import { getPostQuery } from "../../redux/actions/postAC";
import { pink } from "@mui/material/colors";
import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostsDetail = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { _id } = useParams();
  const navigate = useNavigate();
  const controller = useRef(new AbortController());
  const controllerForApi = controller.current.signal;
  const person = useSelector((store) => store.person);
  const post = useSelector((store) => store.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostQuery(person.token, _id));
  }, [_id, dispatch, person.token, controllerForApi]);

  const content = () => {
    if (!post._id) {
      return <Typography>Loading...</Typography>;
    }

    return (
      <Card sx={{ maxWidth: 345, mt: 10, ml: 30 }}>
        <CardMedia
          component="img"
          height="140"
          image={post.image}
          alt="picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.tags}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            onClick={() => navigate(-1)}
            sx={{ color: pink[500] }}
          >
            COME BACK
          </Button>

          <BasicModal>
            <ModalForm {...post} />
          </BasicModal>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Comments />
          </CardContent>
        </Collapse>
      </Card>
    );
  };

  return <div>{content()}</div>;
};
export default PostsDetail;
