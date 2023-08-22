import React from 'react'
import { SparklineProps } from '../types/Sparkline'

function generateX(value: number, width: number, max: number): number {
  return Math.round(value * (width / max))
}

function generateY(value: number, height: number, max: number): number {
  return Math.round(height - (value * height) / max)
}

export default function Sparkline({
  values,
  width,
  height,
  lineColor = 'black',
  lineWidth = 1,
  fillColor = 'transparent',
  fillOpacity = 1,
  className,
  style
}: SparklineProps) {
  const MAX_X_COORD = values.length - 1
  const MAX_Y_COORD = Math.max(...values)

  const LINE_COORDS = `M0 ${generateY(
    values[0],
    height,
    MAX_Y_COORD + lineWidth
  )} ${values.map((value, index) => {
    const x = generateX(index, width, MAX_X_COORD)
    const y = generateY(value, height, MAX_Y_COORD + lineWidth)

    return ` L ${x} ${y}`
  })}`

  const FILL_COORDS = `${LINE_COORDS} V ${height} L 0 ${height} Z`

  return (
    <svg
      data-sandbox-sparkline
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      style={style}
    >
      {/* Fill */}
      <path
        d={FILL_COORDS}
        fill={fillColor}
        fillOpacity={fillOpacity}
        stroke="none"
      />

      {/* Line */}
      <path
        d={LINE_COORDS}
        stroke={lineColor}
        strokeWidth={lineWidth}
        fill="none"
      />
    </svg>
  )
}
