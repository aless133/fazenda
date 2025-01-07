"use client";
import { AreaForm } from "@/components/area-form";

export default function Page() {
  return (
    <div>
      <h1 className="text-xl text-center mb-6">Новый участок</h1>
      <AreaForm back="/areas"/>
    </div>
  );
}
