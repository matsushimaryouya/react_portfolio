import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
// ニューモフィズム----------
import {
  Button, Card, CardContent, Body2
} from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
// -----------------------
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar.png',
  jobTitle: 'Ryouya Matsushima',
  name: '松島 亮也'
};

const items = [
  {
    href: '/app/top',
    title: 'Top'
  },
  {
    href: '/app/profile',
    title: 'Profile'
  },
  {
    href: '/app/work',
    title: 'Work'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Card
      className="CardSidebar"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardContent>
        <Card
          inset
          style={{ textAlign: 'center' }}
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            p: 2
          }}
        >
          <CardContent style={{ background: 'unset' }}>
            <Body2
              style={{
                paddingTop: 10,
                paddingBottom: 10
              }}
            >
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Portfolio
              </Typography>
              <Avatar
                style={{
                  marginTop: '16px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                component={RouterLink}
                src={user.avatar}
                sx={{
                  cursor: 'pointer',
                  width: 64,
                  height: 64
                }}
                to="/app/profile"
              />
              <Typography
                style={{
                  padding: '5px'
                }}
                color="textSecondary"
                variant="body2"
              >
                {user.jobTitle}
              </Typography>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                {user.name}
              </Typography>
            </Body2>
          </CardContent>
        </Card>
        <Box sx={{ p: 2 }}>
          <List>
            {items.map((item) => (
              <NavItem
                href={item.href}
                key={item.title}
                title={item.title}
              />
            ))}
          </List>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Card
          style={{
            position: 'absolute',
            bottom: 10,
            width: '87%',
          }}
          inset
          sx={{
            backgroundColor: 'background.default',
            m: 2,
            p: 2
          }}
        >
          <CardContent
            style={{
              backgroundColor: 'unset',
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Typography
              align="center"
              variant="body2"
            >
              お問合せはこちら
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 2
              }}
            >
              <a
                style={{ margin: 'auto' }}
                href="mailto:blue.conjrer@gmail.com"
                target="blank"
              >
                <Button
                  color="primary"
                  component="a"
                  href="mailto:blue.conjrer@gmail.com"
                  variant="contained"
                >
                  Contact
                </Button>
              </a>
            </Box>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          className="drawerSidebar"
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 0,
              height: '100%',
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
