import { BigIconButton } from "@/components/big-icon-button";
import { type IconNames } from "@/components/icons";
import { CheckCircle } from 'lucide-react';

const blocks = [
  { icon: "Home", title: "Участки", href: "/areas" },
  // { icon: "CheckCircle", title: "Get Verified", href: "/verify" },
  // { icon: "Smile", title: "Enjoy Features", href: "/features" },
];

export default async function Page() {
  return (
    <div className="flex flex-col gap-8 max-w-60 mx-auto">
      {blocks.map((block, index) => (
        <BigIconButton key={index} icon={block.icon as IconNames} title={block.title} href={block.href}/>
      ))}
    </div>
  );
}
