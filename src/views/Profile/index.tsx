import React, { useEffect, useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from 'components/TabPanel';
import { makeStyles } from '@mui/styles';
import { purgeUserProfileState } from 'redux/actions/users';
import { useDispatch } from 'react-redux';
import InformationTab from './InformationTab';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  ProfileContainer: {
    width: '100%',
    '& h3': {
      margin: 0,
    },
  },
  pageTitle: {
    margin: '20px 0 0 10px',
  },
  tabContainer: {
    margin: '0 10px',
  },
}));

function Profile(): JSX.Element {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    dispatch(purgeUserProfileState());
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(purgeUserProfileState());
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <h3 className={classes.pageTitle}>Profile</h3>
      <div className={classes.tabContainer}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Information" {...a11yProps(0)} />
            <Tab label="Account Information" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <InformationTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </Box>
  );
}

export default Profile;
