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
  lineColor = '#4989eb',
  lineWidth = 3,
  fillColor = '#b2cff2',
  fillOpacity = 1,
  className,
  style
}: SparklineProps) {
  const MAX_X_COORD = values.length - 1
  const MAX_Y_COORD = Math.max(...values)

  const lineCoords = `M0 ${generateY(
    values[0],
    height,
    MAX_Y_COORD + lineWidth
  )} ${values.map((value, index) => {
    const x = generateX(index, width, MAX_X_COORD)
    const y = generateY(value, height, MAX_Y_COORD + lineWidth)

    return ` L ${x} ${y}`
  })}`

  const fillCoords = `${lineCoords} V ${height} L 0 ${height} Z`

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
        d={fillCoords}
        fill={fillColor}
        fillOpacity={fillOpacity}
        stroke="none"
      />

      {/* Line */}
      <path
        d={lineCoords}
        stroke={lineColor}
        strokeWidth={lineWidth}
        fill="none"
      />
    </svg>
  )
}
