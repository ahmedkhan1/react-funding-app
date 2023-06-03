import React, { MouseEventHandler, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  List,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerIdsFailure, getCustomerIdsSuccess, setCustomerIdsSuccess } from 'redux/actions/customers';
import { getCustomerIds } from 'services/customer.service';
import { RootState } from 'redux/reducers/rootReducer';
import { TCustomerIDList } from 'types/TState';
import Utils from 'utils';
import dashboardIcon from '../../assets/icons/navigation/dashboard-icon.png';
import portfolioIcon from '../../assets/icons/navigation/portfolio.png';
import statemenetIcon from '../../assets/icons/navigation/statements.png';
import etransactionIcon from '../../assets/icons/navigation/e-transaction.png';
import lodgesComplainIcon from '../../assets/icons/navigation/lodges-complain.png';
import logoutIcon from '../../assets/icons/navigation/logout.png';
import background from '../../assets/images/navbar-background.png';
import logo from '../../assets/images/amc-main-logo-white.png';
import NavItem from './NavItem';

const items = [
  {
    href: '/dashboard',
    icon: dashboardIcon,
    title: 'Dashboard',
  },
  {
    href: '/dashboard/portfolio',
    icon: portfolioIcon,
    title: 'Portfolio',
  },
  {
    href: '/dashboard/statement',
    icon: statemenetIcon,
    title: 'Statement',
  },
  {
    href: '/dashboard/e-transaction',
    icon: etransactionIcon,
    title: 'E-Transactions',
  },
  {
    href: '/dashboard/lodge-complaint',
    icon: lodgesComplainIcon,
    title: 'Lodge a Complaint',
  },
  {
    href: '',
    icon: logoutIcon,
    title: 'Logout',
  },
];

export type sideBarProps = {
  onMobileClose: MouseEventHandler<HTMLUListElement>,
  openMobile: boolean,
};

function DashboardSidebar({
  onMobileClose,
  openMobile,
} : sideBarProps): JSX.Element {
  const navigate = useNavigate();
  const [balance, setBalance] = React.useState<any>(0);
  // const [customerIdList] = React.useState<any>([]);
  const dispatch = useDispatch();
  const customerIDList:TCustomerIDList = useSelector((state: RootState) => state.customer);

  useEffect(() => {
    const abortController = new AbortController();
    if (customerIDList?.error) {
      console.log('Error:', customerIDList);
    } else {
      dispatch(getCustomerIds({
        successAction: getCustomerIdsSuccess,
        failureAction: getCustomerIdsFailure,
      }));
    }
    return () => {
      abortController.abort(); // cancel pending API
    };
  }, []);

  const moreDetails = () => {
    navigate('/dashboard/profile', { replace: true });
  };

  const onCustomerIdChange = (event:any) => {
    const { value } = event.target;
    const obj:any = customerIDList?.payload?.find(
      (res:any) => res.customerId === value,
    );
    const formatBalance = Utils.commonMethods.formatNumber(obj.balance);
    setBalance(formatBalance);
    localStorage.setItem('customerId', value);
    dispatch(setCustomerIdsSuccess(value));
  };

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div className="navbar-header">
        <img src={logo} alt="logo" />

        <select defaultValue="0" onChange={(event) => onCustomerIdChange(event)}>
          <option value="0">Customer ID</option>
          {
            customerIDList?.payload?.map((res: any) => (
              <option value={res.customerId} key={res.id}>{res.customerId}</option>
            ))
          }
        </select>

        <h1>
          Rs.
          {balance}
        </h1>

        <span aria-hidden="true" onClick={moreDetails} onKeyDown={() => {}}>More details</span>

        <img src={background} alt="background" />
      </div>

      <Divider />

      <Box sx={{ px: 0 }}>
        <List
          onClick={onMobileClose}
        >
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Drawer
        sx={{ display: { lg: 'none', xs: 'block' } }}
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
        PaperProps={{
          sx: {
            width: 232,
            overflowX: 'hidden',
            backgroundColor: '#174a82 !important',
          },
        }}
      >
        {content}
      </Drawer>
      <Drawer
        sx={{ display: { xs: 'none', lg: 'block' } }}
        anchor="left"
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: 232,
            overflowX: 'hidden',
            backgroundColor: '#174a82 !important',
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
}

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
