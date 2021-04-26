import {
  Box,
  Button,
  Card,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const FirstView = (props) => (
  <Card {...props}>
    <Box height="calc(100vh - 100px)" sx={{ textAlign: 'center' }}>
      <img
        alt="Under development"
        src="/static/images/undraw_page_not_found_su7k.svg"
        style={{
          // marginTop: 50,
          display: 'inline-block',
          // maxWidth: '100%',
          // width: 560,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default FirstView;
