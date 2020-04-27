import { STATUS, STATUS_COLOR_RECORD, STATUS_HOVER_COLOR_RECORD } from '~components/game_page/constants';
import { isNumber } from 'util';

type Props = {
  matrix: any[][];
  x: number;
  y: number;
  coords: number[];

  status?: STATUS;
};

const checkCoordIndside = (coords: number[], x?: number, y?: number) => {
  if (isNumber(x) && isNumber(y)) {
    return (
      x > coords[0]
      && x < (coords[0] + coords[2])
      && y > coords[1]
      && y < (coords[1] + coords[3])
    );
  }
};

class Square {
  _is_hover: boolean;
  _coords: number[];
  _x: number;
  _y: number;
  _ownMatrix: typeof Square[][];
  status: STATUS;

  constructor(props: Props) {

    this._coords = props.coords;
    this._x = props.x;
    this._y = props.y;
    this._ownMatrix = props.matrix;
    this.status = props.status ?? STATUS.IS_DEAD;
    this._is_hover = false;
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

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    if (!this._is_hover) {
      ctx.fillStyle = STATUS_COLOR_RECORD[this.status];
    } else {
      ctx.fillStyle = STATUS_HOVER_COLOR_RECORD[this.status];
    }
    ctx.fillRect(
      this._coords[0],
      this._coords[1],
      this._coords[2],
      this._coords[3],
    );
    ctx.closePath();
  }
}

export default Square;
