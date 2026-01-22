import type { Row } from './types';

export const rows: Row[] = [
  {type: "forest",
    trees: [
      {tileIndex: -3, height: 20},
      {tileIndex: 2, height: 10},
      {tileIndex: 5, height: 20},
      {tileIndex: -5, height: 10},
    ],
  },
  {type: "car",
    direction: false,
    speed: 0,
    vehicles: [{initialIndex: -1, color: 0xff0000}]
  },
  {type: "truck",
    direction: true, 
    speed: 50,
    vehicles: [{initialIndex: -3, color: 0x00ff00}]
  }
];