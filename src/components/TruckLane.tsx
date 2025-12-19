import type { Row } from '../types'
import  Road  from './Road';
import { Truck } from './Truck';

type Props = {
  rowIndex: number;
  rowData: Extract<Row, {type: 'truck'}>
}

function TruckLane({rowIndex, rowData}: Props) {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        <Truck
        key={index}
        rowIndex={rowIndex}
        initialTileIndex={vehicle.initialIndex}
        direction={rowData.direction}
        speed={rowData.speed}
        color={vehicle.color}
        />
      ))}
      </Road>
  )
}

export default TruckLane
