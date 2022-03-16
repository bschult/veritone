import React from 'react';
import './App.css';
import AppBar from './features/components/AppBar';
import EmptyShoppingList from './features/components/EmptyShoppingList'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Dosis, Nunito',
  },
});

function App() {
  const shoppingList = [];
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
        <AppBar/>
      </header>
        {shoppingList.length === 0 ? 
          (
            <EmptyShoppingList/>
          ) : (
            <></>
          )
        }
      </ThemeProvider>
    </div>
  );
}

export default App;
