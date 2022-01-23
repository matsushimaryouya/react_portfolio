import {
  Avatar,
  Box,
  // Card,
  // CardContent,
  // Divider,
  Typography
} from '@material-ui/core';
// ニューモフィズム----------
import {
  Card, CardContent
} from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
// -----------------------

const user = {
  avatar: '/static/images/other/cat.jpg',
  city: 'Ryouya Matsushima',
  country: 'USA',
  jobTitle: 'Ryouya Matsushima',
  name: '松島 亮也',
  timezone: 'GTM-7'
};

const AccountProfile = (props) => (
  <Card inset {...props}>
    <CardContent style={{ background: 'unset' }}>
      <Box
        style={{ paddingTop: 20 }}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={`${process.env.PUBLIC_URL}/static/images/other/avatar.png`}
          sx={{
            height: 100,
            width: 100
          }}
        />
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {`${user.city}`}
        </Typography>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h3"
        >
          {user.name}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default AccountProfile;
