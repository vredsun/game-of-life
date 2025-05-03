import isNumber from 'lodash/isNumber';
import { darken } from 'polished';
import { GRID_STROKE_SIZE, STATUS } from '~components/game_page/constants';
import { getDeadColor, getLifeColor } from '~components/game_page/utils/colors';
import { CellColorName } from './types';


type Props = {
  x: number;
  y: number;
  coords: Array<number>;
  baseColor: CellColorName;

  status?: STATUS;
};

const checkCoordIndside = (coords: Array<number>, x?: number, y?: number) => {
  if (isNumber(x) && isNumber(y)) {
    return (
      x >= coords[0]
      && x <= (coords[0] + coords[2])
      && y >= coords[1]
      && y <= (coords[1] + coords[3])
    );
  }
};

class Cell {
  baseColor: CellColorName;

  #isHovered: boolean;
  #isHoveredByLine: boolean;
  _coords: Array<number>;
  _x: number;
  _y: number;
  status: STATUS;
  nextStatus: STATUS | null = null;

  constructor(props: Props) {
    this._coords = props.coords;
    this._x = props.x;
    this._y = props.y;
    this.status = props.status ?? STATUS.IS_DEAD;
    this.#isHovered = false;
    this.#isHoveredByLine = false;

    this.baseColor = props.baseColor;
  }


  dieCell = () => {
    this.status = STATUS.IS_DEAD;
  }

  isAlive = () => {
    return this.status === STATUS.IS_LIFE;
  }

  checkStatus = (brothers: Array<Cell>): boolean => {
    const countOfAlife = brothers.reduce((acc, cell) => {
      if (cell.isAlive() && cell.baseColor === this.baseColor) {
        acc += 1;
      }

      return acc;
    }, 0)

    let isChangedStatus = false;
    let nextStatus: STATUS = STATUS.IS_DEAD;

    if (this.status === STATUS.IS_DEAD) {
      if (countOfAlife === 3) {
        nextStatus = STATUS.IS_LIFE;
      }
    }
    if (this.status === STATUS.IS_LIFE) {
      if (countOfAlife === 3 || countOfAlife === 2) {
        nextStatus = STATUS.IS_LIFE;
      }
    }

    if (this.status !== nextStatus) {
      isChangedStatus = true; 
      this.nextStatus = nextStatus;

    }

    return isChangedStatus;
  }

  changeHover = (isHovered: boolean) => {
    this.#isHovered = isHovered;
  }

  changeHalfHover(is_hover: boolean) {
    this.#isHoveredByLine = is_hover;
  }

  checkOnHover(hover_coord_x?: number, hover_coord_y?: number) {
    return checkCoordIndside(this._coords, hover_coord_x, hover_coord_y);
  }

  toggleLifeStatus(activeColor: CellColorName) {
    if (this.baseColor !== activeColor) {
      this.baseColor = activeColor;
      this.status = STATUS.IS_LIFE;
      
      return;
    }

    this.status = this.status === STATUS.IS_DEAD ? STATUS.IS_LIFE : STATUS.IS_DEAD;
  }

  get color() {
    if (this.status === STATUS.IS_DEAD) {
      return getDeadColor(this.#isHovered);
    }

    return getLifeColor(this.#isHovered, this.baseColor);
  }

  get bg_color() {
    if (this.#isHovered || this.#isHoveredByLine) {
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
    if (this.nextStatus) {
      this.status = this.nextStatus;
      this.nextStatus = null;
    }


    this.renderBg(ctx);

    ctx.beginPath();
    ctx.fillStyle = this.color;

    ctx.fillRect(
      this._coords[0] + GRID_STROKE_SIZE,
      this._coords[1] + GRID_STROKE_SIZE,
      this._coords[2] - 2 * GRID_STROKE_SIZE,
      this._coords[3] - 2 * GRID_STROKE_SIZE,
    );
    ctx.closePath();
  }
}

export default Cell;
