import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { createClient } from "@/utils/supabase/server";
import "./globals.css";
import LayoutGuest from "./layout-guest";
import LayoutUser from "./layout-user";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Фазенда",
  description: "Учет грядок и всего что растет",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  console.log(user);

  return (
    <html lang="ru" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground min-w-320px">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {user.error ? <LayoutGuest children={children} /> : <LayoutUser children={children} />}
        </ThemeProvider>
      </body>
    </html>
  );
}
