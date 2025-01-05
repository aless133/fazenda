import { createClient, apiCall } from "@/lib/supabase/server";

export async function GET(request: Request) {
  return await apiCall((sb) => sb.from("areas").select("*"));
}
