import styled from 'styled-components';

import { H1, Text } from 'src/components/UI/atoms/typography/styledComponents';

export const Header = styled.header`
  width: 100%;
  padding: 10px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  border-bottom: black solid 2px;
`;

export const Logo = styled(H1)`
  font-weight: bold;
`;

export const NavigationMenu = styled.nav`
  display: flex;
  flex: 1;
  align-items: stretch;
  align-self: stretch;
  gap: 4px;
  a {
    display: flex;
    align-items: stretch;
    flex: 1;
  }
`;

export const NavItem = styled(Text)`
  position: relative;
  padding: 5px;
  display: flex;
  align-items: center;
  flex: 1;
  color: ${({ isActive }: { isActive: boolean }) => (isActive ? 'black' : 'rgba(255,255,255,0.9)')};
  text-decoration: ${({ isActive }: { isActive: boolean }) => (isActive ? 'underline' : 'none')};
  font-weight: bold;
  border: 2px solid black;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  background-color: ${({ isActive }: { isActive: boolean }) => (isActive ? 'white' : 'rgba(85,85,85)')};
  box-shadow: ${({ isActive }: { isActive: boolean }) => (isActive ? '1px -0.5px 2px 0.5px rgba(0,0,0,0.75)' : 'none')};
  z-index: 2;
  ::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    height: ${({ isActive }: { isActive: boolean }) => (isActive ? '3px' : '0')};
    width: 100%;
    background-color: white;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
