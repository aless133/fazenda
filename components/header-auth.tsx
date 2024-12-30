import { signOutAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import SignInGoogleButton from "@/components/sign-in-google-button";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Привет, <b> {user.email}!</b>
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Выход
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <SignInGoogleButton />
    </div>
  );
}
