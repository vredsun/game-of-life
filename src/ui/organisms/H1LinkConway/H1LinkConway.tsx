import * as React from 'react';
import H1Link from '~ui/molecules/h1_link/H1Link';

type Props = {};

const H1LinkConway: React.FC<Props> = React.memo(
  (props) => {

    return (
      <H1Link
        children="Conway's Game of Life"
      />
    );
  },
);

export default H1LinkConway;
