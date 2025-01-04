import { signOutAction } from "@/app/server-actions";
import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/utils/supabase/server";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default async function HeaderUser() {
  const { name } = await getUserInfo();
  return (
    <div className="flex items-center gap-2">
      <Link href="/user">{name}</Link>
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"} size="icon">
          <LogOut className="w-6 h-6 opacity-60" />
        </Button>
      </form>
    </div>
  );
}
