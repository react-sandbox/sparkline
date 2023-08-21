type ChartType = 'line' | 'area'

export interface SparklineProps {
  values: Array<number>
  width: number
  height: number
  type?: ChartType
  lineColor?: string
  areaColor?: string
  className?: string
  style?: React.CSSProperties
}
