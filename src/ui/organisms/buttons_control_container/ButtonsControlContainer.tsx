
import * as React from 'react';
import FlexContainer from '~ui/atoms/flex_container/FlexContainer';
import ButtonAction from '~ui/molecules/button_action/ButtonAction';
import ButtonSync from '~ui/molecules/button_sync/ButtonSync';
import ButtonTrash from '~ui/molecules/button_trash/ButtonTrash';

type Props = {
  handleTrashClick: () => void;
  handleSyncClick: () => void;
  handlePlayClick: () => void;
  isPlaying: boolean;
};

const ButtonsControlContainer: React.FC<Props> = React.memo(
  (props) => {
    return (
      <FlexContainer>
        <ButtonTrash
          onClick={props.handleTrashClick}
          isInverseColor
        />
        <ButtonSync
          onClick={props.handleSyncClick}
          isInverseColor
        />
        <ButtonAction
          onClick={props.handlePlayClick}
          isPlaying={props.isPlaying}
        />
      </FlexContainer>
    );
  },
);

export default ButtonsControlContainer;
