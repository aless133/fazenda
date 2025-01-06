import React from "react";
import styles from "./area.module.css";

type Props = {
  width: number;
  length: number;
};

export function Dimensions({ width, length }: Props) {
  return (
    <g>
      {/* Top Label */}
      <text x="50%" y="20" textAnchor="middle" alignmentBaseline="middle" className={styles.topLabel}>
        {width}
      </text>

      {/* Left Label */}
      <text x="0" y="100" className={styles.leftLabel} transform="rotate(-90, 0, 0)">
        {length}
      </text>
    </g>
  );
}
