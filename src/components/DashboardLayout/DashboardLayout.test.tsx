import 'setupTest';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Activity as ActivityIcon } from 'react-feather';
import NavItem, { NavItemsParams } from './NavItem';
import DashboardSidebar, { sideBarProps } from './DashboardSidebar';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));

function submit() {}

const sidebarProps:sideBarProps = {
  onMobileClose: submit,
  openMobile: false,
};

const navbarProps:NavItemsParams = {
  href: '/Absences',
  icon: ActivityIcon,
  title: 'Absences',
  hiddenIcon: '',
};

describe('DasboardLayer Components:', () => {
  describe('NavItem Component:', () => {
    it('renders without crashing', () => {
      shallow(<NavItem
        href={navbarProps.href}
        icon={navbarProps.icon}
        title={navbarProps.title}
        hiddenIcon={navbarProps.hiddenIcon}
      />);
    });

    describe('DasboardLayer Component Props:', () => {
      const component = mount(
        <BrowserRouter>
          <NavItem
            href={navbarProps.href}
            icon={navbarProps.icon}
            title={navbarProps.title}
            hiddenIcon={navbarProps.hiddenIcon}
          />
        </BrowserRouter>,
      );
      const ChildComponent = component.find('NavItem');
      it('accepts DasboardLayer Component props', () => {
        expect(ChildComponent.props()).toEqual(navbarProps);
      });

      it('DasboardLayer Component props are applied', () => {
        const span = ChildComponent.find('span');
        expect(span.get(0).props.children).toContain(navbarProps.title);
      });
    });
  });

  describe('DashboardNavbar Component:', () => {
    it('renders without crashing', () => {
      shallow(<DashboardSidebar
        onMobileClose={sidebarProps.onMobileClose}
        openMobile={sidebarProps.openMobile}
      />);
    });

    describe('DasboardLayer Component Props:', () => {
      const component = mount(
        <BrowserRouter>
          <DashboardSidebar
            onMobileClose={sidebarProps.onMobileClose}
            openMobile={sidebarProps.openMobile}
          />
        </BrowserRouter>,
      );
      const ChildComponent = component.find('DashboardSidebar');
      it('accepts DasboardLayer Component props', () => {
        expect(ChildComponent.props()).toEqual(sidebarProps);
      });
    });
  });
});
