"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { createOne } from "@/query/common";

export default function Page() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const { data: area } = useQuery(createOne('areas',params.id));

  return (
    <>
      <pre>{JSON.stringify(area, null, 2)}</pre>
    </>
  );
}
