import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import MenuList from 'components/Menu';
import settingIcon from '../../assets/icons/setting.png';
import notification from '../../assets/icons/notification.png';

const notifcationList = ['1 Message'];
const settings = ['Profile', 'Reset Password', 'Logout'];
const profileList = ['Profile', 'Reset Password', 'Logout'];
function DashboardNavbar({
  onMobileNavOpen,
}:{onMobileNavOpen:any}): JSX.Element {
  return (
    <AppBar elevation={0} sx={{ display: { lg: 'block', xs: 'block' } }}>
      <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>

        {/* ============== MAIN MENU MOBILE BUTTON ============== */}
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
          color="inherit"
          onClick={onMobileNavOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* ============== MAIN MENU LIST ============== */}
        <Box sx={{ flexGrow: 0 }} className="menu-list">
          <p>07:59:34 PM April 04, 2021 </p>
          <MenuList list={notifcationList} type="notificaiton" image={notification} />
          <MenuList list={settings} type="settings" image={settingIcon} />
          <MenuList list={profileList} type="profile" image="" />
        </Box>

      </Toolbar>
    </AppBar>
  );
}

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

DashboardNavbar.defaultProps = {
  onMobileNavOpen: () => {},
};

export default DashboardNavbar;
