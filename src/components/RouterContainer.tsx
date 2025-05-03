import * as React from 'react';

import GamePage from '~components/game_page/GamePage';
import Version from '~ui/atoms/version/Version';

const RouterContainer: React.FC = React.memo(
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
