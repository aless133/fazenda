import React, { useRef, useState } from "react";
import s from "./area.module.css";
import { type IArea } from "@/types";
// import { Dimensions } from "./dimensions";
import { AreaButtons } from "./buttons";

type Props = {
  area: IArea;
  children?: React.ReactNode;
};

type TClientXY = {
  clientX: number;
  clientY: number;
};

const addDrag = ["bed", "building"];
const addPoint = ["tree"];

export function Area({ area, children }: Props) {
  const [vb, setVB] = useState({ x: area.x, y: area.y, width: area.width, height: area.length });
  const [add, setAdd] = useState("");
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionRect, setSelectionRect] = useState<DOMRect | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const getTouch = (event: React.TouchEvent<SVGSVGElement>) => event.touches[0];
  const getXY = (event: TClientXY) => {
    const rect = svgRef.current!.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const getScale = () => {
    const rect = svgRef.current!.getBoundingClientRect();
    return vb.width / rect.width;
  };

  function pointToSVG(x: number, y: number): { svgX: number; svgY: number } {
    const scale = getScale();
    const svgX = (x - vb.x) * scale;
    const svgY = (y - vb.y) * scale;
    return { svgX, svgY };
  }

  const rectToSVG = (rect: DOMRect) => {
    const scale = getScale();
    return {
      x: (rect.x - vb.x) * scale,
      y: (rect.y - vb.y) * scale,
      width: rect.width * scale,
      height: rect.height * scale,
    };
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!add || !addPoint.includes(add)) return;
    if (isSelecting) return;
    const xy = getXY(event);
    setAdd("");
    console.log(`Point selected`, xy);
  };

  const handleTouchStart = (event: React.TouchEvent<SVGSVGElement>) => {
    if (!add || !addDrag.includes(add)) return;
    const xy = getXY(getTouch(event));
    if (xy) {
      event.preventDefault();
      event.stopPropagation();
      setSelectionRect(new DOMRect(xy.x, xy.y, 0, 0));
      setIsSelecting(true);
    }
  };

  const handleTouchMove = (event: React.TouchEvent<SVGSVGElement>) => {
    if (!add || !addDrag.includes(add)) return;
    if (!isSelecting || !selectionRect) return;
    const xy = getXY(getTouch(event));
    if (xy) {
      event.preventDefault();
      event.stopPropagation();
      setSelectionRect(new DOMRect(selectionRect.x, selectionRect.y, xy.x - selectionRect.x, xy.y - selectionRect.y));
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<SVGSVGElement>) => {
    if (!add || !addDrag.includes(add)) return;
    if (!isSelecting || !selectionRect) return;
    event.preventDefault();
    event.stopPropagation();
    setAdd("");
    setIsSelecting(false);
    console.log("Selection Rect:", selectionRect);
  };

  const handleMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!add || !addDrag.includes(add)) return;
    const xy = getXY(event);
    if (xy) {
      setSelectionRect(new DOMRect(xy.x, xy.y, 0, 0));
      setIsSelecting(true);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!add || !addDrag.includes(add)) return;
    if (!isSelecting || !selectionRect) return;
    const xy = getXY(event);
    if (xy) {
      setSelectionRect(new DOMRect(selectionRect.x, selectionRect.y, xy.x - selectionRect.x, xy.y - selectionRect.y));
    }
  };

  const handleMouseUp = () => {
    if (!add || !addDrag.includes(add)) return;
    if (!isSelecting || !selectionRect) return;
    setAdd("");
    setIsSelecting(false);
    console.log("Selection Rect:", selectionRect);
  };

  return (
    <div>
      <AreaButtons add={add} setAdd={setAdd} />
      <div className={s.area_container + " my-6"}>
        <svg
          ref={svgRef}
          width="100%"
          className={s.area + (add ? " " + s.area_add : "")}
          style={{ aspectRatio: `${area.width}/${area.length}` }}
          viewBox={`${vb.x} ${vb.y} ${vb.width} ${vb.height}`}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {children ? children : null}
          {selectionRect ? (
            <rect
              {...rectToSVG(selectionRect)}
              stroke="red"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              fill="none"
            />
          ) : null}
        </svg>
        <span className={s.width}>{area.width - area.x}</span>
        <span className={s.length}>{area.length - area.y}</span>
      </div>
    </div>
  );
}
