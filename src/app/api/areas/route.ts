import { createClient, apiCall } from "@/lib/supabase/server";

export async function GET(request: Request) {
  // for api test error
  // throw new Error('oi oi oi');
  return await apiCall((sb) => sb.from("areas").select("*"));
}
