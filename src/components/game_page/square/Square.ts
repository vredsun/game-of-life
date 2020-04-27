import { STATUS, STATUS_COLOR_RECORD, STATUS_HOVER_COLOR_RECORD } from '~components/game_page/constants';
import { isNumber } from 'util';
import { darken } from 'polished';

type Props = {
  matrix: any[][];
  x: number;
  y: number;
  coords: number[];
  gridStroke: number;

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

    return false;
  }

  toggleLifeStatus() {
    let new_status = this.status;

    if (this.status === STATUS.IS_DEAD) {
      new_status = STATUS.IS_LIFE;
    }
    if (this.status === STATUS.IS_LIFE) {
      new_status = STATUS.IS_DEAD;
    }
    this.status = new_status;
  }

  get color() {
    if (!this._is_hover) {
      return STATUS_COLOR_RECORD[this.status];
    } else {
      return STATUS_HOVER_COLOR_RECORD[this.status];
    }
  }

  get bg_color() {
    if (this._is_hover || this._is_hover_in_cursor_line) {
      return darken(0.2, '#F7F7F7');
    } else {
      return '#F7F7F7';
    }
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
