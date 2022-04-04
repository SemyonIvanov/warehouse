import { NavLink } from 'react-router-dom';

import { routes } from 'src/constants/routes';

import { Header, Logo, NavigationMenu, NavItem } from './styledComponents';

export const LayoutHeader = () => (
  <Header>
    <Logo>WAREHOUSE</Logo>
    <NavigationMenu>
      {routes.map(({ path, name }) => (
        <NavLink key={path} to={path}>
          {({ isActive }) => <NavItem isActive={isActive}>{name}</NavItem>}
        </NavLink>
      ))}
    </NavigationMenu>
  </Header>
);
