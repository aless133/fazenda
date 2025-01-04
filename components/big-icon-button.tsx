"use client";

import { Button } from "@/components/ui/button";
//import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import { icons, type IconNames } from "@/components/icons";
import { type ComponentProps } from "react";
import { Home } from "lucide-react";

type Props = ComponentProps<typeof Button> & {
  title: string;
  icon: IconNames;
  href: string;
};

export function BigIconButton({ title, icon, href, onClick, ...props }: Props) {
  const Icon = icons[icon];
  //console.log("BigIconButton window", typeof window);
  if (href)
    return (
      <Link
        href={href}
        className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors"
      >
        <Icon className="w-12 h-12 text-primary mb-4" />
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </Link>
    );
  return (
    <button className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-colors">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </button>
  );
}
