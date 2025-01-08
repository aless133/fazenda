import { IArea } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Entity = IArea;

export function getUrl(entity: Entity, suffix?: string): string {
  if ("width" in entity && "length" in entity) {
    return `/areas/${entity.id}` + (suffix ? `/${suffix}` : "");
  } else {
    throw new Error("Unknown entity type");
  }
}

const objectNames = {
  'bed':"Грядка",
  'bed.new':"Новая грядка",
}
export function getObjectName(type:string,feature?:string) {
  const key = feature ? `${type}.${feature}` : type;
  return objectNames[key as keyof typeof objectNames];
}
