export default async function LayoutGuest({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="min-h-screen container">{children}</main>;
}
