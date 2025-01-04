import { Home } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Smile } from "lucide-react";

export const icons = {
  Home: Home,
  CheckCircle: CheckCircle,
  Smile: Smile,
};

export type IconNames = keyof typeof icons;
