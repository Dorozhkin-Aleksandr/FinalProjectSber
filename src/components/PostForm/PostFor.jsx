// import { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { queryNewPost } from "../../redux/actions/postsAC";
// import { Paper, Stack } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import LinkMUI from "@mui/material/Link";
// const PostForm = () => {
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");
//   const [image, setImage] = useState("");
//   const [tags, setTags] = useState("");

//   const dispatch = useDispatch();

//   const navigate = useNavigate();
//   const person = useSelector((store) => store.person);

//   const submitHandler = () => {
//     const preparedPostQuery = {
//       title,
//       text,
//       image,
//       tags: tags.split(",").map((el) => el.trim()),
//     };

//     const body = JSON.stringify(preparedPostQuery);

//     dispatch(queryNewPost(body, person.token));
//     setTitle("");
//     setText("");
//     setImage("");
//     setTags("");
//   };

//   const isTitleError = title.length < 3;
//   const isTextError = text.length < 3;
//   const isImageError =
//     !/https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i.test(image);
//   const isTagsError = tags.length < 3;
//   return (
//     <Stack component="div" direction="column" alignItems="center">
//       <Paper elevation={3} sx={{ width: 400 }}>
//         <Stack
//           component="form"
//           alignItems="center"
//           spacing={2}
//           noValidate
//           sx={{ py: 5, px: 2 }}
//           autoComplete="off"
//         >
//           <div>
//             <TextField
//               multiline
//               error={isTitleError}
//               id="outlined-basic"
//               label="Title"
//               variant="outlined"
//               value={title}
//               helperText={isTitleError && "Title must have min 3 symbols"}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div>
//             <TextField
//               multiline
//               error={isTextError}
//               id="filled-basic"
//               label="Text"
//               variant="outlined"
//               value={text}
//               helperText={isTextError && "Text must have min 3 symbols"}
//               onChange={(e) => setText(e.target.value)}
//             />
//           </div>
//           <div>
//             <TextField
//               multiline
//               error={isImageError}
//               id="standard-basic"
//               label="Image"
//               variant="outlined"
//               value={image}
//               helperText={isImageError && "insert image link"}
//               onChange={(e) => setImage(e.target.value)}
//             />
//           </div>
//           <div>
//             <TextField
//               multiline
//               error={isTagsError}
//               id="standard-basic"
//               label="Tags"
//               variant="outlined"
//               value={tags}
//               helperText={isTagsError && "Tag must have min 3 symbols"}
//               onChange={(e) => setTags(e.target.value)}
//             />
//           </div>
//           <Button onClick={() => navigate(-1)} variant="outlined">
//             Come back
//           </Button>

//           <Button onClick={submitHandler} variant="outlined">
//             <LinkMUI color="inherit" underline="none" component={Link} to={`/`}>
//               Create post
//             </LinkMUI>
//           </Button>
//         </Stack>
//       </Paper>
//     </Stack>
//   );
// };

// export default PostForm;
