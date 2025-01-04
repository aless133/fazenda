import { BigIconButton } from "@/components/big-icon-button";
import { type IconNames } from "@/components/icons";

const blocks = [{ icon: "LayoutDashboard", title: "Участки", href: "/areas" }];

export default async function Page() {
  return (
    <div className="flex flex-col gap-8 max-w-60 mx-auto">
      {blocks.map((block, index) => (
        <BigIconButton key={index} icon={block.icon as IconNames} title={block.title} href={block.href}/>
      ))}
    </div>
  );
}
