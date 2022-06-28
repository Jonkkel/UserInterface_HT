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

import useToken from '../useToken';
import Land from './Land';
// Handles routing.
function App() {

  const { token, removeToken, saveToken } = useToken();

  return (

    <Container>
      {
        !token && token !== "" && token !== undefined ?
          <Land />
          :
          (
          <Typography variant='h3'>Hello world!</Typography>)
      }
    </Container>

  );
}

export default App;

// rfce