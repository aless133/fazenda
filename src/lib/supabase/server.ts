import { createServerClient } from "@supabase/ssr";
import { SupabaseClient, UserResponse } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createClient = async () => {
  const cookieStore = await cookies();

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch (error) {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};

export const getUser = async () => {
  const supabase = await createClient();
  return supabase.auth.getUser();
};

export const getUserInfo = async (u?: UserResponse) => {
  const user = u ?? (await getUser());
  if (user.error) {
    return redirect("/sign-in");
  }
  return { id: user.data.user.id, email: user.data.user.email, name: user.data.user.user_metadata.name as string };
};

type FnType = (
  supabase: SupabaseClient<any, "public", any>
) => PromiseLike<{ data: any; error: { message: string } | null }>;

export const apiCall = async (fn: FnType) => {
  const sb = await createClient();
  try {
    const { data, error } = await fn(sb);
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
