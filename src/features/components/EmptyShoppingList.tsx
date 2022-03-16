import * as React from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function EmptyShoppingList() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Paper variant='outlined' elevation={0} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem 0'}}>
          <Typography component="div" sx={{ flexGrow: 1, color:'grey', padding: '1rem', fontSize: '1.5rem' }}>Your shopping list is empty ;(</Typography>
          <Button variant="contained" disableElevation sx={{ flexGrow: 1,}}>Add your first item</Button>
        </Paper>
      </Container>
    </React.Fragment>
  );
}