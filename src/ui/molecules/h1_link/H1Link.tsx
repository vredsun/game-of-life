import * as React from 'react';

import styled from 'styled-components';

type Props = {
} & React.PropsWithChildren;

const H1 = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.color_secondary_primary};
`;

const H1Link: React.FC<Props> = React.memo(
  (props) => (
    <H1 {...props}/>
  )
);

export default H1Link;
