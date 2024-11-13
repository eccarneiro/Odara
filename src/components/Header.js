import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          ODARA
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/profile">Perfil</Button>
        <Button color="inherit" component={Link} to="/checkout">Assinatura</Button>
        <Button color="inherit" component={Link} to="/carteira">Carteira</Button>
        <Button color="inherit" component={Link} to="/admin">Admin</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
        <Button color="inherit" component={Link} to="/register">Registrar</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
