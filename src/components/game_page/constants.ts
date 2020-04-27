import { lighten } from 'polished';

export enum STATUS {
  IS_LIFE = 'IS_LIFE',
  IS_DEAD = 'IS_DEAD',
}

export const STATUS_COLOR_RECORD: Record<STATUS, string> = {
  [STATUS.IS_LIFE]: '#FF0000',
  [STATUS.IS_DEAD]: '#000000',
};

export const STATUS_HOVER_COLOR_RECORD: Record<STATUS, string> = {
  [STATUS.IS_LIFE]: lighten(0.3, STATUS_COLOR_RECORD.IS_LIFE),
  [STATUS.IS_DEAD]: lighten(0.3, STATUS_COLOR_RECORD.IS_DEAD),
};

