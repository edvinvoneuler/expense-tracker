import { ChartBar } from './ChartBar';
import './Chart.css';

export const Chart = props => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalSum = dataPointValues.reduce( (sum, value) => sum + value, 0)

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        totalSum={totalSum}
        label={dataPoint.label}
      />)
      }
    </div>
  )
};