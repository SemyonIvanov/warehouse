import { NavLink } from 'react-router-dom';

import { ReactComponent as ProfileIcon } from 'src/assets/Profile.svg';

import { Text } from 'src/components/UI/atoms/typography/styledComponents';

import { routes } from 'src/constants/routes';

import { Header, Logo, NavigationMenu, NavItem, ProfileWrapper } from './styledComponents';

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
    <ProfileWrapper>
      <ProfileIcon width="2rem" />
      <Text>Иванов Семён Вадимович</Text>
    </ProfileWrapper>
  </Header>
);
