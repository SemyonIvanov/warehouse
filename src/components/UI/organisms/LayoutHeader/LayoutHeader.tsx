import { NavLink } from 'react-router-dom';

import { ReactComponent as ProfileIcon } from 'src/assets/Profile.svg';

import { Text } from 'src/components/UI/atoms/typography/styledComponents';

import { Header, Logo, NavigationMenu, NavItem, ProfileWrapper } from './styledComponents';

export const LayoutHeader = () => (
  <Header>
    <Logo>WAREHOUSE</Logo>
    <NavigationMenu>
      <NavLink to="/products">{({ isActive }) => <NavItem isActive={isActive}>Продукция</NavItem>}</NavLink>
      <NavLink to="/warehouses">{({ isActive }) => <NavItem isActive={isActive}>Склады</NavItem>}</NavLink>
    </NavigationMenu>
    <ProfileWrapper>
      <ProfileIcon width="2rem" />
      <Text>Иванов Семён Вадимович</Text>
    </ProfileWrapper>
  </Header>
);
