import styled from '~styles';

type Props = {
  version: string;
};

const AbsoluteBottomRight = styled.div.attrs<Props>((props) => ({
  children: props.version,
}))<Props>`
  position: absolute;
  bottom: 0;
  right: 0.5rem;
`;

export default AbsoluteBottomRight;
