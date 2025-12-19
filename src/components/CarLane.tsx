import type { Row } from '../types'
import  Road  from './Road';
import { Car } from './Car';

type Props = {
  rowIndex: number;
  rowData: Extract<Row, {type: 'car'}>
}

function CarLane({rowIndex, rowData}: Props) {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        <Car
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

export default CarLane
