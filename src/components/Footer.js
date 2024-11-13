import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2, marginTop: 'auto' }}>
      <Typography variant="body1" color="white" align="center">
        © 2024 ODARA. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;

