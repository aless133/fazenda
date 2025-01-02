import Image from "next/image";
import logoImg from "@/public/logo.png";
import SignInGoogleButton from "@/components/sign-in-google-button";

export default async function SignIn() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-8 justify-center items-center">
      <h1 className="text-3xl lg:text-4xl !leading-tight text-center">Фазенда</h1>
      <Image src={logoImg} alt="Fazenda" />
      <p className="text-2xl lg:text-3xl !leading-tight text-center">Учет грядок и всего что растет</p>
      <SignInGoogleButton />
    </div>
  );
}
