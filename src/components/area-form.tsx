"use client";

import React, { useEffect, useState } from "react";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type IArea } from "@/types";
import { useRouter } from "next/navigation";
import { getUrl } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { useMutationCreate, useMutationUpdate, useMutationDelete } from "@/query/common";

interface AreaFormProps {
  initialData?: IArea;
  back: string;
}

export const AreaForm: React.FC<AreaFormProps> = ({ initialData, back }) => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const create = useMutationCreate<IArea>("areas");
  const update = useMutationUpdate<IArea>("areas", initialData?.id ?? "");
  const del = useMutationDelete("areas", initialData?.id ?? "");

  useEffect(() => {
    if (update.error) setError(update.error.message);
    if (create.error) setError(create.error.message);
    if (del.error) setError(del.error.message);

    if (update.isSuccess) router.push(getUrl(update.data));
    if (create.isSuccess) router.push(getUrl(create.data));
    if (del.isSuccess) router.push("/areas/");
  }, [update.error, create.error, del.error, update.isSuccess, create.isSuccess, del.isSuccess]);

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

    if (initialData) update.mutate(area);
    else create.mutate(area);
  };

  const handleDelete = async () => {
    if (confirm("Подтвердждаете удаление")) del.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="m-auto max-w-xs flex-col gap-4">
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
