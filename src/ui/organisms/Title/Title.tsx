import * as React from 'react';
import H1Link from '~ui/molecules/h1_link/H1Link';

const H1LinkConway: React.FC = React.memo(
  () => {
    return (
      <H1Link
        children="Conway's Game of Life"
      />
    );
  },
);

export default H1LinkConway;
