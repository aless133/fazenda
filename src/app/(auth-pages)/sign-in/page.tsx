import Image from "next/image";
import logoImg from "@public/logo.png";
import { SignInGoogleButton } from "@/components/sign-in-google-button";

export default async function SignIn() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 justify-start pt-20 items-center text-center">
      <h1 className="text-4xl lg:text-5xl">Фазенда</h1>
      <Image src={logoImg} alt="Fazenda" className="max-w-60"/>
      <p className="text-2xl lg:text-2xl">Учет грядок и всего что растет</p>
      <SignInGoogleButton />
    </div>
  );
}
