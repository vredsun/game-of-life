import * as React from 'react';

import Version from '~ui/atoms/version/Version';
import GamePage from '~components/game_page/GamePage';

type Props = {};

const RouterContainer: React.FC<Props> = React.memo(
  () => {
    return (
      <React.Suspense fallback={null}>
        <GamePage />
        <Version version={_VERSION_}/>
      </React.Suspense>
    );
  },
);

export default RouterContainer;
