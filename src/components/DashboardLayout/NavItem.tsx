import React from 'react';
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@mui/material';

export type NavItemsParams = {
  href: string,
  icon: any,
  title: string,
  hiddenIcon: string,
};

const navStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0.3rem 0 0 0',
  color: '#fdfdfe !important',
  fontWeight: '400 !important',
  fontSize: '13px !important',
  letterSpacing: 0,
  textTransform: 'none',
  width: '100%',
  py: 1.25,
  '& svg': {
    mr: 1,
  },
};

function NavItem({
  href,
  icon,
  title,
  hiddenIcon,
}: NavItemsParams): JSX.Element {
  const location = useLocation();

  const active = href
    ? !!matchPath(
      {
        path: href,
        end: true,
      },
      location.pathname,
    )
    : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        py: 0,
      }}
    >
      <Button
        className="nav-items"
        component={RouterLink}
        sx={{
          ...navStyles,
          ...(active && {
            borderLeft: '4px solid #fff',
            borderRadius: '0',
            marginRight: '4px',
          }),
        }}
        to={href}
      >
        {!hiddenIcon && icon && <img width="25px" src={icon} alt={title} />}
        <span style={{
          lineHeight: '11px',
          marginTop: '6px',
        }}
        >
          {title}
        </span>
      </Button>
    </ListItem>
  );
}

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  hiddenIcon: PropTypes.string,
};

NavItem.defaultProps = {
  href: null,
  icon: null,
  title: null,
  hiddenIcon: null,
};

export default NavItem;
