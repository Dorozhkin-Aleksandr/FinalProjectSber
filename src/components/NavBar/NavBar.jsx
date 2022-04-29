import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import LinkMUI from "@mui/material/Link";
import SearchAppBar from "../SearchAppBar/SearchAppBar";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@mui/styles";
import Tooltip from "@mui/material/Tooltip";

const commonPages = [
  {
    title: "Main",
    path: "/",
  },
];

const authPages = [
  {
    title: "Create New Post",
    path: "/postform",
  },
  {
    title: "Log Out",
    path: "/logout",
  },
  {
    title: "Edit Profile",
    path: "/editprofile",
  },
];
const notAuthPages = [
  {
    title: "SignIn",
    path: "/signin",
  },
  {
    title: "Create New Account",
    path: "/signUp",
  },
];

const useStyles = makeStyles({
  root: {
    position: "fixed",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const NavBar = () => {
  let token = useSelector((store) => store.person.token);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState();
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  let avatar = useSelector((state) => state.person.avatar);
  const pages = [...commonPages, ...(token ? authPages : notAuthPages)];
  // const pages = commonPages.concat(token ? authPages : notAuthPages);
  return (
    <AppBar className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            key={uuidv4()}
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Project4you
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <LinkMUI
                  component={Link}
                  to={page.path}
                  key={uuidv4()}
                  underline="none"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </LinkMUI>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Project4you
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <LinkMUI
                component={Link}
                to={page.path}
                key={uuidv4()}
                underline="none"
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </LinkMUI>
            ))}
          </Box>
          {token ? <SearchAppBar /> : ""}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar_logo" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {notAuthPages.map((setting) => (
                <LinkMUI
                  color="inherit"
                  underline="none"
                  key={setting.title}
                  component={Link}
                  to={setting.path}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                </LinkMUI>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
