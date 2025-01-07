import React from 'react';
import { Button } from "@/components/ui/button";
import { House, RectangleVertical, TreeDeciduous } from "lucide-react";

interface Props {
  add: string;
  setAdd: (value: string) => void;
}

export const AreaButtons: React.FC<Props> = React.memo(({ add, setAdd }) => {
  return (
    <div className="my-6 flex flex-row flex-wrap gap-4 items-center">
      <span>Добавить:</span>
      <Button
        variant="outline"
        className={add === "bed" ? "!bg-gray-500 !text-white" : ""}
        onClick={() => setAdd(add === "bed" ? "" : "bed")}
      >
        <RectangleVertical className="mr-1" /> Грядка
      </Button>
      <Button
        variant="outline"
        className={add === "tree" ? "!bg-gray-500 !text-white" : ""}
        onClick={() => setAdd(add === "tree" ? "" : "tree")}
      >
        <TreeDeciduous className="mr-1" /> Дерево/куст
      </Button>
      <Button
        variant="outline"
        className={add === "building" ? "!bg-gray-500 !text-white" : ""}
        onClick={() => setAdd(add === "building" ? "" : "building")}
      >
        <House className="mr-1" /> Дом/сарай/постройка
      </Button>
    </div>
  );
});

