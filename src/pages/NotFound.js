import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography
} from '@material-ui/core';
import Lottie from 'lottie-react-web';
import animation from './key_animation.json';

const NotFound = () => (
  <>
    <Helmet>
      <title>404</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          404 | NOT FOUND
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          お探しのページは見つかりませんでした
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Lottie
            options={{
              animationData: animation
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default NotFound;
