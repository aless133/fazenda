import React from "react";
import s from "./area.module.css";
import { type IArea } from "@/types";
import { Dimensions } from "./dimensions";

type Props = {
  area: IArea;
  children?: React.ReactNode;
};

export function Area({ area, children }: Props) {
  console.log(area);
  return (
    <div className={s.area_container + " my-6"}>
      <svg width="100%" className={s.area} style={{ aspectRatio: `${area.width}/${area.length}` }}>
        {children ? children : null}
      </svg>
      <span className={s.width}>{area.width}</span>
      <span className={s.length}>{area.length}</span>
    </div>
  );
}
