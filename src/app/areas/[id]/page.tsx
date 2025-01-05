"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { createOne } from "@/query/common";
import { IArea } from "@/types";
import { Loader } from "@/components/loader";

export default function Page() {
  const params = useParams<{ id: string }>();
  const { data: area, isPending } = useQuery(createOne<IArea>('areas',params.id));
  if (isPending) return <Loader />;

  return (
    <>
      <pre>{JSON.stringify(area, null, 2)}</pre>
    </>
  );
}
