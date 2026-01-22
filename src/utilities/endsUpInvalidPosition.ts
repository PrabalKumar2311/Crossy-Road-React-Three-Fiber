import type { MoveDirection } from "../types";
import { calculateFinalPosition } from "./calculateFinalPosition";
import { minTileIndex, maxTileIndex, minBackwardRow } from "../constants";
import { rows } from "../metadata";

export function endsUpInvalidPosition(
  currentPosition: { rowIndex: number; tileIndex: number },
  moves: MoveDirection[]
) {
  const finalPosition = calculateFinalPosition(currentPosition, moves);

  if( finalPosition.rowIndex < minBackwardRow ||
      finalPosition.tileIndex === minTileIndex - 1 ||
      finalPosition.tileIndex === maxTileIndex + 1
  ){
    return false
  }

  const finalRow = rows[finalPosition.rowIndex - 1];
  if ( finalRow && 
    finalRow.type === "forest" &&
    finalRow.trees.some((tree) => tree.tileIndex === 
    finalPosition.tileIndex)
  ) {
    return false;
  }
  return true;
}
  