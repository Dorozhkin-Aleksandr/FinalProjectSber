import './App.css';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import PostForm from './components/PostForm/PostForm';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RequireAuth } from "./components/Auth/RequireAuth/RequireAuth";
import SignIn from "./components/Auth/SignIn/SignIn";
import PostsDetail from './components/PostsDetail/PostsDetail';
import PageNotFound from './components/404/404';
import SignUp from './components/Auth/SignUp/SignUp';
import LogOut from './components/Auth/LogOut/LogOut';
import EditProfile from './components/Auth/EditProfile/EditProfile';

const themeLight = createTheme({
  palette: {
    background: {
      default: "whitesmoke"
    }
  }
});


function App() {
 


  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar  />
        <Container maxWidth="md" className="container">
          <Routes>
            <Route path="/" element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            } />
            <Route path="/postform" element={
              <RequireAuth>
                <PostForm />
              </RequireAuth>
            } />
             <Route path ="/:_id" element={
              <RequireAuth>
               <PostsDetail />
              </RequireAuth>
            } />
              <Route path="/editprofile" element={
              <RequireAuth>
                <EditProfile />
              </RequireAuth>
            } />            
            <Route path="/signin" element={<SignIn />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/logout" element={
              <RequireAuth>
                <LogOut />
              </RequireAuth>
            } />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
