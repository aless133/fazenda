"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { createList } from "@/query/common";
import { BigIconButton } from "@/components/big-icon-button";
import { IArea } from "@/types";
import { Loader } from "@/components/loader";

export default function Page() {
  const { data: areas, isPending } = useQuery(createList<IArea>("areas"));

  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col gap-8 max-w-60 mx-auto">
      {areas
        ? areas.map((area, index) => (
            <BigIconButton key={index} icon="LayoutDashboard" title={area.name} href={`/areas/${area.id}`} />
          ))
        : null}
      <BigIconButton icon="Grid2x2Plus" title="Добавить новый" href="/areas/new" />
    </div>
  );
}
