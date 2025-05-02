import isNumber from 'lodash/isNumber';
import { darken } from 'polished';
import { DefaultTheme } from 'styled-components';
import { STATUS } from '~components/game_page/constants';
import { getDeadColor, getLifeColor } from '../utils/colors';

type Props = {
  matrix: any[][];
  x: number;
  y: number;
  coords: number[];
  gridStroke: number;
  baseColor: keyof DefaultTheme['colors']['cellColors'];

  status?: STATUS;
};

const checkCoordIndside = (coords: number[], x?: number, y?: number) => {
  if (isNumber(x) && isNumber(y)) {
    return (
      x >= coords[0]
      && x <= (coords[0] + coords[2])
      && y >= coords[1]
      && y <= (coords[1] + coords[3])
    );
  }
};

class Square {
  baseColor: keyof DefaultTheme['colors']['cellColors'];

  _is_hover: boolean;
  _is_hover_in_cursor_line: boolean;
  _coords: number[];
  _x: number;
  _y: number;
  _ownMatrix: typeof Square[][];
  status: STATUS;
  gridStroke: number;

  constructor(props: Props) {
    this._coords = props.coords;
    this._x = props.x;
    this._y = props.y;
    this._ownMatrix = props.matrix;
    this.status = props.status ?? STATUS.IS_DEAD;
    this._is_hover = false;
    this._is_hover_in_cursor_line = false;
    this.gridStroke = props.gridStroke;

    this.baseColor = props.baseColor;
  }

  changeHalfHover(is_hover: boolean) {
    this._is_hover_in_cursor_line = is_hover;
  }

  checkOnHover(hover_coord_x?: number, hover_coord_y?: number) {
    if (checkCoordIndside(this._coords, hover_coord_x, hover_coord_y)) {
      return this._is_hover = true;
    } else {
      return this._is_hover = false;
    }

  }

  toggleLifeStatus(activeColor: keyof DefaultTheme['colors']['cellColors']) {
    if (this.baseColor !== activeColor) {
      this.baseColor = activeColor;
      this.status = STATUS.IS_LIFE;
      
      return;
    }

    this.status = this.status === STATUS.IS_DEAD ? STATUS.IS_LIFE : STATUS.IS_DEAD;
  }

  get color() {
    if (this.status === STATUS.IS_DEAD) {
      return getDeadColor(this._is_hover);
    }

    return getLifeColor(this._is_hover, this.baseColor);
  }

  get bg_color() {
    if (this._is_hover || this._is_hover_in_cursor_line) {
      return darken(0.2, '#F7F7F7');
    }
    return darken(0.1, '#F7F7F7');
  }

  renderBg(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.bg_color;

    ctx.fillRect(
      this._coords[0],
      this._coords[1],
      this._coords[2],
      this._coords[3],
    );
    ctx.closePath();
  }

  render(ctx: CanvasRenderingContext2D) {
    this.renderBg(ctx);

    ctx.beginPath();
    ctx.fillStyle = this.color;

    ctx.fillRect(
      this._coords[0] + this.gridStroke,
      this._coords[1] + this.gridStroke,
      this._coords[2] - 2 * this.gridStroke,
      this._coords[3] - 2 * this.gridStroke,
    );
    ctx.closePath();
  }
}

export default Square;
