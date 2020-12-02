import React from 'react';
import { AppBar, Box, Badge, Button, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomLink from './CustomLink';

const useStyles = makeStyles(theme => ({
  navTitle: { flexGrow: 1 },
  root: {
    marginBottom: theme.spacing(4)
  },
  active: {
    backgroundColor: theme.palette.primary.dark
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const numCartItems = useSelector(state => (
    Object
      .values(state.cart)
      .reduce((total, item) => total + item.qty, 0)
  ));


  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Box className={classes.navTitle}>
          <CustomLink variant="h6" color="inherit" to="/">
            Shoply
          </CustomLink>
        </Box>
        <Badge badgeContent={numCartItems} color="secondary">
          <Button color="inherit" component={NavLink} to="/cart" activeClassName={classes.active}>
            Cart
          </Button>
        </Badge>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;