import { apiCall } from "@/lib/supabase/server";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  return await apiCall((sb) => sb.from("areas").select("*").eq("id", id).single());
}

export async function PUT(request: Request) {
  const {id, ...updateData} = await request.json();
  return await apiCall((sb) => sb.from("areas").update(updateData).eq("id", id).select());
}

export async function DELETE(request: Request) {
  const {id} = await request.json();
  return await apiCall((sb) => sb.from("areas").update({del:true}).eq("id", id));
}