"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { createOne } from "@/query/common";
import { IArea } from "@/types";
import { Loader } from "@/components/loader";
import { ErrorInfo } from "@/components/error-info";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUrl } from "@/lib/utils";
import { Area } from "@/components/area/area";

export default function Page() {
  const params = useParams<{ id: string }>();
  const { data: area, isPending, error } = useQuery(createOne<IArea>("areas", params.id));
  if (isPending) return <Loader />;
  if (error) return <ErrorInfo error={error} />;

  return (
    <div>
      <h1 className="text-xl text-center mb-6">Участок "{area.name}"</h1>
      <Area area={area}/>
      <Button variant="outline" asChild className="w-full mb-6">
          <Link href={getUrl(area,'edit')}>Изменить параметры участка</Link>
      </Button>
      <Button variant="outline" asChild className="w-full">
          <Link href="/areas">Назад</Link>
      </Button>
    </div>
  );
}
