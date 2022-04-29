import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import { searchReducer } from "./searchReducer";
import { personReducer } from "./personReducer";
import { postReducer } from "./postReducer";
import { commentReducer } from "./commentReducer";




const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
	person: personReducer,
	post: postReducer,
	comments: commentReducer,

    })


export default rootReducer