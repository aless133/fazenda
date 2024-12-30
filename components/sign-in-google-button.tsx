"use client";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";

export default function SignInGoogleButton() {
  const signInWithGoogle = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth-callback`,
      },      
    });
    return { error };
  };
  return <Button onClick={signInWithGoogle}>Sign in with Google</Button>;
}
