"use client";

import { BigIconButton } from "@/components/big-icon-button";
import { type IconNames } from "@/components/icons";
import { useAppContext } from "@/context";

const blocks = [{ icon: "LayoutDashboard", title: "Участки", href: "/areas" }];

export default function Page() {
  const { user } = useAppContext();
  console.log(user);
  return (
    <div className="flex flex-col gap-8 max-w-60 mx-auto">
      {blocks.map((block, index) => (
        <BigIconButton key={index} icon={block.icon as IconNames} title={block.title} href={block.href} />
      ))}
    </div>
  );
}
