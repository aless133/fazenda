import Link from "next/link";
import { Badge } from "./ui/badge";

export function EnvVarWarning() {
  return (
    <div className="text-destructive">
      Supabase environment variables required
    </div>
  );
}
