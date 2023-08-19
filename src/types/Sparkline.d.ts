type ChartType = 'line' | 'area' | 'spline' | 'spline-area'

type Point = {
  x: number
  y: number
}

type Line = Array<Point>

export interface SparklineProps {
  type: ChartType
  line: Line
  width: number
  height: number
}
