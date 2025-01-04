"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/client";

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
  return <Button onClick={signInWithGoogle}>Войти через Google</Button>;
}
