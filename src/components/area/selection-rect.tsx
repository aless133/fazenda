import React from "react";

interface Props {
  rect: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export function SelectionRect({ rect }: Props) {
  return (
    <>
      <rect {...rect} stroke="red" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
      <text
        x={rect.x + rect.width / 2}
        y={rect.y + rect.height / 2}
        fill="black"
        fontSize="0.5"
        textAnchor="middle"
        alignmentBaseline="central"
        vectorEffect="non-scaling-size"
      >
        {`${rect.width}x${rect.height}`}
      </text>
    </>
  );
}
