import { apiCall } from "@/lib/supabase/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return await apiCall((sb) => sb.from("areas").select("*").eq("id", id).single());
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const { id: _, ...updateData } = await request.json();
  return await apiCall((sb) => sb.from("areas").update(updateData).eq("id", id).select());
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return await apiCall((sb) => sb.from("areas").update({ del: true }).eq("id", id));
}
