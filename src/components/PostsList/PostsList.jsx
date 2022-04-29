import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts } from "../../redux/actions/postsAC";
import PostsItem from "../PostsItem/PostsItem";
import Grid from "@mui/material/Grid";
import { useDebounce } from "../../hooks/useDebounce";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((store) => store.posts);
  const search = useSelector((store) => store.search);
  // eslint-disable-next-line no-unused-vars
  const person = useSelector((store) => store.person);

  const debouncedSearch = useDebounce(search, 500);
  useEffect(() => {
    dispatch(loadAllPosts(debouncedSearch, person.token));
  }, [debouncedSearch, dispatch, person.token]);

  if (!posts.length) return <div>Posts list is empty</div>;

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 5 }}>
      {posts
        .map((post) => {
          return <PostsItem key={post._id} {...post} />;
        })
        .reverse()}
    </Grid>
  );
};

export default PostsList;
