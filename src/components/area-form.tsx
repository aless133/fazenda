"use client";

import React, { useState } from "react";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type IArea } from "@/types";
import { useRouter } from "next/navigation";
import { getUrl } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

interface AreaFormProps {
  initialData?: IArea;
  back: string;
}

export const AreaForm: React.FC<AreaFormProps> = ({ initialData, back }) => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const area = {
      id: initialData ? initialData.id : undefined,
      name: formData.get("name") as string,
      width: Number(formData.get("width")),
      length: Number(formData.get("length")),
    };

    try {
      const response = await fetch("/api/areas" + (initialData ? `/${initialData.id}` : ""), {
        method: initialData ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(area),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data: IArea = (await response.json())[0];
      router.push(getUrl(data));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Непредвиденная ошибка");
    }
  };

  const handleDelete = async ()=>{
    if (confirm('Подтвердждаете удаление')) {
      try {
        const response = await fetch(`/api/areas/${initialData!.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({id:initialData!.id}),
        });  
        if (!response.ok) {
          throw new Error("Ошибка удаления");
        }
        router.push('/areas/');
      } catch (err) {
        setError(err instanceof Error ? err.message : "Непредвиденная ошибка");
      }     
    }
  }

  return (
    <form onSubmit={handleSubmit} className="m-auto max-w-xs flex-col space-y-4">
      {error && <div className="text-red-500 md:col-span-2">{error}</div>}
      <div className="">
        <Label htmlFor="name">Название</Label>
        <Input className="w-full" id="name" name="name" type="text" defaultValue={initialData?.name || ""} required />
      </div>
      <div className="">
        <Label htmlFor="width">Ширина</Label>
        <Input
          id="width"
          name="width"
          type="number"
          defaultValue={initialData?.width?.toString() || ""}
          required
          className="w-full"
        />
      </div>
      <div className="">
        <Label htmlFor="length">Длина</Label>
        <Input
          id="length"
          name="length"
          type="number"
          defaultValue={initialData?.length?.toString() || ""}
          required
          className="w-full"
        />
      </div>
      <div className="">
        <SubmitButton type="submit" className="w-full" pendingText="Сохраняется...">
          {initialData ? "Сохранить изменения" : "Создать участок"}
        </SubmitButton>
      </div>
      {initialData ? (
        <div className="">
          <Button type="button" variant="destructive" className="w-full" onClick={handleDelete}>
            Удалить участок
          </Button>
        </div>
      ) : null}
      <div className="">
        <Button variant="outline" asChild className="w-full">
          <Link href={back}>Назад</Link>
        </Button>
      </div>
    </form>
  );
};
