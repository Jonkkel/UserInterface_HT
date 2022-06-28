import {
    Box,
    Typography,
    Button,
    Step,
    Link,
    Stepper,
    StepLabel,
    Container
  } from '@mui/material';
  import { useState, useCallback } from 'react';
  
  import Modal from './Modal';
  import useToken from '../../useToken'
  import Land from './../Land';
  // Handles routing.
  function App() {
  
    const { token, removeToken, saveToken } = useToken();
    const [location, setLocation] = useState(0);
  
    return (
  
      <Container>
        {
          !token && token !== "" && token !== undefined ?
            <Land />
            :
            (
              <>
                <Modal/>
  
                < Typography variant='h3'>Hello world!</Typography>
              </>
            )
  
        }
      </Container >
  
    );
  }
  
  export default App;
  
  // rfce