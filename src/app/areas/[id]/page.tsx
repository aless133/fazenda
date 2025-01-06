"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { createOne } from "@/query/common";
import { IArea } from "@/types";
import { Loader } from "@/components/loader";
import { ErrorInfo } from "@/components/error-info";

export default function Page() {
  const params = useParams<{ id: string }>();
  const { data: area, isPending, error } = useQuery(createOne<IArea>("areas", params.id));
  if (isPending) return <Loader />;
  if (error) return <ErrorInfo error={error} />;

  return (
    <>
      <pre>{JSON.stringify(area, null, 2)}</pre>
    </>
  );
}
