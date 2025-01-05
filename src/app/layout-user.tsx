import Image from "next/image";
import logoImg from "@public/logo.png";
import { EnvVarWarning } from "@/components/env-var-warning";
import { HeaderUser } from "@/components/header-user";
import { hasEnvVars } from "@/lib/supabase/check-env-vars";
import Link from "next/link";
import LayoutUserClient from "./layout-user-client";
import { type IUser } from "@/types";

export default async function LayoutUser({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: IUser
}>) {
  return (
    <div className="w-full min-h-screen flex flex-col flex-1 gap-8 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-14">
        <div className="container flex justify-between items-center py-3 text-sm">
          <Link href={"/"}>
            <Image src={logoImg} alt="Фазенда" className="max-w-10" />
          </Link>
          {!hasEnvVars ? <EnvVarWarning /> : <HeaderUser />}
        </div>
      </nav>
      <main className="container">
        <LayoutUserClient user={user}>{children}</LayoutUserClient>
      </main>
    </div>
  );
}
