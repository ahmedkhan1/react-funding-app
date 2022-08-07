import {
  Box,
  Container,
  Typography,
} from '@mui/material';

function NotFound() {
  return (
    <>
      <title>404</title>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '97vh',
        }}
      >
        <Container maxWidth="md">
          <Typography
            align="center"
            color="textPrimary"
            variant="h3"
            className="msg_container"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
            className="subheading_container"
          >
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default NotFound;
