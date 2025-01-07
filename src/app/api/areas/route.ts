import { apiCall } from "@/lib/supabase/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return await apiCall((sb) => sb.from("areas").select("*").eq('del',false));
}

export async function POST(request: NextRequest) {
  const {id:_, ...newData} = await request.json();
  return await apiCall((sb) => sb.from("areas").insert([newData]).select());
}