import React from 'react';
// import PropTypes from 'prop-types';
import {
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import defaultProfile from '../../assets/icons/profile-hover.png';

function MenuList({
  list, link, type, image,
}:{ list:any[], link: boolean, type: string, image:string }): JSX.Element {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title={type}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} size="large">
          {
            type === 'profile'
              ? <img src={(image) ? `${image}` : `${defaultProfile}`} alt="User profile" />
              : <img src={image} alt={type} />
          }
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {list.map((res) => (
          <MenuItem className="header-menu-dropdown" key={res.name} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">
              { (link) ? <a href={res.link}>{res.name}</a> : res.name }
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

// MenuList.propTypes = {
//   list: PropTypes,
// };

export default MenuList;
