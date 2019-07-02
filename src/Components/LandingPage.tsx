import {
  Box,
  Button,
  Container,
  Divider,
  Fab,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import Search from '@material-ui/icons/Search';

function LandingPage() {
  const [phoneNumber] = useState();

  return (
    <Container component="main" maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box
          fontSize="h3.fontSize"
          fontWeight="fontWeightMedium"
          marginBottom="10px"
        >
          Potluck Party Planner
          <Divider />
        </Box>
        <Divider />
        <Box alignContent="flex-end" margin="10px" width="350px">
          <Box
            fontSize="h6.fontSize"
            fontWeight="fontWeightMedium"
            marginBottom="10px"
          >
            Search for an existing potluck party:
          </Box>
          <ReactInputMask mask="(999) 999 - 9999" value={phoneNumber}>
            {() => (
              <TextField
                fullWidth
                placeholder="Enter organizer's phone number"
                type="tel"
                variant="outlined"
              />
            )}
          </ReactInputMask>
        </Box>
        <Box alignContent="flex-end" margin="10px">
          <Fab color="primary" aria-label="Search">
            <Search />
          </Fab>
        </Box>
      </Box>
      <Box
        textAlign="center"
        fontSize="h5.fontSize"
        fontWeight="fontWeightMedium"
        margin="20px"
      >
        OR
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Button color="secondary" type="button" variant="contained">
          Create New Potluck
        </Button>
      </Box>
    </Container>
  );
}

export default LandingPage;
