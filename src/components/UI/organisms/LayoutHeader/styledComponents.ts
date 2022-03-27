import styled from 'styled-components';

import { H1, Text } from 'src/components/UI/atoms/typography/styledComponents';

export const Header = styled.header`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  border-bottom: black solid 2px;
`;

export const Logo = styled(H1)`
  font-weight: bold;
  flex: 1;
`;

export const NavigationMenu = styled.nav`
  display: flex;
  gap: 10px;
`;

export const NavItem = styled(Text)`
  color: black;
  text-decoration: ${({ isActive }: { isActive: boolean }) => (isActive ? 'underline' : 'none')};
  font-weight: bold;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
