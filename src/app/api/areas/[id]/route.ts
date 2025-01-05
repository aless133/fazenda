import { apiCall } from "@/lib/supabase/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  return await apiCall((sb) => sb.from("areas").select("*").eq("id", id).single());
}
