import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@mui/material';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'grid',
  gridTemplateColumns: '1fr',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '232px 1fr',
  },
}));

const DashboardLayoutWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  background: '#e9eae9',
}));

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  marginTop: '3rem',
  flex: '1 1 auto',
  overflow: 'hidden',
});

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
  paddingLeft: '10px',
  paddingRight: '10px',
});

function DashboardLayout(): JSX.Element {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  window.scrollTo(0, 0);

  return (
    <DashboardLayoutRoot>
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardLayoutWrapper>
        <DashboardLayoutContainer>
          <DashboardLayoutContent>
            <Outlet />
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
}

export default DashboardLayout;
