import './App.css';
import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { classes } from './style';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddition = () => {
    setResult((prevResult) => (prevResult || 0) + parseInt(inputValue || 0));
    setInputValue("");
  };

  const handleSubtraction = () => {
    setResult((prevResult) => (prevResult || 0) - parseInt(inputValue || 0));
    setInputValue("");
  };

  const handleMultiplication = () => {
    setResult((prevResult) => (prevResult || 0) * parseInt(inputValue || 1));
    setInputValue("");
  };

  const handleDivision = () => {
    if (parseFloat(inputValue) === 0) {
      alert("Cannot divide by zero!");
      return;
    }
    setResult((prevResult) => (prevResult || 0) / parseFloat(inputValue || 1));
    setInputValue("");
  };

  const resetResult = () => {
    setResult(null);
  };

  const resetInput = () => {
    setInputValue("");
  };

  return (
    <Container maxWidth="xs" sx={classes.container}>
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
        }}
      >
        <Typography variant="h4" component="h1" sx={classes.title}>
          Calculator
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter Number"
          variant="outlined"
          value={inputValue}
          onChange={handleInputValue}
          sx={classes.inputfield}
        />
        <Box sx={classes.box}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddition}
            sx={classes.button}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={classes.button}
            onClick={handleSubtraction}
          >
            Sub
          </Button>
          <Button
            variant="contained"
            sx={classes.button}
            color="success"
            onClick={handleMultiplication}
          >
            Mul
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={classes.button}
            onClick={handleDivision}
          >
            Div
          </Button>
        </Box>
        <Box sx={classes.boxbutton}>
          <Button
            variant="outlined"
            color="error"
            onClick={resetResult}
           
          >
            Reset Result
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={resetInput}
            sx={{ px: 3, py: 1, fontWeight: 'bold' }}
          >
            Reset Input
          </Button>
        </Box>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Result: {result !== null ? result : "--"}
        </Typography>
      </Box>
    </Container>
  )
}

export default App;
