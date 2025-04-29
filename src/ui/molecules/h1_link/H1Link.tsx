import * as React from 'react';

import styled from 'styled-components';
import Link from '~ui/atoms/link/Link';

type Props = {
  href: string;
  rel: string;
} & React.PropsWithChildren;

const H1 = styled.h1`
  font-size: 3rem;
`;

const H1Link: React.FC<Props> = React.memo(
  (props) => (
    <H1>
      <Link {...props} target="_blank"/>
    </H1>
  )
);

export default H1Link;
