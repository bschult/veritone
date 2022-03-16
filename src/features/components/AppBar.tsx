import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//TODO: redo padding and font sizes, background color looks off too
export default function ButtonAppBar() {
  return (
    <Box sx={{ width: '100vw', top: '0px'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHOPPING LIST
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}