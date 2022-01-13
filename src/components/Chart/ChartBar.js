import './ChartBar.css';

export const ChartBar = props => {

  let barFillHeight = "0%"

  if (props.totalSum > 0) {
    barFillHeight = Math.round((props.value/props.totalSum)*100) + '%'
  }

  return (
  <div className='chart-bar'>
    <div className='chart-bar__inner'>
      <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
    </div>
    <div className='chart-bar__label'>{props.label}</div>
  </div>)
};