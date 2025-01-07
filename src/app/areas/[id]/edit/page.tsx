"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useQueryOne } from "@/query/common";
import { IArea } from "@/types";
import { Loader } from "@/components/loader";
import { ErrorInfo } from "@/components/error-info";
import { AreaForm } from "@/components/area-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUrl } from "@/lib/utils";

export default function Page() {
  const params = useParams<{ id: string }>();
  const { data: area, isPending, error } = useQueryOne<IArea>("areas", params.id);
  if (isPending) return <Loader />;
  if (error) return <ErrorInfo error={error} />;

  return (
    <div>
      <h1 className="text-xl text-center mb-6">Изменить участок "{area.name}"</h1>
      <AreaForm initialData={area} back={getUrl(area)}/>
    </div>
  );
}
