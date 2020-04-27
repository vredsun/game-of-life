
import * as React from 'react';
import FlexContainer from '~ui/atoms/flex_container/FlexContainer';
import ButtonTrash from '~ui/molecules/button_trash/ButtonTrash';
import ButtonSync from '~ui/molecules/button_sync/ButtonSync';
import ButtonAction from '~ui/molecules/button_action/ButtonAction';

type Props = {
  handleTrashClick: () => void;
  handleSyncClick: () => void;
  handlePlayClick: () => void;
  status: 'play' | 'pause';
};

const ButtonsControlContainer: React.FC<Props> = React.memo(
  (props) => {
    return (
      <FlexContainer>
        <ButtonTrash
          disabled={props.status === 'play'}
          onClick={props.handleTrashClick}
          isInverseColor
        />
        <ButtonSync
          disabled={props.status === 'play'}
          onClick={props.handleSyncClick}
        />
        <ButtonAction
          onClick={props.handlePlayClick}
          status={props.status}
        />
      </FlexContainer>
    );
  },
);

export default ButtonsControlContainer;
