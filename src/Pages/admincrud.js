import React from "react";
import {
  Button,
  Form,
  NavDropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <h3>MENU</h3>
      <Nav.Link href="#dish">
              <Link to="/addform">Add Item</Link>
            </Nav.Link>
            <Nav.Link href="#dish">
              <Link to="/viewdish">Delete item</Link>
            </Nav.Link>
            <Nav.Link href="#dish">
              <Link to="/updatedish">Update item</Link>
            </Nav.Link>
            <Nav.Link href="#dish">
              <Link to="/viewdish">View Items</Link>
            </Nav.Link>
      <Divider />
      <Divider />
      <h3>Order Placed</h3>
     
            
            <Nav.Link href="#order">
              <Link to="/viewcust">View Customer</Link>
            </Nav.Link>
           
      <Divider />
      <Divider />
      
     
        
      <Divider />
      <List>
        {[ "Sign Out"].map((text, index) => (
          <ListItem button key={text} onClick={function clear(){
            localStorage.clear();
            history.push("/");
          }}>
            <ListItemIcon>
              {index % 2 === 0 ? <SettingsIcon /> : <ExitToAppSharpIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  let history=useHistory();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
           FOOD DESIRE
          </Typography>
          
        </Toolbar>
        <Typography >
           <p style={{color:"white"}}>THE FOOD YOU LOVE, DELIVERED!</p>
          </Typography>
      </AppBar>
      

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}

            
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       
      </main>
    </div>
  );
}

export default ResponsiveDrawer;