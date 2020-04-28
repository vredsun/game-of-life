import * as React from 'react';
import H1Link from '~ui/molecules/h1_link/H1Link';

type Props = {};

const H1LinkConway: React.FC<Props> = React.memo(
  (props) => {

    return (
      <H1Link
        rel="nofollow"
        href="https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D1%80%D0%B0_%C2%AB%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%C2%BB"
        children="Conway's Game of Life"
      />
    );
  },
);

export default H1LinkConway;
