import React from 'react';
import Svg, { G, Circle, Text as SvgText } from 'react-native-svg';
import colors from '../../utils/colors';

export const SemicircleArc = ({
  percentage,
  color,
  radius = 22, // reduced radius
  strokeWidth = 6, // increased thickness
  label,
}) => {
  const circ = Math.PI * 2 * radius;
  const half = circ / 2;
  const dashOffset = half * (1 - percentage / 100);
  const size = radius * 2 + strokeWidth * 2;
  const baseY = radius + strokeWidth;

  return (
    <Svg width={size} height={baseY + 16}>
      <G rotation="-180" origin={`${size / 2},${size / 2}`}>
        {/* Background arc */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          strokeDasharray={`${half},${circ}`}
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${half},${circ}`}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </G>

      {/* Label above percentage */}
      <SvgText
        x="50%"
        y={baseY - 4}
        fontSize="10"
        fill={colors.primary}
        textAnchor="middle"
      >
        {label}
      </SvgText>
      <SvgText
        x="50%"
        y={baseY + 8}
        fontSize="12"
        fontWeight="bold"
        fill={color}
        textAnchor="middle"
      >
        {`${percentage}%`}
      </SvgText>
    </Svg>
  );
};
