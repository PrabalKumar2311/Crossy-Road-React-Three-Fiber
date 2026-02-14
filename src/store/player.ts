import * as THREE from "three";
import type { MoveDirection } from "../types";
import  endsUpInValidPosition  from "../utilities/endsUpInvalidPosition";
import useMapStore from "./map";
import useGameStore from "./game";

// export let hasDispatchedFirstMove = false;

export const state: {
  isMoving: boolean;
  currentRow: number;
  currentTile: number;
  movesQueue: MoveDirection[];
  ref: THREE.Object3D | null;
} = {
  currentRow: 0,
  currentTile: 0,
  movesQueue: [],
  ref: null,
  isMoving: false,
};

export function queueMove(direction: MoveDirection) {
  // Allow only ONE buffered move while moving
  if (state.isMoving && state.movesQueue.length > 0) return;

  const isValidMove = endsUpInValidPosition(
    { rowIndex: state.currentRow, tileIndex: state.currentTile },
    [...state.movesQueue, direction]
  );

  if (!isValidMove) {
  window.dispatchEvent(
    new CustomEvent("invalid-move", { detail: direction })
  );
  return;
}

  state.movesQueue.push(direction);

  // if (!hasDispatchedFirstMove) {
  //   hasDispatchedFirstMove = true;
  //   window.dispatchEvent(new Event("player-first-move"));
  // }
}


export function stepCompleted() {
  const direction = state.movesQueue.shift();

  if (direction === "forward") state.currentRow += 1;
  if (direction === "backward") state.currentRow -= 1;
  if (direction === "left") state.currentTile -= 1;
  if (direction === "right") state.currentTile += 1;

  // Add a batch of new rows if the player is running out of them; rows are infinite
  if (state.currentRow === useMapStore.getState().rows.length - 10) {
    useMapStore.getState().addRows();
  }

  useGameStore.getState().updateScore(state.currentRow);
}

export function setRef(ref: THREE.Object3D) {
  state.ref = ref;
}

export function resetPlayer() {
  state.currentRow = 0;
  state.currentTile = 0;
  state.movesQueue = [];

  if (state.ref) {
    state.ref.position.set(0, 0, 0);
    state.ref.rotation.set(0, 0, 0);
    state.ref.updateMatrixWorld(true);
  }
}