"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { createOne } from "@/query/common";
import { IArea } from "@/types";
import { Loader } from "@/components/loader";
import { ErrorInfo } from "@/components/error-info";
import { AreaForm } from "@/components/area-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-xl text-center mb-6">Новый участок</h1>
      <AreaForm back="/areas"/>
    </div>
  );
}
