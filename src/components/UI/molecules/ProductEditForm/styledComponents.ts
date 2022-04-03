import styled from 'styled-components';

import { MediumText } from 'src/components/UI/atoms/typography/styledComponents';

export const FormWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const UndistributedProduction = styled(MediumText)`
  color: ${({ isNegative }: { isNegative: boolean }) => (isNegative ? 'red' : 'black')};
`;
